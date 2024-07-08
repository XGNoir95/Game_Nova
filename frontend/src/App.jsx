import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import LogIn from "./pages/LogIn";
import AllGame from "./pages/AllGame";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUP";

const App = () => {
  return (
    <div>
      
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/all-games" element={<AllGame />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
    
    </div>
  );
};

export default App;
