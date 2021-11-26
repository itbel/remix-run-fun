import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import { Team, getTeam } from "~/team";

export let loader: LoaderFunction = async ({ params }) => {
  const id = params?.slug?.toString() ?? "";
  const team = await getTeam(id);
  return team;
};

export default function PostSlug() {
  let team = useLoaderData<Team>();
  return (
    <div>
      <h1>{team?.name}</h1>
    </div>
  );
}
