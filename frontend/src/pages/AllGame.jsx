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
        desc: "Elden Ring is an action role-playing game developed by FromSoftware and published by Bandai Namco Entertainment. Released in 2022, it is a collaborative project between acclaimed game director Hidetaka Miyazaki and renowned fantasy novelist George R. R. Martin, best known for his A Song of Ice and Fire series.",
        platform: "PC",
        rating: 5,
        year: 2021,
        genre: ["Fantasy"],
        url: "https://s.13.cl/sites/default/files/styles/manualcrop_850x475/public/esports/articulo/field-imagen/2022-02/portadaelden.jpg.jpeg?itok=31PS9V4Lod.jpghfjr.jpg",
      },
      {
        _id: "2",
        title: "Red Dead Redemption 2",
        author: "Rockstar Games",
        price: 56.69,
        desc: "Players take on the role of Arthur Morgan, a member of the Van der Linde gang, led by the charismatic outlaw Dutch Van der Linde. As Arthur, players navigate a vast and unforgiving landscape, grappling with the consequences of their actions as they struggle to survive and thrive in a rapidly changing world.",
        platform: "Xbox",
        rating: 4,
        year: 2022,
        genre: ["RPG"],
        url: "https://rocket-chainsaw.b-cdn.net/wp-content/uploads/2018/05/Red-Dead-Redemption-2-New-Logo.jpg",
      },
      {
        _id: "3",
        title: "Ghost of Tsushima",
        author: "Sucker Punch",
        price: 100,
        desc: "Players take on the role of Jin Sakai, one of the last surviving samurai on Tsushima Island, who must adapt his fighting style to a more unconventional form of warfare to repel the Mongol invaders and free his homeland. The game blends stealth, action, and exploration, offering a richly detailed world inspired by feudal Japan",
        platform: "PlayStation",
        rating: 3,
        year: 2023,
        genre: ["Action"],
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh9fNWJ-uO1qgDLWiUFvuRE5JZ3cBaiyTL7L-VCGcZnqMwrHkI1c5GZgoaFSwURVRFv0M&usqp=CAU",
      },
      {
        _id: "4",
        title: "Grand Theft Auto V",
        author: "Rockstar Games",
        price: 59.99,
        desc: "Step into the sprawling open-world of Los Santos and Blaine County in the largest and most ambitious entry in the Grand Theft Auto series yet. Follow the lives of three criminals as they plan and execute a series of heists across a fictionalized Southern California landscape.",
        platform: "PlayStation, Xbox, PC",
        rating: 5,
        year: 2013,
        genre: ["Action", "Open-world"],
        url: "https://w0.peakpx.com/wallpaper/513/15/HD-wallpaper-gta-v-cover-cover-gta-v-rockstar-grand-theft-auto.jpg",
      }
      
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
    <div className="bg-[#10061f] text-white min-h-screen p-4">
      <div className="mb-4 flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="Search games..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-1/2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-purple-800 bg-gray-100 text-black"
        />

        {/* for genre filter */}
        <select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
          className="w-full sm:w-1/4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-purple-800 bg-gray-100 text-black"
        >
          <option value="">All Genres</option>
          {games &&
            Array.from(new Set(games.flatMap((game) => game.genre))).map((genre, index) => (
              <option key={index} value={genre}>
                {genre}
              </option>
            ))}
        </select>


        {/* for rating filter */}
        <select
          value={selectedRating}
          onChange={(e) => setSelectedRating(e.target.value)}
          className="w-full sm:w-1/4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300 bg-gray-100 text-black">
          <option value="">All Ratings</option>
          <option value="5">5 and above</option>
          <option value="4">4 and above</option>
          <option value="3">3 and above</option>
          <option value="2">2 and above</option>
          <option value="1">1 and above</option>
        </select>



        {/* for platform filter */}
        <select
          value={selectedPlatform}
          onChange={(e) => setSelectedPlatform(e.target.value)}
          className="w-full sm:w-1/4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300 bg-gray-100 text-black"
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
      <div className="mb-5 w-1/2 sm:w-1/4">
        <label className="block mb-2 text-white text-xl">Max Price: ${selectedPrice}</label>
        <input
          type="range"
          min="0"
          max="300"
          value={selectedPrice}
          onChange={(e) => setSelectedPrice(e.target.value)}
          className="w-full h-4 bg-gray-300 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      {error && <div className="text-red-500">Error: {error}</div>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
        {filteredGames &&
          filteredGames.map((game) => (
            <div key={game._id} className="bg-[#1e0b37] rounded p-4 relative">
              <img src={game.url} alt={game.title} className="h-[25vh] w-full object-cover rounded"/>
              <div className="p-4">
                <p className="text-lg text-[#d3bbe6]">{game.genre.join(', ')}</p>
                <h5 className="text-3xl text-amber-400">{game.title}</h5>
                <p className="text-sm text-gray-400">{game.desc}</p>
                <p className="mt-3 text-xl text-amber-400">{game.price}</p>
                <div className="flex justify-between items-center mt-2">
                  <div className="flex space-x-2 mt-3">
                    <button className="bg-purple-800 text-white px-4 py-2 rounded">DETAILS</button>
                    <button className="bg-purple-800 text-white px-4 py-2 rounded">BUY NOW</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllGame;
