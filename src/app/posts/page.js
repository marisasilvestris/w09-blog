import pg from "pg";

export default async function Page() {
  const db = new pg.Pool({ connectionString: process.env.DB_CONN });

  const posts = (await db.query(`select * from posts`)).rows;
  console.log(posts);

  return (
    <>
      <div>test1</div>
      <div>test2</div>
    </>
  );
}
