import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export async function getTournaments() {
  const data = await prisma.tournament.findMany()

  return data;
}

export async function getTournament(slug: string) {
  const tournament = await prisma.tournament.findFirst({where: {
    id: slug
  }})
  return tournament;
}