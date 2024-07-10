import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Profile/Sidebar';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import Loader from '../components/Loader/loader';

const Profile = () => {
  const [Profile, setProfile] = useState();
  const headers = {
    id: localStorage.getItem('id'),
    authorization: `Bearer ${localStorage.getItem('token')}`,
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(
          'http://localhost:1000/api/v1/get-user-information',
          { headers }
        );
        console.log('Fetched Profile data:', response.data);
        setProfile(response.data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };
    fetch();
  }, []);

  return (
    <div 
      className="min-h-screen bg-cover bg-center text-white px-10 py-8" 
      style={{ backgroundImage: `url('bg2.jpg')` }}
    > 
      {!Profile && (
        <div className='w-full h-[100%] flex items-center justify-center'>
          <Loader />
        </div>
      )}
      {Profile && (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
            <Sidebar data={Profile} />
          </div>
          <div className="w-full md:w-5/6">
            <Outlet />
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;



// import React, { useEffect, useState } from 'react';
// import Sidebar from '../components/Profile/Sidebar';
// import { Outlet } from 'react-router-dom';
// import axios from 'axios';
// import { useSelector } from 'react-redux'
// import Loader from '../components/Loader/loader';

// const Profile = () => {
//   const [Profile,setProfile]=useState();
//   const headers = {
//     id: localStorage.getItem('id'),
//     authorization: `Bearer ${localStorage.getItem('token')}`,
//   };

//   useEffect(() => {
//     const fetch = async () => {
//       try {
//         const response = await axios.get(
//           'http://localhost:1000/api/v1/get-user-information',
//           { headers }
//         );
//         console.log('Fetched Profile data:', response.data);
//         setProfile(response.data);
//       } catch (error) {
//         console.error('Error fetching profile data:', error);
//       }
//     };
//     fetch();
//   }, []);
  

//   return (
//     <div 
//       className="min-h-screen bg-cover bg-center text-white px-10 py-8" 
//       style={{ backgroundImage: `url('bg2.jpg')` }}
//     > {!Profile &&(
//         <div className='w-full h-[100%] flex items-center justify-center'>
//           <Loader />
//         </div>
//         )}
//       {Profile&&(
//         <>
//         <div className="w-full md:w-1/6">
//           <Sidebar data={Profile} />
//         </div>
//         <div className="w-full md:w-5/6">
//           <Outlet />
//         </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Profile;
