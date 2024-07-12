import React, { useState, useEffect } from 'react';
import Axios from "axios";
import Loader from '../Loader/loader';
import { Link, useParams } from 'react-router-dom';

const ViewGameDetails = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Axios.get(`http://localhost:1000/api/v1/get-game-by-id/${id}`);
                console.log(response);
                setData(response.data.data);
            } catch (error) {
                console.error('Error fetching game data:', error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <div className="px-12 py-8 bg-zinc-900 text-red-500">Error fetching game data.</div>;
    }

    if (!data) {
        return <div className="px-12 py-8 bg-zinc-900 text-white">No game data found.</div>;
    }

    return (
        <div 
            className="min-h-screen bg-cover bg-center text-white px-10 py-8" 
            style={{ backgroundImage: `url('/bg2.jpg')` }}
        >
            <div className='px-12 py-8 flex gap-8'>
                <div className='bg-white-800 rounded p-4 h-[90vh] w-3/6 flex items-center justify-center'>
                    <img src={data.url} alt="Game" className='h-[85vh]' />
                </div>
                <div className='p-4 w-3/6'>
                    <h1 className="text-4xl text-zinc-300 font-semibold">
                        {data.title}
                    </h1>
                    <p className='text-zinc-300 mt-1'>by - {data.author}</p>
                    <p className='text-zinc-500 mt-4 text-xl'>{data.desc}</p>
                    <p className='text-zinc-500 mt-4 text-2xl'>Genre: {data.genre}</p>
                    <p className='text-zinc-500 mt-4 text-2xl'>Platform: {data.platform}</p>
                    <p className='text-zinc-500 mt-4 text-3xl'>Rating: {data.rating}</p>
                    <p className='mt-4 text-zinc-100 text-3xl font-semibold'>
                        Price: ${data.price}
                    </p>
               
                <div className='mt-4 gap-4'>
                <Link to={"/SignUp"} className="bg-purple-800 text-white px-4 py-2 rounded w-full md:w-auto justify-between gap-4">
                
                BUY NOW</Link>
                </div>
                </div>
            </div>
        </div>
    );
};

export default ViewGameDetails;
