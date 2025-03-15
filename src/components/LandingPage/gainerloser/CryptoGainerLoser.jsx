import React, { useEffect, useState } from "react";
import axios from "axios";

const CryptoGainerLoser = () => {
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

        setGainers(sortedByChange.slice(0, 7));
        setLosers(sortedByChange.slice(-7).reverse());
      } catch (error) {
        console.error("Error fetching coin data:", error);
      }
    };

    fetchCoinData();
  }, []);

  const renderCoin = (coin) => (
    <div key={coin.id} className="flex items-center justify-between p-3">
      <div className="flex items-center space-x-2">
        <img src={coin.image} alt={coin.name} className="w-12 h-12" />
        <div>
          <p className="font-semibold ml-1 text-xl text-white">{coin.name}</p>
          <p className="text-xs ml-1 text-gray-400">
            {coin.symbol.toUpperCase()}
          </p>
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
        <p className="text-white font-bold ml-6">
          ₹ {coin?.current_price?.toFixed(3)}
        </p>
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-black text-white mb-4 -mt-3">
      <div>
      <div className="flex flex-row items-center">
          <h2 className="text-2xl font-bold mb-4">Crypto Gainer</h2>
          <div className="ml-2 -mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-double-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"
              />
              <path
                fillRule="evenodd"
                d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"
              />
            </svg>
          </div>
        </div>

        <div className="bg-black rounded-lg shadow-lg divide-y divide-gray-700">
          {gainers.map((coin) => renderCoin(coin))}
        </div>
      </div>

      <div>
        <div className="flex flex-row items-center">
          <h2 className="text-2xl font-bold mb-4">Crypto Loser</h2>
          <div className="ml-2 -mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-double-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"
              />
              <path
                fillRule="evenodd"
                d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"
              />
            </svg>
          </div>
        </div>

        <div className="bg-black rounded-lg shadow-lg divide-y divide-gray-700">
          {losers.map((coin) => renderCoin(coin))}
        </div>
      </div>
    </div>
  );
};

export default CryptoGainerLoser;
