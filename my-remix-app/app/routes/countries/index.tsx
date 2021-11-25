import { Link, useLoaderData } from "remix";
import { Country, getCountries } from "~/country";

export let loader = async () => {
  return getCountries();
};

export default function Posts() {
  const data = useLoaderData<Country[]>();
  return (
    <div>
      <h1>Countries</h1>
      <ul>
       {data.map((country) => 
         <li key={country.id.toString()}>
          <Link to={country.id.toString()}>{country.name}</Link>
         </li>
       )}
      </ul>
    </div>
  );
}
