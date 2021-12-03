import { Team, Tournament } from ".prisma/client";
import { MetaFunction, LoaderFunction, Form, Link } from "remix";
import { useLoaderData } from "remix";
import { getTournaments } from "~/tournament";

export let loader: LoaderFunction = () => {
  return getTournaments();
};

export let meta: MetaFunction = () => {
  return {
    title: "Tournaments List",
    description: "Tournaments",
  };
};

export default function Index() {
  let data = useLoaderData<Tournament[]>();

  return (
    <div className="remix__page">
      <main>
        <h2>
          Tournaments
          <Link to={"/tournaments/new"} style={{ marginLeft: 16 }}>
            Create a Tournament
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
            {data.map((tournament, index) => (
              <tr key={tournament.id.toString()}>
                <td>{index + 1}</td>
                <td>
                  <Link to={tournament.id.toString()}>{tournament.tournamentName}</Link>
                </td>
                <td>
                  <Form method="delete">
                    <input value={tournament.id} readOnly name="id" hidden />
                    <button type="submit"> - </button>
                  </Form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
