import React from "react";
import { motion } from "framer-motion";

function InvestIQ() {
  return (
    <div className="min-h-screen w-full bg-gray-900 text-white">
      {/* Desktop View */}
      <div className="hidden lg:flex flex-col items-center justify-center h-screen text-center">
        <motion.h1
          className="text-6xl font-extrabold text-indigo-400 mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to InvestIQ 🚀
        </motion.h1>
        <motion.p
          className="text-xl text-gray-300 max-w-2xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Smart investing starts here. Explore cutting-edge insights and tools
          to make informed financial decisions.
        </motion.p>
        <motion.a
          href="https://investiq.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-600 hover:to-indigo-500 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Visit InvestIQ
        </motion.a>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden flex items-center justify-center h-screen bg-gradient-to-br from-indigo-700 to-purple-800 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
            Focus Mode 🔥
          </h1>
          <p className="text-lg text-gray-200">
            This content is only available on larger screens.
          </p>
          <p className="text-md mt-2 text-gray-300">
            Increase your screen size to access InvestIQ.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default InvestIQ;