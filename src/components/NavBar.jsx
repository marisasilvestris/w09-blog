import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <nav className="flex flex-row gap-4">
        <Link href="./posts">all posts</Link>
        <Link href="./posts/new">new post</Link>
      </nav>
    </>
  );
}
