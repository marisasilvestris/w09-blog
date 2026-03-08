import pg from "pg";

export default function NewComment({ id }) {
  async function submitPost(formData) {
    "use server";

    const { author, content } = Object.fromEntries(formData);

    const db = new pg.Pool({ connectionString: process.env.DB_CONN });

    const newComment = db.query(
      `insert into comments (post_id, author, content, created_at) values ($1, $2, $3, now())`,
      [id, author, content],
    );
  }

  return (
    <>
      <form
        action={submitPost}
        className="newCommentForm flex flex-col p-4 bg-cyan-600"
      >
        <div className="newCommentAuthor flex flex-row gap-4">
          <label htmlFor="author">name</label>
          <input
            type="text"
            name="author"
            placeholder={`name here pls`}
            className="border border-lime-300 grow"
          />
        </div>
        <div className="newCommentContent flex flex-col">
          <label htmlFor="content" className="">
            spill ur heart out
          </label>
          <textarea
            name="content"
            placeholder={`text content here`}
            className="border border-orange-200 focus:text-black"
          />
        </div>
        <button className="newCommentButton w-fit border-black bg-emerald-200 rounded-md overflow-hidden">
          bark bark
        </button>
      </form>
    </>
  );
}
