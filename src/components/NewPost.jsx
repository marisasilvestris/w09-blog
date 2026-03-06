export default function NewPost() {
  return (
    <>
      <form>
        <label htmlFor="title">title</label>
        <input type="text" name="title" defaultValue={``} />
        <label htmlFor="author">name</label>
        <input type="text" name="author" defaultValue={`name here pls`} />
        <label htmlFor="content">spill ur heart out</label>
        <textarea name="content" />
      </form>
    </>
  );
}
