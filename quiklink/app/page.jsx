import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center -mt-24 items-center px-4">
      <section className="w-full max-w-screen-md">
        <div className="flex justify-center">
          <Image
            className="object-center bg-blend-overlay"
            src="/vector.jpg"
            width={250}
            height={200}
            alt="Vector image"
          />
        </div>

        <div className="flex flex-col items-center text-center mt-4 space-y-4">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl">Welcome to QuikLinks</h1>

          <p className="text-base sm:text-lg px-4 sm:px-10 md:px-20 lg:px-40">
            Shorten, Share, Simplify. Instantly transform long, clunky URLs into neat, shareable links. Perfect for social media, emails, or anywhere you need a clean link.
          </p>

          <Link href="/shorten">
            <button className="bg-[#176B87] hover:bg-[#86B6F6] hover:text-gray-900 text-white py-2.5 px-6 rounded-xl text-lg sm:text-xl font-semibold transition">
              Try now
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
