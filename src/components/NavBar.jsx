import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <nav className="flex flex-row gap-8 p-4 w-fit place-self-center border-b-4 border-b-yellow-300 uppercase">
        <Link href="/posts">all posts</Link>
        <Link href="/posts/new">new post</Link>
      </nav>
    </>
  );
}
