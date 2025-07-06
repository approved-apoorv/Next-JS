import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="mx-auto">
        <div className="flex justify-center">
          <Image
            className="object-center"
            src={"/vector.jpg"}
            width={250}
            height={200}
            alt="Vector image"
          />
        </div>
        <div className="flex flex-wrap justify-center">
          <h1 className="flex font-bold text-5xl items-center ">Welcome to QuikLinks</h1>
          <p className="py-2 px-80 text-lg text-center">Shorten, Share, Simplify. Instantly transform long, clunky URLs into neat, shareable links. Perfect for social media, emails, or anywhere you need a clean link.</p>
          <Link href={'/shorten'}>
            <button className='bg-[#791d73] hover:bg-[#c475c0] text-white p-2.5 mt-2 rounded-xl text-2xl font-semibold'>
              Try now
            </button></Link>
        </div>
      </section>
    </main>
  );
}
