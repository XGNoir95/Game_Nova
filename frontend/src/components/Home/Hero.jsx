import React from 'react';
import { Link } from 'react-router-dom';
import BannerCard from './BannerCard';

const Hero = () => {
  return (
    <div className="md:h-[60vh] flex flex-col md:flex-row items-center justify-center">
      {/* Left section for text content */}
      <div className="w-full mb-12 md:mb-0 md:w-3/6 flex flex-col items-center md:items-start justify-center text-center md:text-left">
        <div className="flex items-center">
          <h1 className="text-6xl font-semibold text-white">
            Discover Your Next Great Game
          </h1>
        </div>


        <p className="mt-4 text-2xl text-zinc-300">
          Game-Nova is a platform for gamers to find and download
          their favorite games.
        </p>
        <div className="mt-8">
          <Link
            to="/all-games"
            className="text-yellow-100 text-xl font-semibold border border-yellow-100 px-10 py-2 hover:bg-zinc-800 rounded-full"
          >
            Find Games
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
