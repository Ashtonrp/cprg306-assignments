import NewItem from "./new-item";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Counter</h1>
      <NewItem />
    </main>
  );
}