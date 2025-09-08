import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logo from "../../assets/InvestIQ_Logo.png";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenlogin, setIsOpenlogin] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownlogin = useRef(null);
  const user = useSelector((state) => state.auth.user);

  const [fireuser] = useAuthState(auth);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };
  const toggleLoginDropdown = () => {
    setIsOpenlogin((prev) => !prev);
  };
  const logoutUser = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("persist:auth");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("watchlist");
    localStorage.removeItem("authenticatedUser");
    toast.success("User successfully logged out. Reload the Services", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      theme: "dark",
    });

    setTimeout(() => {
      window.location.href = "/";
    }, 1800);
  };

  const firelogoutUser = async () => {
    try {
      await signOut(auth);
      console.log("User successfully logged out");
      toast.success("User successfully logged out. Reload the Services", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        theme: "dark",
      });
      setTimeout(() => {
        window.location.href = "/";
      }, 1800);
    } catch (error) {
      console.error("Error during logout:", error);
      toast.error("Error during logout:" + error, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        theme: "dark",
      });
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
      if (
        dropdownlogin.current &&
        !dropdownlogin.current.contains(event.target)
      ) {
        setIsOpenlogin(false);
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
      <Link to="/">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={Logo}
            alt="Logo"
            style={{ width: "35px" }}
            className="sm:ml-2"
          />
          <h1 className="text-lg md:text-xl font-semibold text-white sm:ml-2">
            Invest IQ<span className="text-blue-500">.</span>
          </h1>
        </div>
      </Link>

      {/* Desktop */}
      <div className="hidden md:flex justify-center items-center gap-7 flex-1 sm:mr-14">
        {[
          { name: "Home", path: "/" },
          { name: "Compare", path: "/compare" },
          { name: "Watchlist", path: "/watchlist" },
          { name: "Dashboard", path: "/dashboard" },
          { name: "Tools", path: "/tools" },
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
                { name: "Tools", path: "/tools" },
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

      <div
        ref={dropdownRef}
        className="relative flex flex-row items-center space-x-4"
      >
        <button
          className="text-gray-400 hover:text-blue-400 text-2xl cursor-pointer flex items-center focus:outline-none"
          onClick={toggleDropdown}
        >
          <i className="bi bi-person-fill transition-transform transform hover:scale-110"></i>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-down"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
            />
          </svg>
        </button>
        {isOpen && (
          <div className="absolute top-12 right-0 bg-white shadow-lg rounded-lg z-50 p-4 w-48">
            <ul className="list-none space-y-2">
              {fireuser || user ? (
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
                  href="/tools"
                  className="block text-black text-base hover:text-blue-500 transition"
                >
                  Finance Tools
                </a>
              </li>
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
              {(fireuser || user) && (
                <li>
                  <a
                    href="#"
                    className="block text-black text-base hover:text-blue-500 transition"
                    onClick={(e) => {
                      e.preventDefault();
                      if (user) {
                        logoutUser();
                      }
                      if (fireuser) {
                        firelogoutUser();
                      }
                    }}
                  >
                    Logout
                  </a>
                </li>
              )}
            </ul>
          </div>
        )}
        {!fireuser && !user ? (
          <div ref={dropdownlogin}>
            <button
              className="text-gray-400 hover:text-blue-400 text-2xl cursor-pointer flex items-center focus:outline-none"
              onClick={toggleLoginDropdown}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-box-arrow-in-right"
                viewBox="0 0 32 32"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 7a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v18a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-4a1 1 0 0 0 -2 0v4A3 3 0 0 0 13 28h16a3 3 0 0 0 3 -3v-18A3 3 0 0 0 29 4h-16A3 3 0 0 0 10 7v4a1 1 0 0 0 2 0z"
                />
                <path
                  fill-rule="evenodd"
                  d="M23.708 16.708a1 1 0 0 0 0 -1.416l-6 -6a1 1 0 1 0 -1.416 1.416L20.586 15H3a1 1 0 0 0 0 2h17.586l-4.294 4.292a1 1 0 0 0 1.416 1.416z"
                />
              </svg>
            </button>

            {isOpenlogin && (
              <div className="absolute top-10 right-0 bg-white shadow-md rounded-lg p-3 border border-gray-200 w-40">
                <a
                  href="/login"
                  className="block px-3 py-2 text-blue-600 font-semibold border border-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition-transform transform hover:scale-105 duration-200 shadow-sm mb-2 text-center"
                >
                  Login
                </a>

                <a
                  href="/register"
                  className="block px-3 py-2 bg-blue-500 text-white font-semibold border border-blue-500 rounded-md hover:bg-black hover:border-black  hover:shadow-lg transition-transform transform hover:scale-105 duration-200 text-center"
                >
                  Signup
                </a>
              </div>
            )}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Header;
