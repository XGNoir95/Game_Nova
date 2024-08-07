import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../../Store/auth';

const Sidebar = ({ data }) => {  
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleLogout = () => {
      localStorage.removeItem('id');
      localStorage.removeItem('token');
      localStorage.removeItem('role');
    
      dispatch(authActions.logout());
    
      navigate('/LogIn');
    };
  return (
    <div className="bg-[#1e0b37] p-4 rounded flex flex-col items-center justify-between h-[100%]">
      <div className='flex items-center flex-col justify-center mb-8'>
         {data && data.avatar ? (
          <img src={data.avatar} className="h-32 w-32 rounded-full mb-4" alt="User Avatar" />
        ) : (
          <div className="h-32 w-32 rounded-full bg-gray-400 flex items-center justify-center text-gray-700 mb-4">
            No Avatar
          </div>
        )}
        {data && (
          <>
            <p className="text-3xl text-amber-500 font-semibold mb-4">
              {data.username}
            </p>
            <p className="text-xl text-zinc-300 mb-4">
              {data.email}
            </p>
          </>
        )}
        <div className='w-full h-1 bg-amber-500 '></div>
      </div>
      <div className='w-full flex-col items-center justify-center hidden lg:flex'>
        <Link
          to="/profile"
          className='text-xl text-zinc-100 font-semibold w-full py-4 text-center hover:bg-purple-900 rounded transition-all duration-300 mb-4'>
          Favourites
        </Link>
        <Link
          to="/profile/orderHistory"
          className='text-xl text-zinc-100 font-semibold w-full py-4 text-center hover:bg-purple-900 rounded transition-all duration-300 mb-4'>
          Order History
        </Link>
        <Link
          to="/profile/settings"
          className='text-xl text-zinc-100 font-semibold w-full py-4 text-center hover:bg-purple-900 rounded transition-all duration-300 mb-4'>
          Settings
        </Link>
      </div>
      <button 
        onClick={handleLogout}
        className='bg-zinc-100 w-full text-zinc-900 font-semibold flex items-center justify-center py-3 rounded hover:bg-amber-500 transition-all duration-300'>
        Log Out <FaArrowRight className="ml-4" />
      </button>
    </div>
  );
};

export default Sidebar;