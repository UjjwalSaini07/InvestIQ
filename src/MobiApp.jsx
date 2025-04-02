import React from "react";
import { motion } from "framer-motion";

function InvestIQ() {
  return (
    <div className="min-h-screen w-full bg-gray-950 text-white flex flex-col justify-center items-center px-4 relative overflow-hidden text-center">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-700 opacity-50 blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 2 }}
      ></motion.div>
      <motion.div
        className="absolute top-1/3 left-1/4 w-80 h-80 bg-purple-500 opacity-40 rounded-full filter blur-3xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      ></motion.div>
      <motion.div
        className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-indigo-500 opacity-40 rounded-full filter blur-3xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
      ></motion.div>

      {/* Floating Decorative Elements */}
      <motion.div
        className="absolute top-5 left-5 w-10 h-10 bg-pink-500 rounded-full shadow-lg"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      ></motion.div>
      <motion.div
        className="absolute bottom-5 right-5 w-12 h-12 bg-blue-500 rounded-full shadow-lg"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
      ></motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl px-6 sm:px-10 md:px-16 relative z-10"
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Focus Mode 🔥
        </motion.h1>
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-400 to-pink-500 drop-shadow-2xl mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Welcome to InvestIQ
        </motion.h2>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-white drop-shadow-lg max-w-3xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Take your financial future to the next level with expert insights, powerful tools, and smart investing strategies.
        </motion.p>
        <motion.p
          className="text-lg text-white drop-shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          This WebContent is only available on larger screens. Please enlarge your window or switch to a bigger device to access InvestIQ.
        </motion.p>
        <motion.a
          href="https://invest-iqs.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-50 pointer-events-auto mt-6 inline-block px-10 sm:px-14 py-3 sm:py-4 cursor-pointer bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-600 hover:to-indigo-500 rounded-full text-lg sm:text-xl font-bold shadow-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 1.5 }}
        >
          Explore InvestIQ
        </motion.a>
      </motion.div>
    </div>
  );
}

export default InvestIQ;