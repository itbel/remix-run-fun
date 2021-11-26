import { Link, useLoaderData } from "remix";
import { Country, getCountries } from "~/country";

export let loader = async () => {
  return getCountries();
};

export default function Posts() {
  const data = useLoaderData<Country[]>();
  return (
    <div>
      <table style={{margin:'auto', border:'1px solid #e4e1e1', marginTop:32}}>
        <thead>
          <tr><th colSpan={2} style={{fontSize:32}}>Countries</th></tr>
          <tr>
            <th>ID</th>
            <th style={{textAlign:'end'}}>Country</th>
          </tr>
        </thead>
        <tbody>
          {data.map((country, index) => (
            <tr key={country.id} style={index % 2 === 0 ? {backgroundColor:'#efefef'}: {}}>
              <td>{country.id.toString()}</td>
              <td style={{textAlign:'end'}}>
                <Link to={country.id.toString()}>{country.name}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
