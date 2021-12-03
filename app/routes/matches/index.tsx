import { Match, Team } from ".prisma/client";
import { Tournament } from "@prisma/client";
import {
  MetaFunction,
  LoaderFunction,
  Form,
  ActionFunction,
  Link,
  redirect,
} from "remix";
import { useLoaderData } from "remix";
import { getMatches } from "~/match";

export let loader: LoaderFunction = () => {
  return getMatches();
};

export let action: ActionFunction = async ({ request }) => {};

export let meta: MetaFunction = () => {
  return {
    title: "Test - Matches List",
    description: "Matches",
  };
};

export default function Index() {
  let data = useLoaderData<
    Array<
    Match & {
      team: Team[];
      tournament: Tournament;
  }
    >
  >();

  return (
    <div className="remix__page">
      <main>
        <h2>
          Matches
          <Link to={"/matches/new"} style={{ marginLeft: 16 }}>
            Add a match
          </Link>
        </h2>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {data.map((match, index) => {
              const teamA = match.team[0];
              const teamB = match.team[1];
              return <tr key={match.id.toString()}>
                <td>{index + 1}</td>
                <td>
                  <Link to={match.id.toString()}>{teamA.name + ` ${match.teamAResult ?? ''} X ${match.teamBResult ?? ''} ` + teamB.name}</Link>
                </td>
                <td>
                  <Form method="delete">
                    <input value={match.id} readOnly name="id" hidden />
                    <button type="submit"> - </button>
                  </Form>
                </td>
              </tr>
})}
          </tbody>
        </table>
      </main>
    </div>
  );
}
