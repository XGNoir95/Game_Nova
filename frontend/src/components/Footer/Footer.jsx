import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1e0b37] text-white px-8 py-6">
      <div className="container mx-auto flex items-center justify-center space-x-8">
        
        <img 
          src="icon.ico" 
          alt="Game Nova Logo" 
          style={{ width: "150px", height: "150px" }} 
        />

        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">
            &copy; 2024 Game Nova
          </h1>
          <p className="text-lg">
            Made with 💜 by the Game Nova Team
          </p>

          <div className="flex justify-center space-x-8 mt-4">
            <a
              href="https://youtu.be/dQw4w9WgXcQ?si=nAg488MpbyTB5608"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-500 hover:text-pink-500 transition-colors duration-300"
            >
              Watch our promo video!
            </a>
            <a
              href="https://github.com/XGNoir95/Game_Nova"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-500 hover:text-pink-500 transition-colors duration-300"
            >
              Contact!
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
