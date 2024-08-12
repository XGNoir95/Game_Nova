import React, { useState } from "react";
import axios from "axios";

const AddGame = () => {
  const [Data, setData] = useState({
    url: "",
    title: "",
    author: "",
    price: "",
    desc: "",
    platform: "",
    rating: "",
    genre: "",
    year: "",
  });

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };

  const submit = async () => {
    try {
      console.log("Current Data:", Data); // Debug output to check Data

      // Check if any of the fields are empty
      const isEmpty = Object.values(Data).some((value) => value === "");

      if (isEmpty) {
        alert("All fields are required");
      } else {
        const response = await axios.post(
          "http://localhost:1000/api/v1/add-game",
          Data,
          { headers }
        );
        setData({
          url: "",
          title: "",
          author: "",
          price: "",
          desc: "",
          platform: "",
          rating: "",
          genre: "",
          year: "",
        });
        alert(response.data.message);
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="h-[100%] p-0 md:p-4">
      <h1 className="text-3xl md:text-5xl font-semibold text-zinc-500 mb-8">
        Add Game
      </h1>
      <div className="p-4 bg-zinc-800 rounded">
        <div>
          <label htmlFor="" className="text-zinc-400">
            Image
          </label>
          <input
            type="text"
            className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
            placeholder="url of image"
            name="url"
            required
            value={Data.url}
            onChange={change}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="" className="text-zinc-400">
            Title of game
          </label>
          <input
            type="text"
            className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
            placeholder="title of game"
            name="title"
            required
            value={Data.title}
            onChange={change}
          />
        </div>
        <div className="mt-4 flex gap-4">
          <div className="w-1/2">
            <label htmlFor="" className="text-zinc-400">
              Author of game
            </label>
            <input
              type="text"
              className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
              placeholder="author of game"
              name="author"
              required
              value={Data.author}
              onChange={change}
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="" className="text-zinc-400">
              Price
            </label>
            <input
              type="number"
              className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
              placeholder="price of game"
              name="price"
              required
              value={Data.price}
              onChange={change}
            />
          </div>
        </div>
        <div className="mt-4 flex gap-4">
          <div className="w-1/2">
            <label htmlFor="" className="text-zinc-400">
              Platform
            </label>
            <input
              type="text"
              className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
              placeholder="platform of game"
              name="platform"
              required
              value={Data.platform}
              onChange={change}
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="" className="text-zinc-400">
              Rating
            </label>
            <input
              type="number"
              className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
              placeholder="rating of game"
              name="rating"
              required
              value={Data.rating}
              onChange={change}
            />
          </div>
        </div>
        <div className="mt-4 flex gap-4">
          <div className="w-1/2">
            <label htmlFor="" className="text-zinc-400">
              Genre
            </label>
            <input
              type="text"
              className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
              placeholder="genre of game (comma separated)"
              name="genre"
              required
              value={Data.genre}
              onChange={change}
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="" className="text-zinc-400">
              Year
            </label>
            <input
              type="number"
              className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
              placeholder="year of release"
              name="year"
              required
              value={Data.year}
              onChange={change}
            />
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="" className="text-zinc-400">
            Description of game
          </label>
          <textarea
            className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
            rows="5"
            placeholder="description of game"
            name="desc"
            required
            value={Data.desc}
            onChange={change}
          />
        </div>
        <div className="mt-4">
          <button
            onClick={submit}
            className="w-full bg-amber-600 text-white py-2 rounded"
          >
            Add Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddGame;