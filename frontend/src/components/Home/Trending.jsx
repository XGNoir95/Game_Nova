import React, { useEffect, useState } from 'react';
import TrendingCard from '../GameCard/TrendingCard';

const Trending = () => {
  const [trendingData, setTrendingData] = useState(null);

  useEffect(() => {
    // Mock data for trending game
    const trendingGame = {
      id: 1,
      url: 'https://i.ytimg.com/vi/qLZenOn7WUo/maxresdefault.jpg',
      title: 'Elden Ring: Shadow of the Erdtree Edition',
      genre: 'Single-player, Action, Adventure',
      description: 'Elden Ring: Shadow of the Erdtree is an action-adventure game that immerses players in a vast and intricately crafted world. Developed by FromSoftware and published by Bandai Namco Entertainment, it blends dark fantasy elements with open-world exploration. Players embark on a journey as the Tarnished, seeking to become an Elden Lord by navigating treacherous landscapes, battling formidable foes, and uncovering the mysteries of the shattered Erdtree. With its rich lore, challenging gameplay, and visually stunning environments.',
      originalPrice: 100,
      discountedPrice: 50,
      discountPercentage: 50,
    };
    setTrendingData(trendingGame);
  }, []);

  return (
    <div className="mt-6 px-4">
      <div className="flex justify-between items-center">
        <h4 className="text-4xl text-amber-500">Trending Now!</h4>
      </div>
      {trendingData && (
        <div className="my-6">
          <TrendingCard data={trendingData} />
        </div>
      )}
    </div>
  );
};

export default Trending;
