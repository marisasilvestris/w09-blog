import { revalidatePath } from "next/cache";
import { Tilt_Neon } from "next/font/google";
import { redirect } from "next/navigation";
import pg from "pg";

export default async function NewPost() {
  async function submitPost(formData) {
    "use server";

    const { title, author, image, content } = Object.fromEntries(formData);

    const db = new pg.Pool({ connectionString: process.env.DB_CONN });
    const newPost = db.query(
      `insert into posts (title, author, image, content, created_at) values ($1, $2, $3, $4, now()) returning id`,
      [title, author, image, content],
    );
    revalidatePath(`/posts`);
    redirect(`/posts`);
  }

  return (
    <>
      <form
        action={submitPost}
        className="newPostForm flex flex-col p-4 bg-teal-700"
      >
        <div className="newPostTitle flex flex-row gap-4">
          <label htmlFor="title">title</label>
          <input
            type="text"
            name="title"
            placeholder={`title here`}
            className="border border-pink-400 basis-[40%] place-self-end"
            required
          />
        </div>
        <div className="newPostAuthor flex flex-row gap-4">
          <label htmlFor="author">name</label>
          <input
            type="text"
            name="author"
            placeholder={`name here pls`}
            className="border border-lime-300 grow"
            required
          />
        </div>
        <div className="newPostImage flex flex-row gap-4">
          <label htmlFor="image">img url</label>
          <input
            type="text"
            name="image"
            placeholder="url here pls"
            className="border border-lime-300 grow"
          />
        </div>
        <div className="newPostContent flex flex-col">
          <label htmlFor="content" className="">
            spill ur heart out
          </label>
          <textarea
            name="content"
            placeholder={`text content here`}
            className="border border-orange-200 focus:text-black"
            required
          />
        </div>
        <button className="newPostButton">pupdate blog</button>
      </form>
    </>
  );
}
