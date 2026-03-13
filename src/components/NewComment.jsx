import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import pg from "pg";

export default async function NewComment({ id }) {
  async function submitPost(formData) {
    "use server";

    const { author, content } = Object.fromEntries(formData);

    const db = new pg.Pool({ connectionString: process.env.DB_CONN });

    const newComment = await db.query(
      `insert into blogcomments (post_id, author, content, created_at) values ($1, $2, $3, now())`,
      [id, author, content],
    );
    revalidatePath(`/posts`);
    redirect(`/posts/${id}`);
  }

  return (
    <>
      <form
        action={submitPost}
        className="newCommentForm flex flex-col p-4 gap-2 w-full bg-midtone"
      >
        <div className="newCommentAuthor flex flex-row gap-4 justify-between">
          <label htmlFor="author" className="place-self-center shrink-0">
            <span className="text-contrast">*</span> name
          </label>
          <input
            type="text"
            name="author"
            placeholder={`name here pls`}
            className="w-full p-1"
            required
          />
        </div>
        <div className="newCommentContent flex flex-col justify-between">
          <label htmlFor="content" className="">
            <span className="text-contrast">*</span> spill ur heart out
          </label>
          <textarea
            name="content"
            placeholder={`text content here`}
            className="field-sizing-content w-full min-h-32 p-2"
            required
          />
        </div>

        <p>
          <span className="text-contrast">*</span> means required, ty (:
        </p>

        <button className="newCommentButton p-2 bg-accent text-primary hover:bg-primary hover:text-secondary dark:hover:text-secondary active:bg-contrast">
          bark bark
        </button>
      </form>
    </>
  );
}
