import React from 'react';

const TrendingCard = ({ data }) => {
  return (
    <div className="bg-zinc-800 rounded p-4 relative flex">
      {/* {data.discountPercentage && (
        <div className="absolute top-2 left-2 bg-red-600 text-white p-1 rounded">
          {data.discountPercentage}% off
        </div>
      )} */}
      <img src={data.url} alt={data.title} className="h-80 w-150 object-cover rounded" />
      <div className="p-4 flex-1">
        <p className="text-lg text-amber-400">{data.genre}</p>
        <h5 className="text-5xl text-white">{data.title}</h5>
        <p className="text-lg text-gray-400 mt-4">{data.description}</p>
        <div className="flex justify-between items-center mt-2">
          <div className="flex space-x-5 mt-12">
            <button className="bg-amber-700 text-white px-4 py-2 rounded">DETAILS</button>
            <button className="bg-amber-700 text-white px-4 py-2 rounded">BUY NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
