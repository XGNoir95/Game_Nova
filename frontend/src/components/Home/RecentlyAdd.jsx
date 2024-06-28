import React, { useEffect, useState } from 'react';
import axios from "axios";
import GameCard from '../GameCard/GameCard';
 // Adjust the path relative to RecentlyAdd.jsx

const RecentlyAdd = () => {
  const [Data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5173/api/games/recently");
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="mt-6 px-4">
      <h4 className="text-4xl text-yellow-100">Recently Added Games</h4>
      <div className="my-20 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {Data && Data.map((item, i) => (
          <div key={i}>
            <GameCard data={item} />{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyAdd;
