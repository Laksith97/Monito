import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img className="h-8 w-auto" src="/logo.png" alt="Monito" />
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex space-x-4">
                <Link to="/" className="text-primary hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link to="/category" className="text-primary hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">Category</Link>
                <Link to="/about" className="text-primary hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">About</Link>
                <Link to="/contact" className="text-primary hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="relative mr-4">
              <input type="text" placeholder="Search something here!" className="w-64 bg-gray-100 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-primary" />
              <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <button className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">Join the community</button>
            <div className="ml-4 relative">
              <button className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
                <span className="mr-1">VND</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;