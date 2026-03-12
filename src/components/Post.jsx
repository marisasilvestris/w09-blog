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
    <li key={`${post.id}`} className="post flex flex-col gap-4 w-full">
      <Link
        href={`/posts/${post.id}`}
        className="postTop flex flex-col gap-4 hover:text-accent"
      >
        <h3 className="postTitle text-3xl border-b-4 border-accent font-medium">{`${post.title}`}</h3>
        {post.image ? (
          <div className="postImageContainer relative min-h-86">
            <Image
              src={`${post.image}`}
              fill={true}
              className="postImage object-cover"
              alt=""
            />
          </div>
        ) : null}
      </Link>
      <div className="postBody">
        <div className="postAuthor text-accent mx-4">{`${post.author}`}</div>
        <div className="postContent whitespace-pre-wrap m-4 text-xl">{`${post.content}`}</div>
        <div className="postTime text-accent text-xs">{`${post.created_at.toLocaleDateString()} ${post.created_at.toLocaleTimeString()}`}</div>
      </div>
      <button
        className="postDelete bg-contrast text-xs text-primary dark:text-secondary p-2 px-4 w-fit hover:bg-accent dark:hover:text-primary active:bg-contrast"
        onClick={deletePost}
      >
        bad post?
      </button>
    </li>
  );
}
