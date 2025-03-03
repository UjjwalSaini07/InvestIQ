import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { saveItemToWatchlist } from "../../../functions/saveItemToWatchlist";
import { removeItemToWatchlist } from "../../../functions/removeItemToWatchlist";

function GridView({ coin, delay }) {
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
        className={`relative flex flex-col gap-6 w-64 h-80 p-6 bg-black rounded-2xl shadow-md transform transition-transform duration-300 group group-hover:scale-105 ${
          coin.price_change_percentage_24h >= 0
            ? "group-hover:border-green-500"
            : "group-hover:border-red-500"
        } border-2 border-gray-600`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay }}
      >
        <button
          className={`absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
            isCoinAdded
              ? "bg-yellow-400 text-gray-800"
              : "bg-gray-600 text-gray-300 hover:bg-gray-500"
          }`}
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

        <div className="flex items-center gap-4">
          <img
            src={coin.image}
            className="h-12 w-12 rounded-full shadow-md group-hover:scale-105 transition-transform duration-300"
            alt={coin.name}
          />
          <div className="flex flex-col">
            <p className="uppercase font-semibold text-lg text-white">{coin.symbol}</p>
            <p className="text-gray-400 text-sm">{coin.name}</p>
          </div>
        </div>

        {/* Price and Percentage Change */}
        <div className="flex items-center gap-3">
          <div
            className={`px-4 py-1 rounded-full font-semibold text-sm ${
              coin.price_change_percentage_24h >= 0
                ? "bg-green-500 text-white group-hover:bg-green-400"
                : "bg-red-500 text-white group-hover:bg-red-400"
            }`}
          >
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
        </div>

        {/* Current Price */}
        <p className="text-xl font-bold text-white">
          ₹ {coin.current_price.toLocaleString()}
        </p>

        {/* Volume and Market Cap */}
        <p className="text-gray-400 text-sm">
          Total Volume: <span className="text-white">{coin.total_volume.toLocaleString()}</span>
        </p>
        <p className="text-gray-400 text-sm">
          Market Capital:{" "}
          <span className="text-white">₹{coin.market_cap.toLocaleString()}</span>
        </p>
      </motion.div>
    </a>
  );
}

export default GridView;
