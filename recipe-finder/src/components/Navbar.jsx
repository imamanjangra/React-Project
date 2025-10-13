import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 shadow-md py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-orange-400">RecipeFinder</h1>
      <div className="space-x-4">
        <Link className="text-gray-300 hover:text-orange-400" to="/">Home</Link>
        <Link className="text-gray-300 hover:text-orange-400" to="/favorites">Favorites</Link>
      </div>
    </nav>
  );
}

export default Navbar;
