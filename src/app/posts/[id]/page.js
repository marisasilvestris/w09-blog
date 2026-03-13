import Comments from "@/components/Comments";
import NewComment from "@/components/NewComment";
import Post from "@/components/Post";
import Image from "next/image";
import Link from "next/link";
import pg from "pg";

export default async function Page({ params }) {
  const { id } = await params;

  const db = new pg.Pool({ connectionString: process.env.DB_CONN });
  const post = (await db.query(`select * from blogposts where id = $1`, [id]))
    .rows[0];

  return (
    <>
      <ul className="w-full gap-4 flex flex-col">
        {post ? (
          <>
            <Post post={post} />
            <NewComment id={post.id} />
            <Comments id={post.id} />
          </>
        ) : (
          "no post found!!"
        )}
      </ul>
    </>
  );
}
