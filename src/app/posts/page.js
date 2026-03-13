import Post from "@/components/Post";
import Image from "next/image";
import Link from "next/link";
import pg from "pg";

export default async function Page({ searchParams }) {
  const db = new pg.Pool({ connectionString: process.env.DB_CONN });
  const posts = (
    await db.query(`select * from blogposts order by created_at desc`)
  ).rows;

  const params = await searchParams;
  if (params.sort === "asc") {
    posts.reverse();
  }

  return (
    <>
      <div className="sortBy flex flex-row place-self-center p-2">
        <Link
          href="/posts"
          className={`p-2 hover:bg-accent hover:text-primary ${!params.sort ? "text-contrast font-medium" : null}`} // god i have come to love template literals and ternary ops but i still get confused with the order of `s and {s
        >
          new
        </Link>
        <Link
          href="/posts?sort=asc"
          className={`p-2  hover:bg-accent hover:text-primary ${params.sort === "asc" ? "text-contrast font-medium" : null}`}
        >
          old
        </Link>
      </div>
      <ul className="postsList w-full flex flex-col gap-16">
        {posts.length > 0 ? (
          posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })
        ) : (
          <p className="px-4 p-2 bg-contrast text-primary dark:text-secondary w-fit">
            no posts found!
          </p>
        )}
      </ul>
    </>
  );
}
