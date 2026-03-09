import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <nav className="flex flex-row gap-8 w-full text-sm place-self-center place-content-between uppercase">
        <Link
          href="/posts"
          className=" p-4 hover:bg-accent hover:text-secondary hover:dark:text-primary"
        >
          all posts
        </Link>
        <Link
          href="/posts/new"
          className=" p-4 hover:bg-accent hover:text-secondary hover:dark:text-primary"
        >
          new post
        </Link>
      </nav>
    </>
  );
}
