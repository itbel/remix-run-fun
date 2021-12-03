import { ActionFunction, Form, MetaFunction, redirect, useTransition } from "remix";
import { createTeam } from "~/team";

export let action: ActionFunction = async ({ request }) => {
    let body = await request.formData();
    switch (request.method) {
      case "PUT":
        await createTeam(body);
    }
    return redirect("/teams");
  };
  export let meta: MetaFunction = () => {
    return {
      title: "Test - Add Team",
      description: "Add a team",
    };
  };
export default function NewTeamRoute() {
    let transition = useTransition();
    return (
      <div>
        <p>Add a new team</p>
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
              {transition.state === "submitting" ? "Loading..." : "Create"}
            </button>
          </fieldset>
        </Form>
      </div>
    );
  }