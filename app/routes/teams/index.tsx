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
    case "PUT":
      await createTeam(body);
    case "DELETE":
      await deleteTeam(body);
  }
  return redirect("/teams");
};

export let meta: MetaFunction = () => {
  return {
    title: "Testing",
    description: "Testing some stuff",
  };
};

export default function Index() {
  let data = useLoaderData<Team[]>();
  let transition = useTransition();
  return (
    <div className="remix__page">
      <main>
        <h2>Teams</h2>
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
        <Form method="put">
          <fieldset disabled={transition.state === "submitting"}>
            <label>
              <input
                name="name"
                type="text"
                required
                placeholder="Team"
              ></input>
            </label>

            <button type="submit">
              {transition.state === "submitting" ? "Creating..." : "Create"}
            </button>
          </fieldset>
        </Form>
      </main>
    </div>
  );
}
