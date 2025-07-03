import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">E</span>
            </div>
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700 bg-clip-text text-transparent">
                EventMate
              </div>
              <div className="text-sm text-gray-500">Discover Amazing Events</div>
            </div>
          </div>
          <div className="space-x-4 text-sm">
  <Link to="/UserLogin">
    <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-800 transition-all">
      Login
    </button>
  </Link>
  <Link to="/UserRegister">
    <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-800 transition-all">
      Register
    </button>
  </Link>
</div>

        </div>
      </div>
       
      
      {/* Colored Navigation Bar */}
      <nav className="bg-gray-900 text-white flex justify-center space-x-20 p-4 text-lg font-semibold ">
        <Link to="/" className="hover:underline">HOME</Link>
        <Link to="/Event" className="hover:underline">EVENT</Link>
        <Link to="/about" className="hover:underline">ABOUT</Link>
        <Link to="/contact" className="hover:underline">CONTACT</Link>
      </nav>
      {/* Marquee Section */}
      <div className="overflow-hidden whitespace-nowrap bg-yellow-300 text-black py-2">
          <div className="inline-block animate-marquee text-md fontsemibold">
            💍 Plan your perfect event with us — Book now and get exclusive discounts! 🎉 Customizable packages available for weddings, birthdays, and corporate events!
          </div>
        </div>
    </header>
  );
};

export default Header;