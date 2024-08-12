import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Loader from '../Loader/loader';

const UserOrderHistory = () => {
  const [OrderHistory, setOrderHistory] = useState();
  const headers = {
    id: localStorage.getItem('id'),
    authorization: `Bearer ${localStorage.getItem('token')}`,
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await Axios.get('http://localhost:1000/api/v1/get-order-history', { headers });
        setOrderHistory(response.data.data);
      } catch (error) {
        console.error('Error fetching order history:', error);
      }
    };
    fetch();
  }, []);

  return (
    <div className="bg-zinc-900 px-12 py-8 h-screen">
      {!OrderHistory && (
        <div className="w-full h-[100%] flex items-center justify-center">
          <Loader />
        </div>
      )}
      {OrderHistory && OrderHistory.length === 0 && (
        <div className="h-[80vh] p-4 text-zinc-100">
          <div className="h-[100%] flex items-center justify-center flex-col">
            <h1 className="text-5xl lg:text-6xl font-semibold text-zinc-500 mb-8">No Order History</h1>
          </div>
        </div>
      )}
      {OrderHistory && OrderHistory.length > 0 && (
        <div className="h-[100%] p-0 md:p-4 text-zinc-100">
          <h1 className="text-3xl md:text-5xl font-semibold text-zinc-500 mb-8">Your Order History</h1>
          <div className="mt-4 bg-zinc-800 w-full rounded py-2 px-4 flex gap-2">
            <div className="w-[3%]">
              <h1 className="text-center">Sr.</h1>
            </div>
            <div className="w-[22%]">
              <h1 className="text-center">Games</h1>
            </div>
            <div className="w-[45%]">
              <h1 className="text-center">Description</h1>
            </div>
            <div className="w-[9%]">
              <h1 className="text-center">Price</h1>
            </div>
            <div className="w-[16%]">
              <h1 className="text-center">Status</h1>
            </div>
            <div className="w-none md:w-[5%] hidden md:block">
              <h1 className="text-center">Mode</h1>
            </div>
          </div>
          {OrderHistory.map((items, i) => (
            <div className="bg-zinc-800 w-full rounded py-2 px-4 flex gap-4 hover:bg-zinc-900 hover:cursor-pointer" key={i}>
              <div className="w-[3%]">
                <h1 className="text-center">{i + 1}</h1>
              </div>
              <div className="w-[22%]">
                {items.game ? (
                  <Link
                    to={`/view-game-details/${items.game._id}`}
                    className="hover:text-blue-300"
                  >
                    {items.game.title}
                  </Link>
                ) : (
                  <span>Game information not available</span>
                )}
              </div>
              <div className="w-[45%]">
                <h1 className="">
                  {items.game ? `${items.game.desc.slice(0, 50)}...` : 'Description not available'}
                </h1>
              </div>
              <div className="w-[9%]">
                <h1 className="">{items.game ? `$${items.game.price}` : 'N/A'}</h1>
              </div>
              <div className="w-[16%]">
                <h1 className="font-semibold text-green-500">
                  {items.status === 'Order placed' ? (
                    <div className="text-yellow-500">{items.status}</div>
                  ) : items.status === 'Canceled' ? (
                    <div className="text-red-500">{items.status}</div>
                  ) : (
                    items.status
                  )}
                </h1>
              </div>
              <div className="w-none md:w-[5%] hidden md:block">
                <h1 className="text-sm text-zinc-400">COD</h1>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserOrderHistory;
