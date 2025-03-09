import React, { useEffect, useState } from "react";
import axios from "axios";

const CoinGainerLoser = () => {
  const [gainers, setGainers] = useState([]);
  const [losers, setLosers] = useState([]);

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const { data } = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "inr",
              order: "market_cap_desc",
              per_page: 100,
              page: 1,
              sparkline: false,
            },
          }
        );

        const sortedByChange = data.sort(
          (a, b) =>
            b.price_change_percentage_24h - a.price_change_percentage_24h
        );

        setGainers(sortedByChange.slice(0, 6));
        setLosers(sortedByChange.slice(-6).reverse());
      } catch (error) {
        console.error("Error fetching coin data:", error);
      }
    };

    fetchCoinData();
  }, []);

  const renderCoin = (coin, isGainer) => (
    <div key={coin.id} className="flex items-center justify-between p-3">
      <div className="flex items-center space-x-2">
        <img src={coin.image} alt={coin.name} className="w-12 h-12" />
        <div>
          <p className="font-semibold text-lg text-white">{coin.name}</p>
          <p className="text-xs text-gray-400">{coin.symbol.toUpperCase()}</p>
        </div>
      </div>
      <div className="flex items-center">
        <div
          className={`px-4 py-1 rounded-full font-semibold text-sm ${
            coin?.price_change_percentage_24h >= 0
              ? "bg-green-500 text-white group-hover:bg-green-400"
              : "bg-red-500 text-white group-hover:bg-red-400"
          }`}
        >
          {coin?.price_change_percentage_24h?.toFixed(2)}%
        </div>
        <p className="text-white ml-4">₹ {coin?.current_price?.toFixed(3)}</p>
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-black text-white mb-7 -mt-3">
      <div>
        <h2 className="text-2xl font-bold mb-4">Gainer Coins</h2>
        <div className="bg-black rounded-lg shadow-lg divide-y divide-gray-700">
          {gainers.map((coin) => renderCoin(coin, true))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Loser Coins</h2>
        <div className="bg-black rounded-lg shadow-lg divide-y divide-gray-700">
          {losers.map((coin) => renderCoin(coin, false))}
        </div>
      </div>
    </div>
  );
};

export default CoinGainerLoser;
