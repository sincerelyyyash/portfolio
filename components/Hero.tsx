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
      className="flex flex-col items-center mt-8 px-4 sm:px-6 md:px-8"
    >
      <section className="flex flex-col sm:flex-row items-center justify-center w-full min-h-[35rem] space-y-8 sm:space-y-0 sm:space-x-8 p-4 sm:p-6 md:p-8 mt-8 mb-20">

        <div className="flex-1 sm:flex-[1/3] text-center p-4 rounded-full shadow-md">
          <div className="w-48 h-48 sm:w-60 sm:h-60 md:w-60 md:h-60 lg:w-80 lg:h-80 mx-auto rounded-full overflow-hidden">
            <Image
              src="/assets/images/profile-photo.jpeg"
              alt="Yash Thakur"
              width={400}
              height={400}
              className="rounded-full object-cover"
            />
          </div>
        </div>

        <div className="flex-1 sm:flex-[2/3] p-4 rounded-lg shadow-md mt-8 sm:mt-0 text-center sm:text-left">
          <div className="text-lg sm:text-3xl md:text-4xl lg:text-5xl 
          bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
            Yash Thakur
          </div>

          <h4 className="text-md sm:text-xl md:text-2xl lg:text-3xl 
          bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-neutral-200 mt-2 mb-2">
            Full Stack Developer
          </h4>
          <h4 className="text-md sm:text-xl md:text-2xl lg:text-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-neutral-500">
            ~ From concept to code, making it happen.
          </h4>
        </div>
      </section>
    </motion.div>
  );
}

