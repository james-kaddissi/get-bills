import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white h-16 shadow-md border-b border-gray-700">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex items-center ml-16">
          <Link to="/" className="text-xl font-bold text-amber-400">Get Bills</Link>
        </div>
        
        <div className="flex items-center">
          <Link to="/profile">
            <img 
              src="/DuckProfile.png" 
              alt="Profile" 
              className="h-12 w-12 rounded-full border-2 border-amber-500 hover:border-amber-400 transition-colors"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;