import React from 'react'

const Hero = () => {
  return (
    <div className="h-[75vh] flex">
         <div className="w-full lg:w-3/6 flex flex-col items-center lg:items-start justify-center ">
            <h1 className="text-6xl lg:text-6x1 font-samibold text-yellow-100 text-center lg:text-left">
                Discover Your Next Great Game
            </h1>
            <p className=" mt-4 text-2x1 text-zinc-300 text-center lg:text-left">
                Game-Nova is a platform for gamers to find and download
                their favorite games.
            </p>
            <div className="mt-8">
            <button className="text-yellow-100 text-x1 lg:text-2x1 font-samibold border border-yellow-100 px-10 py-2 hover:bg-zinc-800 rounded full">
                Find Games
            </button>
            </div>
           
         </div>
         <div className="w-full lg:w-3/6 h-auto lg:h-[100%] flex items-center justify-center">
         <img src="./hero.png" alt="hero"/>
         </div>
    </div>
   
  )
}

export default Hero