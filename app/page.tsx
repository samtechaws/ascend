import Ship from "./ui/ship";


export const dynamic = "force-dynamic";

export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Ship />
    </main>
  )
}
