import React, { useState } from "react";
import { motion } from "framer-motion";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";
import { saveItemToWatchlist } from "../../../functions/saveItemToWatchlist";
import { removeItemToWatchlist } from "../../../functions/removeItemToWatchlist";

function GridView({ coin, delay }) {
  const watchlist = JSON.parse(localStorage.getItem("watchlist"));
  const [isCoinAdded, setIsCoinAdded] = useState(watchlist?.includes(coin.id));

  return (
    <a href={`/coin/${coin.id}`}>
      <motion.div
        className={`flex flex-col gap-6 w-64 p-8 bg-gray-800 rounded-lg border-2 ${
          coin.price_change_percentage_24h < 0 ? "border-red-500" : "border-gray-800"
        } hover:border-green-500 transition-all duration-300`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay }}
      >
        <div className="flex items-center gap-4">
          <img src={coin.image} className="h-12 w-12 rounded-full" alt={coin.name} />
          <div className="flex justify-between w-full items-center">
            <div className="flex flex-col gap-1">
              <p className="uppercase font-semibold m-0">{coin.symbol}</p>
              <p className="text-gray-400 text-sm font-medium m-0">{coin.name}</p>
            </div>
            <div
              className={`flex items-center justify-center rounded-full p-2 h-6 w-6 cursor-pointer ${
                coin.price_change_percentage_24h < 0
                  ? "border-red-500 text-red-500"
                  : "border-green-500 text-green-500"
              }`}
              onClick={(e) => {
                e.preventDefault();
                if (isCoinAdded) {
                  removeItemToWatchlist(e, coin.id, setIsCoinAdded);
                } else {
                  setIsCoinAdded(true);
                  saveItemToWatchlist(e, coin.id);
                }
              }}
            >
              {isCoinAdded ? <StarIcon /> : <StarOutlineIcon />}
            </div>
          </div>
        </div>
        {coin.price_change_percentage_24h >= 0 ? (
          <div className="flex items-center gap-3">
            <div className="border-2 border-green-500 rounded-full px-4 py-1 font-semibold text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="flex items-center justify-center border-2 border-green-500 rounded-full p-1 text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300">
              <TrendingUpRoundedIcon />
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <div className="border-2 border-red-500 rounded-full px-4 py-1 font-semibold text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="flex items-center justify-center border-2 border-red-500 rounded-full p-1 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300">
              <TrendingDownRoundedIcon />
            </div>
          </div>
        )}
        <p
          className={`font-semibold text-lg m-0 ${
            coin.price_change_percentage_24h >= 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          ${coin.current_price.toLocaleString()}
        </p>
        <p className="text-gray-400 text-sm font-medium m-0">
          Total Volume : {coin.total_volume.toLocaleString()}
        </p>
        <p className="text-gray-400 text-sm font-medium m-0">
          Market Capital : ${coin.market_cap.toLocaleString()}
        </p>
      </motion.div>
    </a>
  );
}

export default GridView;
