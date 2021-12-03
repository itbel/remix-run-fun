import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getMatches() {
  const data = await prisma.match.findMany({
    include: {
      team: true,
    }
  });
  return data;
}

export async function getMatch(slug: string) {
  const match = await prisma.match.findFirst({
    where: {
      id: slug,
    },
    include: {
      team: true,
    },
  });
  return match;
}
