import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";
import Logo from "../../assets/InvestIQ_Logo.png";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="text-white p-6 md:p-10 flex flex-wrap justify-between items-center text-center font-sans">
      <div className="max-w-xs text-left mb-6 md:mb-0">
        <Link to="/">
          <div className="flex items-center gap-3">
            <img src={Logo} alt="Logo" className="w-10" />
            <h2 className="text-2xl font-bold tracking-wide">InvestIQ</h2>
          </div>
        </Link>
        <p className="text-sm leading-relaxed opacity-85 mt-3">
          Analyze stocks and crypto trends with advanced tools. Stay informed
          with insights, real-time news, and analysis with Personailsed
          Dashboard.
        </p>
      </div>

      <div className="flex-1 max-w-xs flex flex-col items-center mb-6 md:mb-0">
        <h4 className="text-lg mb-4 font-semibold text-gray-200">
          Quick Links
        </h4>
        <ul className="list-none p-0">
          {[
            { text: "Profile", href: "/profile" },
            { text: "Washlist", href: "/watchlist" },
            { text: "Dashboard", href: "/dashboard" },
          ].map((item, index) => (
            <li key={index} className="mb-3">
              <a
                href={item.href}
                className="text-white text-base opacity-80 hover:opacity-100 transition duration-300"
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-1 max-w-xs flex flex-col items-center mb-6 md:mb-0">
        <h4 className="text-lg mb-4 font-semibold text-gray-200">
          User Help Zone
        </h4>
        <ul className="list-none p-0">
          {[
            { text: "About Us", href: "/about" },
            { text: "Contact Us", href: "/contactus" },
            { text: "Help Center", href: "/helpcenter" },
          ].map((item, index) => (
            <li key={index} className="mb-3">
              <a
                href={item.href}
                className="text-white text-base opacity-80 hover:opacity-100 transition duration-300"
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-1 max-w-xs flex flex-col items-center mb-6 md:mb-0">
        <h4 className="text-lg mb-4 font-semibold text-gray-200">
          Explore Some Tools
        </h4>
        <ul className="list-none p-0">
          {[
            { text: "Compare", href: "/compare" },
            { text: "Chat with Bot", href: "/chatwithbot" },
            { text: "Finance Tools", href: "/tools" },
          ].map((item, index) => (
            <li key={index} className="mb-3">
              <a
                href={item.href}
                className="text-white text-base opacity-80 hover:opacity-100 transition duration-300"
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="max-w-md text-center">
        <h3 className="text-xl mb-4 font-semibold">
          Subscribe to Our Newsletter
        </h3>
        <div className="flex items-center backdrop-blur-lg rounded-full border border-white/30 overflow-hidden w-full">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 p-3 bg-transparent text-white text-sm placeholder-white/70 outline-none"
          />
          <button className="p-3 px-6 bg-blue-600 text-white font-bold rounded-full hover:bg-purple-800 transition duration-300">
            Subscribe
          </button>
        </div>
        <div className="flex justify-center gap-4 mt-6">
          {[FaGithub, FaXTwitter, FaInstagram, FaLinkedinIn].map(
            (Icon, index) => (
              <a
                key={index}
                href="#"
                className="text-white text-xl hover:text-cyan-500 transition duration-300 flex items-center justify-center w-10 h-10"
              >
                <Icon />
              </a>
            )
          )}
        </div>
      </div>
      <div className="border-t border-white/10 mt-6 w-full text-center pt-3">
        <p className="text-sm opacity-80">
          © 2025 InvestIQ. All rights reserved.
        </p>
      </div>
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-cyan-500 to-cyan-400 text-white p-3 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition duration-300 items-center justify-center hidden lg:block"
          style={{
            animation: "bounce 2.2s infinite",
          }}
        >
          <FaArrowUp className="text-xl" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
