import Post from "@/components/Post";
import Image from "next/image";
import Link from "next/link";
import pg from "pg";

export default async function Page() {
  const db = new pg.Pool({ connectionString: process.env.DB_CONN });
  const posts = (await db.query(`select * from posts`)).rows;

  return (
    <>
      <ul className="w-full">
        {posts.length > 0
          ? posts.map((post) => {
              return <Post key={post.id} post={post} />;
            })
          : "no posts found!!"}
      </ul>
    </>
  );
}
