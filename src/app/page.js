import NewPost from "@/components/NewPost";

export default async function Home() {
  return (
    <>
      <div className="w-full flex flex-col gap-4">
        <h1>home page!</h1>
        <p>hello this is my legend of zelda fan blog</p>
        <NewPost />
      </div>
    </>
  );
}
