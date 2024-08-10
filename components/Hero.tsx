"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0.5, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: 'easeInOut',
      }}
      className="flex flex-wrap justify-center mt-4"
    >
      <section className="flex flex-col md:flex-row justify-start w-full min-h-[35rem] space-y-8 md:space-y-0 md:space-x-8 p-8 mt-20">

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
          <div className="relative z-10 text-lg md:text-7xl  
          bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
            Yash Thakur
          </div>

          <h4 className="relative z-10 text-lg md:text-4xl  
          bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-neutral-200 mt-4 mb-2">
            Full Stack Developer
          </h4>
          <h4 className="relative z-10 text-lg md:text-4xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-neutral-500">
            ~ From concept to code, making it happen.
          </h4>
          {/* <p className="text-md md:text-lg text-neutral-700 dark:text-neutral-300 mt-6 leading-relaxed"> */}
          {/*   Hello! My name is Yash Thakur, and I'm a software developer specializing in full stack development. Since 2020, I've been passionate about coding and building innovative solutions. I enjoy tackling complex problems and continuously learning new technologies. */}
          {/* </p> */}
        </div>
      </section>
    </motion.div>

  );
}

