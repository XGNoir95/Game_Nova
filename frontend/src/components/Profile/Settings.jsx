import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Loader/loader";

const Settings = () => {
  const [Value, setValue] = useState({ username: "", email: "", address: "", avatar: "" });
  const [ProfileData, setProfileData] = useState({});

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  const change = (e) => {
    const { name, value } = e.target;
    setValue({ ...Value, [name]: value });
  };

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        "http://localhost:1000/api/v1/get-user-information",
        { headers }
      );
      setProfileData(response.data);
      setValue({
        username: response.data.username,
        email: response.data.email,
        address: response.data.address,
        avatar: response.data.avatar,
      });
    };
    fetch();
  }, []);

  const submitProfile = async () => {
    const response = await axios.put(
      "http://localhost:1000/api/v1/update-profile",
      Value,
      { headers }
    );
    alert(response.data.message);
    window.location.reload();  // Reload the page after alert
  };

  return (
    <>
      {!ProfileData && (
        <div className="w-full h-[100%] flex items-center justify-center">
          <Loader />
        </div>
      )}
      {ProfileData && (
        <div className="h-[100%] p-0 md:p-4 text-zinc-100">
          <h1 className="text-3xl md:text-5xl font-semibold text-zinc-500 mb-8">
            Settings
          </h1>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                className="p-2 rounded bg-zinc-800 mt-2 font-semibold"
                type="email"
                name="email"
                value={Value.email}
                onChange={change}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="username">Username</label>
              <input
                className="p-2 rounded bg-zinc-800 mt-2 font-semibold"
                type="text"
                name="username"
                value={Value.username}
                onChange={change}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="address">Address</label>
              <textarea
                className="p-2 rounded bg-zinc-800 mt-2 font-semibold"
                rows="5"
                placeholder="Address"
                name="address"
                value={Value.address}
                onChange={change}
              ></textarea>
            </div>
            <div className="flex flex-col">
              <label htmlFor="avatar">Avatar URL</label>
              <input
                className="p-2 rounded bg-zinc-800 mt-2 font-semibold"
                type="text"
                name="avatar"
                placeholder="Avatar URL"
                value={Value.avatar}
                onChange={change}
              />
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <button
              className="bg-yellow-500 text-zinc-900 font-semibold px-3 py-2 rounded hover:bg-yellow-400 transition-all duration-300"
              onClick={submitProfile}
            >
              Update
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Settings;