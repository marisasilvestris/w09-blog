import Image from "next/image";

export default async function Home() {
  return (
    <>
      <div className="w-full flex flex-col gap-4">
        <h2 className="font-bold self-center text-4xl">meow meow</h2>
        <p>hello this is my legend of zelda fan blog</p>
        <p>{`just kidding obviously it's about cats`}</p>
        <Image
          src="https://msnicelupe.neocities.org/img/cats/zim1.gif"
          alt="zimboman the cat"
          width={`139`}
          height={`300`}
          className="w-full max-w-96 max-h-96 object-cover self-center"
        />
        <p>wee hooray yay cats</p>
        <p>i think this site turned out okay</p>
      </div>
    </>
  );
}
