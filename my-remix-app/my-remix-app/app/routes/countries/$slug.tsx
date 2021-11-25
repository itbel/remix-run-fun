import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import { Country, getCountry } from "~/country";

export let loader: LoaderFunction = async ({ params }) => {
  const id = params?.slug?.toString() ?? "";
  const post = await getCountry(id);
  return post;
};

export default function PostSlug() {
  let country = useLoaderData<Country>();
  return (
    <div>
      <h1>{country?.name}</h1>
      <p>id: {country?.id}</p>
      <p>iso2: {country?.iso2}</p>
      <p>iso3: {country?.iso3}</p>
      <p>local name: {country?.local_name}</p>
      <p>continent: {country?.continent}</p>
    </div>
  );
}
