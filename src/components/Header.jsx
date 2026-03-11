import Image from "next/image";
import Link from "next/link";
import NavBar from "../components/NavBar";

export default function Header() {
  return (
    <>
      <header className="place-self-center">
        <Link
          href="/"
          className="flex flex-row place-self-center text-6xl p-4 hover:text-accent"
        >
          <h1 className="font-bold">cool blog for rad people</h1>
        </Link>
        <div className="flex flex-col w-fit place-self-center gap-2">
          <NavBar />
        </div>
      </header>
    </>
  );
}
