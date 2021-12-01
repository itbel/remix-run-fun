import { json } from "remix";
import { supabase } from "./utils/initSupabase";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export async function getTeams() {
  const data = await prisma.team.findMany()
  return data;
}

export async function getTeam(slug: string) {
  const team = await prisma.team.findFirst({where: {
    id: slug
  }})
  return team
}

export async function createTeam(formData: FormData) {
  const teamName = formData.get("name")?.toString()
  if(!teamName){
    return 
  }
  return prisma.team.create({ data : {
    name: teamName
  }});;
}

export async function deleteTeam(formData: FormData) {
  const teamId = formData.get("id")?.toString()
  if(!teamId){
    return;
  }
  return prisma.team.delete({where:{
    id: teamId
  }})
}
