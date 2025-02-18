import React, { useState, useEffect, useRef } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-between items-center p-7 sticky top-0 bg-black z-50">
      <h1 className="text-lg md:text-xl font-semibold text-white sm:ml-5">
        Invest IQ<span className="text-blue-500">.</span>
      </h1>

      {/* Navigation links for desktop */}
      <div className="hidden md:flex justify-end items-center gap-7">
        <a href="/" className="text-sm font-semibold text-gray-400 hover:text-white transition">Home</a>
        <a href="/compare" className="text-sm font-semibold text-gray-400 hover:text-white transition">Compare</a>
        <a href="/watchlist" className="text-sm font-semibold text-gray-400 hover:text-white transition">Watchlist</a>
        <a href="/dashboard" className="text-sm font-semibold text-gray-400 hover:text-white transition">Dashboard</a>
        <a href="/about" className="text-sm font-semibold text-gray-400 hover:text-white transition">About</a>
      </div>

      {/* Mobile menu button */}
      <div ref={dropdownRef} className="relative md:hidden">
        <button
          className="text-gray-400 text-2xl cursor-pointer focus:outline-none"
          onClick={toggleDropdown}
        >
          <i className="bi bi-list"></i>
        </button>
        {isOpen && (
          <div className="absolute top-12 right-0 bg-white shadow-lg rounded-lg z-50 p-4 w-48">
            <ul className="list-none space-y-2">
              <li>
                <a href="/" className="block text-black text-base hover:text-blue-500 transition">Home</a>
              </li>
              <li>
                <a href="/compare" className="block text-black text-base hover:text-blue-500 transition">Compare</a>
              </li>
              <li>
                <a href="/watchlist" className="block text-black text-base hover:text-blue-500 transition">Watchlist</a>
              </li>
              <li>
                <a href="/dashboard" className="block text-black text-base hover:text-blue-500 transition">Dashboard</a>
              </li>
              <li>
                <a href="/about" className="block text-black text-base hover:text-blue-500 transition">About</a>
              </li>
            </ul>
          </div>
        )}
      </div>

      <div ref={dropdownRef} className="relative hidden md:inline-block">
        <button
          className="text-gray-400 hover:text-blue-400 text-2xl cursor-pointer flex items-center focus:outline-none"
          onClick={toggleDropdown}
        >
          <i className="bi bi-person-fill mr-2 transition-transform transform hover:scale-110"></i>
        </button>
        {isOpen && (
          <div className="absolute top-12 right-0 bg-white shadow-lg rounded-lg z-50 p-4 w-48">
            <ul className="list-none space-y-2">
              <li>
                <a href="/signin" className="block text-black text-base hover:text-blue-500 transition">Sign in / Sign Up</a>
              </li>
              <li>
                <a href="/contactus" className="block text-black text-base hover:text-blue-500 transition">Contact Us</a>
              </li>
              <li>
                <a href="/helpcenter" className="block text-black text-base hover:text-blue-500 transition">Help Center</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
