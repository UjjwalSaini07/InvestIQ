import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { saveItemToWatchlist } from "../../../functions/saveItemToWatchlist";
import { removeItemToWatchlist } from "../../../functions/removeItemToWatchlist";

function ListView({ coin, delay }) {
  const [isCoinAdded, setIsCoinAdded] = useState(false);

  useEffect(() => {
    const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    setIsCoinAdded(watchlist.includes(coin.id));
  }, [coin.id]);

  const handleWatchlistToggle = (e) => {
    e.preventDefault();

    if (isCoinAdded) {
      // Remove coin from watchlist
      removeItemToWatchlist(e, coin.id, setIsCoinAdded);
      const updatedWatchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
      const filteredWatchlist = updatedWatchlist.filter((id) => id !== coin.id);
      localStorage.setItem("watchlist", JSON.stringify(filteredWatchlist));
      setIsCoinAdded(false);
    } else {
      // Add coin to watchlist
      saveItemToWatchlist(e, coin.id);
      const updatedWatchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
      updatedWatchlist.push(coin.id);
      localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
      setIsCoinAdded(true);
    }
  };

  return (
    <a href={`/coin/${coin.id}`} className="block group">
      <motion.div
        className={`flex items-center justify-between w-full p-4 rounded-lg bg-black shadow-md hover:shadow-lg transition-all duration-300 ${
          coin.price_change_percentage_24h >= 0
            ? "group-hover:border-green-500"
            : "group-hover:border-red-500"
        } border-2 border-gray-600 mb-4`}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: delay }}
      >
        <div className="flex items-center gap-4">
          <img
            src={coin.image}
            className="h-12 w-12 rounded-full shadow-md group-hover:scale-110 transition-transform duration-300 mb-1"
            alt={coin.name}
          />
          <div className="flex flex-col">
            <p className="uppercase font-semibold text-lg text-white mb-1">{coin.symbol}</p>
            <p className="text-gray-400 text-sm mb-1">{coin.name}</p>
          </div>
        </div>

        {/* Price and Percentage Change */}
        <div className="flex items-center gap-4">
          <div
            className={`px-4 py-1 rounded-full font-semibold text-sm ${
              coin.price_change_percentage_24h >= 0
                ? "bg-green-500 text-white group-hover:bg-green-400"
                : "bg-red-500 text-white group-hover:bg-red-400"
            } mb-1`}
          >
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div
            className={`flex items-center justify-center w-8 h-8 rounded-full ${
              coin.price_change_percentage_24h >= 0
                ? "text-green-500 bg-green-500/10 group-hover:bg-green-500"
                : "text-red-500 bg-red-500/10 group-hover:bg-red-500"
            } transition-colors duration-300 mb-1`}
          >
            {coin.price_change_percentage_24h >= 0 ? "↑" : "↓"}
          </div>
        </div>

        {/* Current Price */}
        <p
          className={`text-lg font-bold mb-1 ${
            coin.price_change_percentage_24h >= 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          ₹{coin.current_price.toLocaleString()}
        </p>

        {/* Volume and Market Cap */}
        <div className="text-right">
          <p className="text-sm text-gray-400 mb-1">
            Total Volume:{" "}
            <span className="text-white">{coin.total_volume.toLocaleString()}</span>
          </p>
          <p className="text-sm text-gray-400 mb-1">
            Market Cap:{" "}
            <span className="text-white">₹{coin.market_cap.toLocaleString()}</span>
          </p>
        </div>

        {/* Watchlist Button */}
        <button
          className={`ml-4 flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
            isCoinAdded
              ? "bg-yellow-400 text-gray-800 hover:bg-yellow-300"
              : "bg-gray-600 text-gray-300 hover:bg-gray-500"
          } mb-1`}
          onClick={handleWatchlistToggle}
        >
          {isCoinAdded ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21z" />
            </svg>
          )}
        </button>
      </motion.div>
    </a>
  );
}

export default ListView;
