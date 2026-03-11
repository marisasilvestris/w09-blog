import Image from "next/image";
import Link from "next/link";
import NavBar from "../components/NavBar";

export default function Header() {
  return (
    <>
      <header className="place-self-center">
        <Link
          href="/"
          className="flex flex-row size-fit place-self-center text-6xl p-4"
        >
          <h1 className="font-bold">Blog Page</h1>
        </Link>
        <div className="flex flex-col w-fit place-self-center gap-2">
          <NavBar />
        </div>
      </header>
    </>
  );
}
