import React from 'react';

const TrendingCard = ({ data }) => {
  return (
    <div className="bg-[#1e0b37] rounded p-4 relative flex">
      <img src={data.url} alt={data.title} className="h-80 w-150 object-cover rounded" />
      <div className="p-4 flex-1">
        <p className="text-lg text-[#d3bbe6]">{data.genre}</p>
        <h5 className="text-5xl text-amber-400">{data.title}</h5>
        <p className="text-lg text-gray-400 mt-4">{data.description}</p>
        <p className="mt-6 text-2xl text-amber-400 font-semi-bold">{data.Price}</p>
        <div className="flex justify-between items-center mt-2">
          <div className="flex space-x-5 mt-5">
            <button className="bg-purple-800 text-white px-4 py-2 rounded">DETAILS</button>
            <button className="bg-purple-800 text-white px-4 py-2 rounded">BUY NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
