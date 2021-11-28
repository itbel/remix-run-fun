import {
  MetaFunction,
  LoaderFunction,
  Form,
  ActionFunction,
  useTransition,
  Link,
  redirect,
} from "remix";
import { useLoaderData } from "remix";
import { createTeam, deleteTeam, getTeams, Team } from "~/team";

export let loader: LoaderFunction = () => {
  return getTeams();
};

export let action: ActionFunction = async ({ request }) => {
  let body = await request.formData();
  switch (request.method) {
    case "DELETE":
      await deleteTeam(body);
  }
  return redirect("/teams");
};

export let meta: MetaFunction = () => {
  return {
    title: "Test - Teams List",
    description: "Teams",
  };
};

export default function Index() {
  let data = useLoaderData<Team[]>();

  return (
    <div className="remix__page">
      <main>
        <h2>Teams<Link to={'/teams/new'} style={{marginLeft:16}}>Add a team</Link></h2>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {data.map((team, index) => (
              <tr key={team.id.toString()}>
                <td>{index + 1}</td>
                <td>
                  <Link to={team.id.toString()}>{team.name}</Link>
                </td>
                <td>
                  <Form method="delete">
                    <input value={team.id} readOnly name="id" hidden />
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
