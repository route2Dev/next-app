import { getServerAuthSession } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <main>
      <h1>Hello {session && <span>{session.user?.name}</span>}</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  );
}
