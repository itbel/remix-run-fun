import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import {  getTeam } from "~/team";
import { Team } from "@prisma/client";

export let loader: LoaderFunction = async ({ params }) => {
  const id = params?.slug?.toString() ?? "";
  return getTeam(id);
};

export default function PostSlug() {
  let team = useLoaderData<Team>();
  return (
    <div>
      <h1>{team?.name}</h1>
    </div>
  );
}
