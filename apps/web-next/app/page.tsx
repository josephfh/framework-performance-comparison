import Cart from "./cart";

export default function Page(): JSX.Element {
  return (
    <main>
      <h1 className="text-3xl bg-red-500 font-bold underline">Next.js</h1>
      <Cart />
    </main>
  );
}
