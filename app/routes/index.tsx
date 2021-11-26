import { MetaFunction } from "remix";

export let meta: MetaFunction = () => {
  return {
    title: "Testing",
    description: "Testing some stuff",
  };
};

export default function Index() {
  return (
    <div className="remix__page">
      <main>
        <h1>Hello</h1>
      </main>
    </div>
  );
}
