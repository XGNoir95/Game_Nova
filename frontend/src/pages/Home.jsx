// Home.jsx
import React from "react";
import Hero from "../components/Home/Hero";
import Trending from "../components/Home/Trending";
import RecentlyAdd from "../components/Home/RecentlyAdd"; // Adjust the import path based on your project structure

const Home = () => {
  return (
    <div className="bg-zinc-900 text-white px-10 py-8">
      <Hero />
      <Trending />
      <RecentlyAdd />
    </div>
  );
};

export default Home;
