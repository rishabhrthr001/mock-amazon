import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="bg-yellow-400 p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-800">
          <span className="text-blue-700">Ama</span>zon
        </Link>

        {/* Search Bar */}
        <div className="flex-1 mx-4">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        {/* Links */}
        <div className="flex items-center space-x-4">
          <Link to="/signin" className="text-gray-700 hover:underline">
            Sign In
          </Link>
          <Link to="/orders" className="text-gray-700 hover:underline">
            Orders
          </Link>

          {/* Shopping Cart */}
          <Link to="/cart" className="relative flex items-center">
            <FiShoppingCart size={24} className="text-gray-800" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1"></span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
