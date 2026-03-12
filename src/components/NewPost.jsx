import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import pg from "pg";
import ImageUpload from "./ImageUpload";

export default async function NewPost() {
  async function submitPost(formData) {
    "use server";

    const { title, author, image, content } = Object.fromEntries(formData);

    const db = new pg.Pool({ connectionString: process.env.DB_CONN });
    const newPost = await db.query(
      `insert into posts (title, author, image, content, created_at) values ($1, $2, $3, $4, now()) returning id`,
      [title, author, image, content],
    );
    revalidatePath(`/posts`);
    redirect(`/posts`);
  }

  return (
    <form
      action={submitPost}
      className="newPostForm flex flex-col p-4 gap-4 w-full bg-midtone text-secondary"
    >
      <h2 className="place-self-center text-3xl">new post!</h2>

      <div className="newPostTitle flex flex-row gap-4 w-full justify-between">
        <label htmlFor="title" className="place-self-center w-20">
          <span className="text-contrast">*</span> title
        </label>
        <input
          type="text"
          name="title"
          placeholder={`title here`}
          className="w-full p-1"
          required
        />
      </div>
      <div className="newPostAuthor flex flex-row gap-4 justify-between">
        <label htmlFor="author" className="place-self-center w-20">
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
      <div className="newPostImage flex flex-row gap-4 justify-between">
        <ImageUpload />
      </div>
      <div className="newPostContent flex flex-col">
        <label htmlFor="content" className="py-1 shrink-0">
          <span className="text-contrast">*</span> spill ur heart out
        </label>
        <textarea
          name="content"
          placeholder={`text content here`}
          className="field-sizing-content min-h-32 p-2 w-full focus:border focus:border-accent"
          required
        />
      </div>

      <p>
        <span className="text-contrast">*</span> means required, ty (:
      </p>

      <button className="newPostButton p-2 bg-accent text-primary hover:bg-primary hover:text-secondary dark:hover:text-secondary active:bg-contrast">
        pupdate blog
      </button>
    </form>
  );
}
