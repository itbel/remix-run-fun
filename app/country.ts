import { json } from "remix";
import { supabase } from "./utils/initSupabase";

export type Country = {
    continent: string | null;
    id: string;
    name: string
    iso2: string;
    iso3: string;
    local_name: string | null;
  };
  
  export async function getCountries() {
    const { data, error } = await supabase.from("countries").select("id, name").order('name', {ascending: true});
    return json(data);
  }
  export async function getCountry(slug: string) {
      const { data, error } = await supabase.from("countries").select().match({ id: slug });
      return data?.[0];
  }