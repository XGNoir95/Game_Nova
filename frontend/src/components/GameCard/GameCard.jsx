import React from 'react'
import { Link } from 'react-router-dom';

const GameCard = ({data}) => {
    console.log(data);
      return <>
       
        <Link>
        <div className="bg-zinc-800 rounded p-4">
            <div className="bg-zinc-900 rounded felx items-center jutify center">
                <img src={data.url} alt="/" className="h-[25vh]"/>
            </div>
        </div>
       </Link>
      </>
   );
  
};

export default GameCard