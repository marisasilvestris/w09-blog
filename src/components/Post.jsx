import { revalidatePath } from "next/cache";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import pg from "pg";

export default async function Post({ post }) {
  async function deletePost() {
    "use server";
    const db = new pg.Pool({ connectionString: process.env.DB_CONN });
    const deleteQuery = db.query(`delete from posts where id = $1`, [post.id]);

    revalidatePath(`/posts`);
    redirect(`/posts`);
  }
  return (
    <li key={`${post.id}`} className="post flex flex-col gap-2 w-full">
      <Link href={`/posts/${post.id}`} className="postTop flex flex-col gap-2">
        {post.image ? (
          <div className="relative h-64">
            <Image
              src={`${post.image}`}
              fill={true}
              className="postImage object-cover"
              alt=""
            />
          </div>
        ) : (
          <div className="bg-accent w-full min-h-56"></div>
        )}
        <h3 className="postTitle text-3xl">{`${post.title}`}</h3>
      </Link>
      <div className="postBody">
        <div className="postAuthor text-contrast">{`${post.author}`}</div>
        <div className="postContent whitespace-pre-wrap my-4 text-xl">{`${post.content}`}</div>
        <div className="postTime text-xs">{`${post.created_at}`}</div>
      </div>
      <button
        className="postDelete bg-contrast w-fit text-primary dark:text-secondary py-2 px-4"
        onClick={deletePost}
      >
        bad post?
      </button>
    </li>
  );
}
