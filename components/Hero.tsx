import Image from 'next/image';

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-dark-900 p-8 md:p-16 rounded-lg">
      <div className="text-center md:text-left">
        <h2 className="text-green-400 text-lg">Hello</h2>
        <h1 className="text-white text-4xl md:text-5xl font-bold">I'm Yash Thakur</h1>
        <p className="text-gray-400 text-lg md:text-xl mt-4">
          Fullstack Developer & Instructor
        </p>
        <p className="text-gray-400 text-md md:text-lg mt-2 max-w-lg">
          Hi there! My name is Yash Thakur and IÕm a full stack developer with over 2 years of experience in the industry. I love all things tech and coding.
        </p>
        <a
          href="https://discord.com/invite/your-discord-link"
          className="inline-block mt-8 px-6 py-3 bg-gradient-to-r from-blue-400 via-pink-500 to-purple-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition duration-300"
        >
          Contact <i className="fab fa-discord"></i>
        </a>
      </div>
      <div className="mt-8 md:mt-0 md:ml-16">
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden">
          <Image
            src="/path-to-your-image.jpg"
            alt="Yash Thakur"
            width={256}
            height={256}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

