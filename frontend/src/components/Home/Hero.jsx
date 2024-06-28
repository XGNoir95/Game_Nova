import React from 'react';
import { Link } from 'react-router-dom';
import BannerCard from './BannerCard';

const Hero = () => {
  return (
    <div className="md:h-[60vh] flex flex-col md:flex-row items-center justify-center">
      {/* Left section for text content */}
      <div className="w-full mb-8 md:mb-0 md:w-3/6 flex flex-col items-center md:items-start justify-center text-center md:text-left">
        <div className="flex items-center">
          <h1 className="text-5xl md:text-6xl font-semibold text-amber-500 leading-tight">
            Discover Your Next
          </h1>
          <h1 className="text-5xl md:text-6xl font-semibold text-amber-500 leading-tight ml-3">
            Great Game
          </h1>
        </div>
        <p className="mt-4 text-lg md:text-2xl text-zinc-300">
          Game-Nova is a platform for gamers to find and download their favorite games.
        </p>
        <div className="mt-6 md:mt-8">
          <Link
            to="/all-games"
            className="text-purple-600 text-lg md:text-xl font-semibold border border-purple-500 px-8 md:px-10 py-2 hover:bg-white rounded-full inline-block"
          >
            Browse Games
          </Link>
        </div>
      </div>

      {/* Right section for banner slider */}
      <div className="w-full md:w-3/6 flex items-center justify-center">
        <BannerCard />
      </div>
    </div>
  );
};

export default Hero;
