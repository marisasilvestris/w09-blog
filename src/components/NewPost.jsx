import pg from "pg";

export default async function NewPost() {
  const db = new pg.Pool({ connectionString: process.env.DB_CONN });
  //   const newPost = (
  //     await db.query(`insert into posts (title, author, content, image) `)
  //   ).rows;

  return (
    <>
      <form className="newPostForm flex flex-col bg-teal-700">
        <label htmlFor="title">title</label>
        <input
          type="text"
          name="title"
          defaultValue={`title here`}
          className="border border-pink-400"
        />
        <label htmlFor="author">name</label>
        <input
          type="text"
          name="author"
          defaultValue={`name here pls`}
          className="border border-lime-300"
        />
        <label htmlFor="content">spill ur heart out</label>
        <textarea
          name="content"
          defaultValue={`text content here`}
          className="border border-orange-200 focus:text-black"
        />
      </form>
    </>
  );
}
