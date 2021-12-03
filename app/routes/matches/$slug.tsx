import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import { getMatch } from "~/match";
import { Match, Team, Tournament } from "@prisma/client";

export let loader: LoaderFunction = async ({ params }) => {
  const id = params?.slug?.toString() ?? "";
  return getMatch(id);
};

export default function PostSlug() {
  let match = useLoaderData<Match & {
    team: Team[];
    tournament: Tournament;
}
  >();
  const teamA = match.team[0]
  const teamB = match.team[1]
  return (
    <div>

      <h1>{teamA.name + ` ${match.teamAResult ?? ''} X ${match.teamBResult ?? ''} ` + teamB.name}</h1>
      <p>Id:{match.id}</p>
      <p>Date:{match.scheduledDate}</p>
      <p>{match.tournament.tournamentName}</p>
    </div>
  );
}
