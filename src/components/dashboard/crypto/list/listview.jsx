import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tooltip } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { convertNumber } from "../../../functions/convertNumber";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import { saveItemToWatchlist } from "../../../functions/saveItemToWatchlist";
import { removeItemToWatchlist } from "../../../functions/removeItemToWatchlist";

function ListView({ coin, delay }) {
  const watchlist = JSON.parse(localStorage.getItem("watchlist"));
  const [isCoinAdded, setIsCoinAdded] = useState(watchlist?.includes(coin.id));

  return (
    <a href={`/coin/${coin.id}`}>
      <motion.tr
        className="w-[90%] px-8 py-4 mb-2 mx-auto flex justify-between items-center rounded-lg cursor-pointer hover:bg-gray-800 transition-all duration-300"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: delay }}
      >
        <Tooltip title="Coin Image">
          <td className="w-12 mr-4">
            <img src={coin.image} className="h-12 w-12 rounded-full" alt={coin.name} />
          </td>
        </Tooltip>
        <Tooltip title="Coin Info" placement="bottom-start">
          <td className="w-40">
            <div className="flex flex-col gap-1">
              <p className="uppercase font-semibold m-0">{coin.symbol}</p>
              <p className="text-gray-400 text-sm font-medium m-0">{coin.name}</p>
            </div>
          </td>
        </Tooltip>
        <Tooltip title="Coin Price Percentage In 24hrs" placement="bottom-start">
          <td>
            <div className="flex items-center gap-3">
              <div
                className={`px-4 py-1 rounded-full font-semibold ${
                  coin.price_change_percentage_24h >= 0
                    ? "text-green-500 border border-green-500"
                    : "text-red-500 border border-red-500"
                }`}
              >
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
              <div
                className={`flex items-center justify-center w-6 h-6 rounded-full ${
                  coin.price_change_percentage_24h >= 0
                    ? "text-green-500 border border-green-500"
                    : "text-red-500 border border-red-500"
                }`}
              >
                {coin.price_change_percentage_24h >= 0 ? (
                  <TrendingUpRoundedIcon />
                ) : (
                  <TrendingDownRoundedIcon />
                )}
              </div>
            </div>
          </td>
        </Tooltip>
        <Tooltip title="Coin Price In USD" placement="bottom-end">
          <td
            className={`text-right font-semibold text-lg ${
              coin.price_change_percentage_24h >= 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            ${coin.current_price.toLocaleString()}
          </td>
        </Tooltip>
        <Tooltip title="Coin Total Volume" placement="bottom-end">
          <td className="text-right text-sm text-gray-400">{coin.total_volume.toLocaleString()}</td>
        </Tooltip>
        <Tooltip title="Coin Market Capital" placement="bottom-end">
          <td className="text-right text-sm text-gray-400">
            ${coin.market_cap.toLocaleString()}
          </td>
        </Tooltip>
        <td className="text-gray-400 text-sm hidden md:block">
          ${convertNumber(coin.market_cap)}
        </td>
        <td
          className={`flex items-center justify-center w-8 h-8 rounded-full cursor-pointer ${
            coin.price_change_percentage_24h < 0 ? "text-red-500 border-red-500" : "text-green-500 border-green-500"
          } border`}
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
        </td>
      </motion.tr>
    </a>
  );
}

export default ListView;
