import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <nav className="flex flex-row gap-8 w-full text-sm place-self-center place-content-between border-b-4 border-b-accent font-medium">
        <Link
          href="/posts"
          className="p-4 hover:bg-accent hover:text-primary active:bg-contrast"
        >
          all posts
        </Link>
        <Link
          href="/posts/new"
          className="p-4 hover:bg-accent hover:text-primary active:bg-contrast"
        >
          new post
        </Link>
      </nav>
    </>
  );
}
