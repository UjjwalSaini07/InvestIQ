import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const user = useSelector((state) => state.auth.user);

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

  const currentPath = window.location.pathname;

  return (
    <div className="flex justify-between items-center p-7 sticky top-0 bg-black z-50">
      <h1 className="text-lg md:text-xl font-semibold text-white sm:ml-7">
        Invest IQ<span className="text-blue-500">.</span>
      </h1>

      {/* Desktop */}
      <div className="hidden md:flex justify-center items-center gap-7 flex-1 sm:mr-14">
        {[
          { name: "Home", path: "/" },
          { name: "Compare", path: "/compare" },
          { name: "Watchlist", path: "/watchlist" },
          { name: "Dashboard", path: "/dashboard" },
          { name: "About", path: "/about" },
        ].map((link) => (
          <a
            key={link.path}
            href={link.path}
            className={`text-sm font-semibold ${
              currentPath === link.path
                ? "text-white"
                : "text-gray-400 hover:text-white"
            } transition`}
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Mobile*/}
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
              {[
                { name: "Home", path: "/" },
                { name: "Compare", path: "/compare" },
                { name: "Watchlist", path: "/watchlist" },
                { name: "Dashboard", path: "/dashboard" },
                { name: "About", path: "/about" },
              ].map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    className={`block text-base ${
                      currentPath === link.path
                        ? "text-blue-500"
                        : "text-black hover:text-blue-500"
                    } transition`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
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
              {user ? (
                <li>
                  <a
                    href="/profile"
                    className="block text-black text-base hover:text-blue-500 transition"
                  >
                    User Profile
                  </a>
                </li>
              ) : (
                <li>
                  <a
                    href="/login"
                    className="block text-black text-base hover:text-blue-500 transition"
                  >
                    Sign in / Sign Up
                  </a>
                </li>
              )}
              <li>
                <a
                  href="/contactus"
                  className="block text-black text-base hover:text-blue-500 transition"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/helpcenter"
                  className="block text-black text-base hover:text-blue-500 transition"
                >
                  Help Center
                </a>
              </li>
              {user && (
                <li>
                  <a
                    href="#"
                    className="block text-black text-base hover:text-blue-500 transition"
                  >
                    Logout
                  </a>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
