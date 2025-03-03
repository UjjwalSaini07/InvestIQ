import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { saveItemToWatchlist } from "../../../functions/saveItemToWatchlist";
import { removeItemToWatchlist } from "../../../functions/removeItemToWatchlist";

function GridView({ stock, delay }) {
  const [isStockAdded, setIsStockAdded] = useState(false);

  useEffect(() => {
    const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    setIsStockAdded(watchlist.includes(stock.ticker));
  }, [stock.ticker]);

  const handleWatchlistToggle = (e) => {
    e.preventDefault();

    if (isStockAdded) {
      removeItemToWatchlist(e, stock.ticker, setIsStockAdded);
      const updatedWatchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
      const filteredWatchlist = updatedWatchlist.filter((id) => id !== stock.ticker);
      localStorage.setItem("watchlist", JSON.stringify(filteredWatchlist));
      setIsStockAdded(false);
    } else {
      saveItemToWatchlist(e, stock.ticker);
      const updatedWatchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
      updatedWatchlist.push(stock.ticker);
      localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
      setIsStockAdded(true);
    }
  };

  const percentageChange = (
    ((stock.current_price - stock.previous_close) / stock.previous_close) * 100
  ).toFixed(2);

  return (
    <a href={`/coin/${stock.ticker}`} className="block group">
      <motion.div
        className={`relative flex flex-col gap-6 w-64 h-96 p-6 bg-black rounded-2xl shadow-lg transform transition-transform duration-300 group group-hover:scale-105 ${
          percentageChange >= 0
            ? "group-hover:border-green-500"
            : "group-hover:border-red-500"
        } border-2 border-gray-600`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
              <img
                src={stock.image}
                alt={stock.ticker}
                className="w-12 h-12 rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-2sm font-semibold text-white">
                {stock.ticker}
              </p>
              <p className="text-gray-400 text-sm">{stock.exchange}</p>
            </div>
          </div>

          <button
            className={`absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
              isStockAdded
                ? "bg-yellow-400 text-gray-800"
                : "bg-gray-600 text-gray-300 hover:bg-gray-500"
            }`}
            onClick={handleWatchlistToggle}
          >
            {isStockAdded ? (
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
        </div>

        <div className="flex items-center gap-1 -ml-1">
          <div
            className={`px-4 py-1 rounded-full font-semibold text-sm ${
              percentageChange >= 0
                ? "bg-green-500 text-white group-hover:bg-green-400"
                : "bg-red-500 text-white group-hover:bg-red-400"
            }`}
          >
            {percentageChange}%
          </div>
        </div>

        <div className="flex flex-row justify-between">
          <p className="text-xl font-bold text-white">
            ₹{stock.current_price.toLocaleString()}
          </p>
          <p className="text-2lg font-bold text-red-500">
            ₹{stock.previous_close.toLocaleString()}
          </p>
        </div>

        <div className="flex justify-between text-sm text-gray-400">
          <p>
            52W High:{" "}
            <span className="text-white">₹{stock.high.toLocaleString()}</span>
          </p>
          <p>
            Low:{" "}
            <span className="text-white">₹{stock.low.toLocaleString()}</span>
          </p>
        </div>

        <p className="text-gray-400 text-sm">
          Market Cap:{" "}
          <span className="text-white">
            ₹{stock.market_cap.toLocaleString()} Cr
          </span>
        </p>

        <p className="text-gray-400 text-sm">
          Dividend Yield:{" "}
          <span className="text-white">{stock.dividend_yield}%</span>
        </p>

        <p className="text-gray-400 text-sm">
          Face Value:{" "}
          <span className="text-white">
            ₹{stock.face_value.toLocaleString()}
          </span>
        </p>
      </motion.div>
    </a>
  );
}

export default GridView;
