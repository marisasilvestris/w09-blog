import Image from "next/image";
import Link from "next/link";

export default async function Post({ post }) {
  return (
    <li
      key={`${post.id}`}
      className="post p-4 border-green-500 flex flex-col gap-2 w-full"
    >
      <Link href={`/posts/${post.id}`} className="postTop">
        {post.image ? (
          <div className="relative h-64">
            <Image
              src={`${post.image}`}
              fill={true}
              className="postImage object-cover"
              alt=""
            />
          </div>
        ) : (
          <div className="bg-green-400 w-full min-h-56"></div>
        )}
        <h3 className="postTitle text-2xl">{`${post.title}`}</h3>
      </Link>
      <div className="postAuthor p-2">{`${post.author}`}</div>
      <div className="postContent whitespace-pre-wrap my-4">{`${post.content}`}</div>
      <div className="postTime text-xs">{`${post.created_at}`}</div>
    </li>
  );
}
