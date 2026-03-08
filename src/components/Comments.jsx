import pg from "pg";

export default async function Comments({ id }) {
  const db = new pg.Pool({ connectionString: process.env.DB_CONN });
  const comments = (
    await db.query(`select * from comments where post_id = $1`, [id])
  ).rows;

  return (
    <>
      <ul>
        {comments.length > 0
          ? comments.map((comment) => {
              console.log(comment.created_at);

              return (
                <li key={comment.id} className="p-4 bg-secondary text-primary">
                  <div className="commentTop">{comment.author}</div>
                  <div className="commentContent">{comment.content}</div>
                </li>
              );
            })
          : "no comments! why not add your own?"}
      </ul>
    </>
  );
}
