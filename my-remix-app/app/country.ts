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
    const { data } = await supabase.from("countries").select("id, name");
    return json(data);
  }
  export async function getCountry(slug: string) {
      const country = await supabase.from("countries").select().filter('id', 'eq', slug);
      // use .match() instead
      // checkpoint: this can be better
      return json(country?.data?.[0]);
  }