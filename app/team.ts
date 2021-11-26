import { json } from "remix";
import { supabase } from "./utils/initSupabase";

export type Team = {
  id: number;
  inserted_at: string;
  updated_at: string;
  name: string;
};

export async function getTeams() {
  const { data, error } = await supabase.from("team").select().order("name");
  return json(data);
}

export async function getTeam(slug: string) {
  const { data, error } = await supabase
    .from("team")
    .select("*")
    .match({ id: slug });
  return data?.[0];
}

export async function createTeam(formData: FormData) {
  const { data, error } = await supabase
    .from("team")
    .insert([{ name: formData.get("name") }]);
  return json(data);
}

export async function deleteTeam(formData: FormData) {
  const { data, error } = await supabase
    .from("team")
    .delete()
    .match({ id: formData.get("id") });
  return json(data);
}
