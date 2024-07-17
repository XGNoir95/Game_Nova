import React, { useState, useEffect } from 'react';
import Axios from "axios";
import Loader from '../Loader/loader';
import { useSelector } from 'react-redux'; 
import { useParams } from 'react-router-dom';
import { FaEdit, FaHeart, FaShoppingCart } from 'react-icons/fa';
import {MdOutlineDelete} from "react-icons/md"

// Modal Component
const Modal = ({ isOpen, onClose, imgSrc }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative max-w-4xl max-h-full">
                <img src={imgSrc} alt="Full-size" className="object-contain w-full h-full" />
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white bg-gray-800 p-2 rounded"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

const ViewGameDetails = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const role = useSelector((state) => state.auth.role);
    console.log(isLoggedIn);
    console.log(role);

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            const headers = {
                authorization: `Bearer ${token}`,
            };

            try {

                // const response = await Axios.get(`https://game-nova-api.vercel.app/api/v1/get-game-by-id/${id}`, {
                //     headers,
                //     withCredentials: true,
                // });

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

    const handleFavourite = async () => {
        const headers = {
            id: localStorage.getItem('id'),
            authorization: `Bearer ${localStorage.getItem("token")}`,
            gameid: id,
        };
        try {
            const response = await Axios.put("http://localhost:1000/api/v1/add-game-to-favourite", {}, { headers });
            console.log(response);
            alert(response.data.message);
        } catch (error) {
            console.error('Error adding game to favourites:', error);
        }
    };

    const handleCart = async () => {
        const headers = {
            id: localStorage.getItem('id'),
            authorization: `Bearer ${localStorage.getItem("token")}`,
            gameid: id,
        };
        try{
            const response = await Axios.put("http://localhost:1000/api/v1/add-to-cart",{},{ headers });
            console.log(response);
            alert(response.data.message);
        } catch (error) {
            console.error('Error adding game to cart:', error);
        }
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

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
        <div className="min-h-screen bg-cover bg-center text-white px-4 md:px-10 py-8" style={{ backgroundImage: `url('/bg2.jpg')` }}>
            <div className='flex flex-col lg:flex-row gap-8 px-4 md:px-12 py-8'>
                {/* Image Container */}
                <div className="flex-grow lg:w-1/2 min-h-[300px] lg:min-h-screen bg-cover bg-center text-white px-4 md:px-10 py-8" style={{ backgroundImage: `url('/bg.jpg')` }}>
                    <div className='flex justify-center items-center w-full max-w-[800px] max-h-[500px] mt-8 lg:mt-36 mx-auto'>
                        <img
                            src={data.url}
                            alt="Game"
                            className='object-cover w-full h-full rounded cursor-pointer'
                            onClick={openModal}
                        />
                    </div>
                </div>

                {/* Details Section */}
                <div className='flex-grow lg:w-1/2 p-4'>
                    <h1 className="text-3xl lg:text-5xl text-amber-500 font-bold">
                        {data.title}
                    </h1>
                    <p className='text-xl lg:text-2xl text-zinc-300 mt-3'>by - {data.author}</p>
                    <p className='text-amber-500 mt-8 lg:mt-14 text-2xl lg:text-3xl font-semibold'>Description:</p>
                    <p className='text-zinc-300 mt-4 text-xl lg:text-2xl text-justify'>{data.desc}</p>
                    <p className='text-amber-500 mt-4 text-xl lg:text-2xl font-semibold'>Genre: <span className='text-zinc-300'>{data.genre}</span></p>
                    <p className='text-amber-500 mt-4 text-xl lg:text-2xl font-semibold'>Platform: <span className='text-zinc-300'>{data.platform}</span></p>
                    <p className='text-amber-500 mt-4 text-xl lg:text-2xl font-semibold'>Rating: <span className='text-zinc-300'>{data.rating}</span></p>
                    <p className='text-amber-500 mt-8 text-xl lg:text-2xl font-bold'>Price: <span className='text-zinc-300'>${data.price}</span></p>
                    
                    {isLoggedIn === true && role === "user" &&
                        <div className='mt-8 flex justify-end gap-4'>
                            <button 
                                className="bg-pink-500 rounded-full hover:bg-purple-800 text-2xl p-6"
                                onClick = {handleFavourite}
                                ><FaHeart /></button>
                            <button 
                                className="bg-purple-800 rounded hover:bg-pink-500 hover:text-white font-semibold px-6 py-4 w-full md:w-auto text-xl lg:text-2xl"
                                onClick = {handleCart}
                                >ADD TO CART</button>
                        </div>}


                    {isLoggedIn === true && role === "admin" &&
                        <div className='mt-8 flex justify-end gap-4'>
                            <button className="bg-pink-500 rounded-full hover:bg-purple-800 text-2xl p-6"><FaEdit /></button>
                            <button className="bg-purple-800 rounded hover:bg-pink-500 hover:text-white font-semibold px-6 py-4 w-full md:w-auto text-xl lg:text-2xl flex items-center justify-center gap-2">
                                <MdOutlineDelete />
                                Delete
                            </button>
                        </div>}
                </div>
            </div>

            {/* Modal for Full-Size Image */}
            <Modal isOpen={isModalOpen} onClose={closeModal} imgSrc={data.url} />
        </div>
    );
};

export default ViewGameDetails;
