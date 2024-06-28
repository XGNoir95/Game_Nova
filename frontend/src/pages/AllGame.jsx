import React, { useState, useEffect } from "react";

const AllGame = () => {
  const [data, setData] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedRating, setSelectedRating] = useState("");
  const [selectedPrice, setSelectedPrice] = useState(300); // Set the max price according to your data
  const [selectedPlatform, setSelectedPlatform] = useState("");

  const mockData = {
    games: [
      {
        _id: "1",
        title: "Elden Ring",
        author: "FromSoftware Inc.",
        price: 299,
        desc: "Lorem Ipsum dolor sit amet, consectetur",
        platform: "PC",
        rating: 9,
        year: 2021,
        genre: ["Fantasy"],
        url: "https://s.13.cl/sites/default/files/styles/manualcrop_850x475/public/esports/articulo/field-imagen/2022-02/portadaelden.jpg.jpeg?itok=31PS9V4Lod.jpghfjr.jpg",
      },
      {
        _id: "2",
        title: "Red Dead Redemption 2",
        author: "Rockstar Games",
        price: 56.69,
        desc: "Red Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games. The game is the third entry in the Red Dead series and is a prequel to the 2010 game Red Dead Redemption.",
        platform: "Xbox",
        rating: 8,
        year: 2022,
        genre: ["RPG"],
        url: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg?t=1714055653",
      },
      {
        _id: "3",
        title: "Ghost of Tsushima",
        author: "Sucker Punch",
        price: 100,
        desc: "Lorem Ipsum dolor",
        platform: "PlayStation",
        rating: 7,
        year: 2023,
        genre: ["Action"],
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh9fNWJ-uO1qgDLWiUFvuRE5JZ3cBaiyTL7L-VCGcZnqMwrHkI1c5GZgoaFSwURVRFv0M&usqp=CAU",
      },
    ],
  };

  const getData = () => {
    // Simulate an API call
    setTimeout(() => {
      setData(mockData);
    }, 500);
  };

  useEffect(() => {
    getData();
  }, []);

  const { error, games } = data;

  const platforms = games ? Array.from(new Set(games.map((game) => game.platform))) : [];

  const filteredGames =
    games &&
    games.filter((game) => {
      const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesGenre = selectedGenre ? game.genre.includes(selectedGenre) : true;
      const matchesRating = selectedRating ? game.rating >= parseFloat(selectedRating) : true;
      const matchesPrice = game.price <= selectedPrice;
      const matchesPlatform = selectedPlatform ? game.platform === selectedPlatform : true;
      return matchesSearch && matchesGenre && matchesRating && matchesPrice && matchesPlatform;
    });

  return (
    <div className="bg-gray-800 text-white min-h-screen p-4">
      <div className="mb-4 flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="Search games..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-1/2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300 bg-gray-700 text-white"
        />
        <select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
          className="w-full sm:w-1/4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300 bg-gray-700 text-white"
        >
          <option value="">All Genres</option>
          {games &&
            Array.from(new Set(games.flatMap((game) => game.genre))).map((genre, index) => (
              <option key={index} value={genre}>
                {genre}
              </option>
            ))}
        </select>
        <select
          value={selectedRating}
          onChange={(e) => setSelectedRating(e.target.value)}
          className="w-full sm:w-1/4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300 bg-gray-700 text-white"
        >
          <option value="">All Ratings</option>
          <option value="9">9 and above</option>
          <option value="8">8 and above</option>
          <option value="7">7 and above</option>
          <option value="6">6 and above</option>
          <option value="5">5 and above</option>
          <option value="4">4 and above</option>
          <option value="3">3 and above</option>
          <option value="2">2 and above</option>
          <option value="1">1 and above</option>
        </select>
        <select
          value={selectedPlatform}
          onChange={(e) => setSelectedPlatform(e.target.value)}
          className="w-full sm:w-1/4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300 bg-gray-700 text-white"
        >
          <option value="">All Platforms</option>
          {platforms &&
            platforms.map((platform, index) => (
              <option key={index} value={platform}>
                {platform}
              </option>
            ))}
        </select>
      </div>
      <div className="mb-4 w-1/2 sm:w-1/4">
        <label className="block mb-2 text-gray-400">Max Price: ${selectedPrice}</label>
        <input
          type="range"
          min="0"
          max="300"
          value={selectedPrice}
          onChange={(e) => setSelectedPrice(e.target.value)}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      {error && <div className="text-red-500">Error: {error}</div>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-cols-4 gap-7">
        {filteredGames &&
          filteredGames.map((game) => (
            <div
              key={game._id}
              className="border border-gray-600 rounded-lg p-4 shadow-md bg-gray-700 text-white transition-transform transform hover:scale-105 cursor-pointer"
              style={{ overflow: "hidden" }}
            >
              <div className="mb-2">
                <img
                  src={game.url}
                  alt={game.title}
                  className="w-full h-auto rounded"
                />
              </div>
              <div className="text-2xl font-bold mb-2 text-amber-400">{game.title}</div>
              <div className="white mb-2">Author: {game.author}</div>
              <div className="white mb-2">Price: ${game.price}</div>
              <div className="white mb-2">Description: {game.desc}</div>
              <div className="white mb-2">Platform: {game.platform}</div>
              <div className="white mb-2">Rating: {game.rating}</div>
              <div className="white mb-2">Year: {game.year}</div>
              <div className="text-lg font-bold mb-2 text-amber-400">Genres: {game.genre.join(", ")}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllGame;
