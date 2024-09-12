import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TrendingCard from '../GameCard/TrendingCard';

const Trending = () => {
  const [trendingData, setTrendingData] = useState(null);

  useEffect(() => {
    const fetchRecentGames = async () => {
      try {
        const response = await axios.get("https://game-nova-backend.vercel.app/api/v1/get-recent-games");
        const recentGames = response.data.data;
        
        //most recent game
        if (recentGames && recentGames.length > 0) {
          setTrendingData(recentGames[0]);
        }
      } catch (error) {
        console.error("Error fetching recent games:", error);
      }
    };

    fetchRecentGames();
  }, []);

  return (
    <div className="mt-6 px-4">
      <div className="flex items-center font-bold">
        <h4 className="text-4xl text-amber-500">Trending Games</h4>
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
