import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = ({ data }) => {
  return (
    <div className="bg-zinc-800 p-4 rounded flex flex-col items-center justify-between h-[100%]">
      <div className='flex items-center flex-col justify-center'>
        {data && data.avatar ? (
          <img src={data.avatar} className="h-[16vh]" alt="User Avatar" />
        ) : (
          <div className="h-[16vh] flex items-center justify-center text-gray-400">
            No Avatar
          </div>
        )}
        {data && (
          <>
            <p className="mt-1 text-xl text-zinc-100 font-semibold">
              {data.username}
            </p>
            <p className="mt-1 text-normal text-zinc-300">
              {data.email}
            </p>
          </>
        )}
        <div className='w-full mt-4 h-1 bg-zinc-500 hidden lg:block'></div>
      </div>
      <div className='w-full flex-col items-center justify-center hidden lg:flex'>
        <Link
          to="/profile"
          className='text-zinc-100 font-semibold w-full py-4 text-center hover:bg-zinc-900 rounded transition-all duration-300'>
          Favourites
        </Link>
        <Link
          to="/profile/orderHistory"
          className='text-zinc-100 font-semibold w-full py-4 text-center hover:bg-zinc-900 rounded transition-all duration-300'>
          Order History
        </Link>
        <Link
          to="/profile/settings"
          className='text-zinc-100 font-semibold w-full py-4 text-center hover:bg-zinc-900 rounded transition-all duration-300'>
          Settings
        </Link>
      </div>
      <button className='bg-zinc-100 w-3/6 lg:w-full mt-4 lg:mt-0 text-white font-semibold flex items-center justify-center py-2 rounded hover:bg-white hover:text-zinc-900 transition-all duration-300'>
        Log Out <FaArrowRight className="ms-4" />
      </button>
    </div>
  );
};

export default Sidebar;
