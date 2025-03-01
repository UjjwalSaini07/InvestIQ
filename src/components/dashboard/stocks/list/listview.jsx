import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { saveItemToWatchlist } from "../../../functions/saveItemToWatchlist";
import { removeItemToWatchlist } from "../../../functions/removeItemToWatchlist";

function ListView({ stock, delay }) {
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
      const filteredWatchlist = updatedWatchlist.filter(
        (id) => id !== stock.ticker
      );
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
    ((stock.current_price - stock.previous_close) / stock.previous_close) *
    100
  ).toFixed(2);

  return (
    <a href={`/coin/${stock.ticker}`} className="block group">
      <motion.div
        className={`relative grid grid-cols-12 items-center w-full p-6 bg-black rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-105 border-2 ${
          percentageChange >= 0
            ? "group-hover:border-green-500"
            : "group-hover:border-red-500"
        } border-2 border-gray-600`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay }}
      >
        <div className="col-span-1 -ml-5 flex items-center justify-center">
          <img
            src={stock.image}
            alt={stock.ticker}
            className="w-12 h-12 rounded-full"
          />
        </div>

        <div className="col-span-3 flex flex-col">
          <p className="text-lg font-semibold text-white">{stock.ticker}</p>
          <p className="text-sm text-gray-400">{stock.exchange}</p>
        </div>

        <div className="flex items-center gap-1 -ml-14">
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

        <div className="col-span-2">
          <p className="text-xl font-bold text-white">
            ₹{stock.current_price.toLocaleString()}
          </p>
          <p className="text-sm text-red-400">
            ₹{stock.previous_close.toLocaleString()}
          </p>
        </div>

        <div className="col-span-4 grid grid-cols-2 gap-2 text-sm text-gray-400">
          <p>
            52W High:{" "}
            <span className="text-white">₹{stock.high.toLocaleString()}</span>
          </p>
          <p>
            52W Low:{" "}
            <span className="text-white">₹{stock.low.toLocaleString()}</span>
          </p>
          <p>
            Market Cap:{" "}
            <span className="text-white">
              ₹{stock.market_cap.toLocaleString()} Cr
            </span>
          </p>
          <p>
            Dividend Yield:{" "}
            <span className="text-white">{stock.dividend_yield}%</span>
          </p>
        </div>

        <div className="col-span-1 flex justify-end">
          <button
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
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
      </motion.div>
    </a>
  );
}

export default ListView
;