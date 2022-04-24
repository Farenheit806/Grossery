import Link from "next/link";

export const Navbar = () => (
  <header>
    <ul>
      <Link href="/">Home</Link>
      <Link href="/catalog">Catalog</Link>
    </ul>
  </header>
);
