import Image from "next/image";
import Link from "next/link";
import NavBar from "../components/NavBar";

export default function Header() {
  return (
    <>
      <header>
        {/* <Image alt="" /> */}
        <h1>title!</h1>

        <NavBar />
      </header>
    </>
  );
}
