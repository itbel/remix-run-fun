import { MetaFunction } from "remix";

export let meta: MetaFunction = () => {
  return {
    title: "Bolao",
    description: "Soccer Stuff",
  };
};

export default function Index() {
  return (
    <div className="remix__page">
      <main>
        <h1>Home Page</h1>
      </main>
    </div>
  );
}
