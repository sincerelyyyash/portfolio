"use client"
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
      className="flex flex-wrap justify-center"
    >
      <section className="flex flex-col md:flex-row justify-start w-full min-h-[35rem] space-y-8 md:space-y-0 md:space-x-8 p-8 mt-20">

        <div className="flex-1 md:flex-[1/3] text-left p-4 rounded-full shadow-md md:mr-8">
          <div className="w-50 h-50 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto rounded-full overflow-hidden md:mx-0">
            <Image
              src="/assets/images/profile-photo.jpeg"
              alt="Yash Thakur"
              width={400}
              height={400}
              className="rounded-full object-cover"
            />
          </div>
        </div>

        <div className="flex-1 md:flex-[2/3] p-4 rounded-lg shadow-md">
          <div className="relative z-10 text-4xl sm:text-6xl md:text-7xl  
          bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
            Yash Thakur
          </div>

          <h4 className="relative z-10 text-3xl sm:text-5xl md:text-4xl  
          bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-neutral-200">
            Full Stack Developer
          </h4>
          <h4 className="relative z-10 text-3xl sm:text-5xl md:text-4xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-neutral-500">
            ~ From concept to code, making it happen.
          </h4>
        </div>
      </section>
    </motion.div>
  );
}
