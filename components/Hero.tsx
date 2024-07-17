"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../components/ui/hero-highlight";
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row justify-start w-full min-h-[50rem] space-y-8 md:space-y-0 md:space-x-8 p-8">

      <div className="flex-1 md:flex-[1/3] text-center p-4 rounded-full shadow-md">
        <div className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto rounded-full overflow-hidden">
          <Image
            src="/assets/images/profile-photo.jpeg"
            alt="Yash Thakur"
            width={400}
            height={400}
            className="rounded-full object-cover"
          />
        </div>
      </div>

      <div className="flex-1 md:flex-[2/3] p-4 rounded-lg shadow-md mt-10 md:mt-0">
        <h3 className="text-lg md:text-xl font-semibold">Hey There!</h3>
        <div className="mt-6 mb-6">
          <Highlight className="text-2xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-relaxed lg:leading-snug">
            I'm Yash Thakur
          </Highlight>
        </div>

        <h4 className="text-lg md:text-2xl">Full Stack Developer</h4>
        <p className="text-md md:text-lg mt-4">
          Hello! My name is Yash Thakur, and I'm a software developer specializing in full stack development.<br />
          Since 2020, I've been passionate about coding and building innovative solutions.<br />
          I enjoy tackling complex problems and continuously learning new technologies.
        </p>
      </div>
    </section>
  );
}

