import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { Card } from "../../@/ui/card";
import { Button } from "../../@/ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "../../@/ui/select";

const timeframes = [
  { label: "1D", days: 1 },
  { label: "1W", days: 7 },
  { label: "1M", days: 30 },
  { label: "6M", days: 180 },
  { label: "YTD", days: 365 },
  { label: "1Y", days: 365 },
  { label: "5Y", days: 1825 },
  { label: "All", days: "max" },
];

const cryptocurrencies = [
  { label: "Bitcoin", id: "bitcoin" },
  { label: "Ethereum", id: "ethereum" },
  { label: "Solana", id: "solana" },
  { label: "Cardano", id: "cardano" },
  { label: "Dogecoin", id: "dogecoin" },
];

const CryptoStockGraph = () => {
  const [timeframe, setTimeframe] = useState("5Y");
  const [crypto, setCrypto] = useState("bitcoin");
  const [marketData, setMarketData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchMarketData = async (cryptoId, days) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/${cryptoId}/market_chart?vs_currency=usd&days=${days}`
      );
      const data = await res.json();

      const chartDataMarketCap = {
        labels: data.prices.map((item) =>
          new Date(item[0]).toLocaleDateString()
        ),
        datasets: [
          {
            label: `Market Cap (USD) - ${cryptoId.toUpperCase()}`,
            data: data.market_caps.map((item) => item[1]),
            borderColor: "#00FFFF",
            backgroundColor: "rgba(0, 255, 255, 0.2)",
            fill: true,
            tension: 0.4,
          },
        ],
      };

      const chartDataPrices = {
        labels: data.prices.map((item) =>
          new Date(item[0]).toLocaleDateString()
        ),
        datasets: [
          {
            label: `Price (USD) - ${cryptoId.toUpperCase()}`,
            data: data.prices.map((item) => item[1]),
            borderColor: "#FF5733",
            backgroundColor: "rgba(255, 87, 51, 0.2)",
            fill: true,
            tension: 0.4,
          },
        ],
      };

      setMarketData({ marketCap: chartDataMarketCap, prices: chartDataPrices });
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const selectedTimeframe = timeframes.find((t) => t.label === timeframe);
    if (selectedTimeframe) {
      fetchMarketData(crypto, selectedTimeframe.days);
    }
  }, [timeframe, crypto]);

  return (
    <div className="bg-black text-white rounded-lg p-5 max-w-7xl mx-auto">
      <h2 className="text-4xl font-semibold text-center text-cyan-400">
        Crypto Market Overview
      </h2>

      {/* ✅ Corrected Crypto Selection Dropdown */}
      <div className="flex justify-center mt-5">
        <Select value={crypto} onValueChange={setCrypto}>
          <SelectTrigger className="w-[200px] bg-gray-800 text-white px-4 py-2 rounded-md">
            <SelectValue placeholder="Select Crypto" />
          </SelectTrigger>
          <SelectContent className="bg-gray-900 text-white">
            {cryptocurrencies.map((coin) => (
              <SelectItem key={coin.id} value={coin.id}>
                {coin.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        <Card className="p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-cyan-400 mb-3 text-center">
            {crypto.toUpperCase()} Market Cap
          </h3>
          {loading ? (
            <p className="text-center text-gray-400">Loading...</p>
          ) : marketData ? (
            <div className="h-[400px]">
              <Line
                data={marketData.marketCap}
                options={{ responsive: true, maintainAspectRatio: false }}
              />
            </div>
          ) : (
            <p className="text-center text-gray-400">No data available</p>
          )}
        </Card>

        <Card className="p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-orange-400 mb-3 text-center">
            {crypto.toUpperCase()} Price Trends
          </h3>
          {loading ? (
            <p className="text-center text-gray-400">Loading...</p>
          ) : marketData ? (
            <div className="h-[400px]">
              <Line
                data={marketData.prices}
                options={{ responsive: true, maintainAspectRatio: false }}
              />
            </div>
          ) : (
            <p className="text-center text-gray-400">No data available</p>
          )}
        </Card>
      </div>

      <div className="flex flex-wrap justify-center mt-5 space-x-2">
        {timeframes.map((t) => (
          <Button
            key={t.label}
            onClick={() => setTimeframe(t.label)}
            className={`px-3 py-1.5 text-sm rounded-md transition ${
              timeframe === t.label
                ? "bg-cyan-500 text-black"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {t.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CryptoStockGraph;
