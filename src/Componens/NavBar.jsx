import React from "react";
import Logo from "../assets/admob.svg";

const NavBar = () => {
  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 z-50 w-full bg-gray-100 shadow-md px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Hamburger for Mobile (Optional - currently hidden) */}
          <button className="text-gray-700 hover:text-black transition md:hidden">
            {/* You can add an icon here for mobile menu */}
          </button>

          {/* Logo */}
          <img src={Logo} alt="logo" className="h-8" />

          {/* Desktop Nav Links */}
          <nav className="hidden md:block">
            <ul className="flex gap-x-6 text-sm font-medium text-gray-700">
              <li className="hover:text-blue-600 cursor-pointer">Home</li>
              <li className="hover:text-blue-600 cursor-pointer">Apps</li>
              <li className="hover:text-blue-600 cursor-pointer">Reports</li>
              <li className="hover:text-blue-600 cursor-pointer">Mediation</li>
              <li className="hover:text-blue-600 cursor-pointer">Campaigns</li>
              <li className="hover:text-blue-600 cursor-pointer">Policy Center</li>
              <li className="hover:text-blue-600 cursor-pointer">Help</li>
            </ul>
          </nav>
        </div>

        {/* Right Section for Desktop */}
        <div className="hidden md:flex items-center gap-3">
          {/* Search Input */}
          <div className="relative w-64">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
            <svg
              className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
          </div>

          {/* Language Dropdown */}
          <select className="text-sm rounded-md px-2 py-1 bg-gray-200 border border-gray-300">
            <option value="en">English</option>
            <option value="bn">বাংলা</option>
          </select>

          {/* Log In Button */}
          <button className="py-1 px-3 bg-amber-100 hover:bg-amber-800 text-amber-700 hover:text-white font-medium rounded text-sm">
            Log In
          </button>

          {/* Sign Up Button */}
          <button className="py-1 px-3 bg-white text-red-600 hover:bg-black hover:text-white font-medium rounded text-sm border border-red-500">
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
