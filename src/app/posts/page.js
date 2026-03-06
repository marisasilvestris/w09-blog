import Image from "next/image";
import Link from "next/link";
import pg from "pg";

export default async function Page() {
  const db = new pg.Pool({ connectionString: process.env.DB_CONN });
  const posts = (await db.query(`select * from posts`)).rows;

  console.log(posts);

  return (
    <>
      <ul>
        {posts.length > 0
          ? posts.map(({ id, created_at, author, content, image, title }) => {
              return (
                <li key={`${id}`} className="post p-4 border-green-500">
                  <Link href={`./posts/${id}`} className="postTop">
                    {/* <Image src={`${image}`} alt="" /> */}
                    <h3 className="postTitle text-2xl">{`${title}`}</h3>
                  </Link>
                  <div className="postAuthor">{`${author}`}</div>
                  <div className="postContent whitespace-pre-wrap w-100">{`${content}`}</div>
                  <div className="postTime text-xs">{`${created_at}`}</div>
                </li>
              );
            })
          : "no posts found!!"}
      </ul>
    </>
  );
}
