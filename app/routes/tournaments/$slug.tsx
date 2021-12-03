import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import {  getTournament } from "~/tournament";
import { Team, Tournament, User } from "@prisma/client";

export let loader: LoaderFunction = async ({ params }) => {
  const id = params?.slug?.toString() ?? "";
  return getTournament(id);
};

export default function PostSlug() {
  let tournament = useLoaderData<Tournament>();
  return (
    <div>
      <h1>{tournament?.tournamentName}</h1>
    </div>
  );
}
