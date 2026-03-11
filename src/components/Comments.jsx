import pg from "pg";

export default async function Comments({ id }) {
  const db = new pg.Pool({ connectionString: process.env.DB_CONN });
  const comments = (
    await db.query(`select * from comments where post_id = $1`, [id])
  ).rows;

  return (
    <>
      <ul className="flex flex-col gap-4">
        {comments.length > 0
          ? comments.map((comment) => {
              return (
                <li
                  key={comment.id}
                  className="p-4 bg-midtone text-secondary flex flex-col gap-2"
                >
                  <div className="commentTop text-accent">{comment.author}</div>
                  <div className="commentContent">{comment.content}</div>
                </li>
              );
            })
          : "no comments! why not add your own?"}
      </ul>
    </>
  );
}
