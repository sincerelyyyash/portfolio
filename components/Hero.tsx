"use client";
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row justify-between w-full min-h-[20rem] space-y-4 md:space-y-0 md:space-x-8 p-8 mt-20">
      <div className="flex-1 md:flex-[3/4] space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Yash Thakur
        </h1>

        <p className="text-xl text-neutral-400">
          Building{" "}
          <span className="text-white font-semibold">
            cool things
          </span>
        </p>

        <p className="text-md text-neutral-400">
          Full Stack Developer building products and web apps. Find me
          on{" "}
          <Link href="https://twitter.com/sincerelyyyash" className="text-white font-semibold hover:underline"
            target='_blank'
            rel='noopener noreferrer'
          >
            twitter
          </Link>{" "}
          for updates.
        </p>
      </div>
      <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto rounded-md overflow-hidden md:mx-0">
        <Image
          src="/assets/images/profile-photo.jpeg"
          alt="Profile Image"
          width={100}
          height={100}
          className="rounded-md object-cover"
        />
      </div>
    </section>
  );
}
