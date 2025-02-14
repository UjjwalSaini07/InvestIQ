import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { Card } from "../../@/ui/card";
import { Button } from "../../@/ui/button";

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

const datasetsConfig = [
  { label: "Market Cap (USD)", key: "market_caps_usd", color: "#00FFFF" },
  { label: "Market Cap (INR)", key: "market_caps_inr", color: "#FFA500" },
  { label: "Trading Volume (USD)", key: "volumes_usd", color: "#FF5733" },
  { label: "Trading Volume (INR)", key: "volumes_inr", color: "#4CAF50" },
];

const CryptoMarketChart = () => {
  const [timeframe, setTimeframe] = useState("5Y");
  const [selectedDataset, setSelectedDataset] = useState("market_caps_usd");
  const [marketData, setMarketData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchMarketData = async (days) => {
    setLoading(true);
    try {
      const [resUSD, resINR] = await Promise.all([
        fetch(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${days}`),
        fetch(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=inr&days=${days}`)
      ]);

      const [dataUSD, dataINR] = await Promise.all([resUSD.json(), resINR.json()]);

      if (!dataUSD.prices || !dataINR.prices) {
        throw new Error("Invalid data received from API.");
      }

      const formattedData = {
        labels: dataUSD.prices.map((item) => new Date(item[0]).toLocaleDateString()),
        datasets: {
          market_caps_usd: dataUSD.market_caps.map((item) => item[1]),
          market_caps_inr: dataINR.market_caps.map((item) => item[1]),
          volumes_usd: dataUSD.total_volumes.map((item) => item[1]),
          volumes_inr: dataINR.total_volumes.map((item) => item[1]),
        },
      };

      setMarketData(formattedData);
    } catch (error) {
      console.error("Error fetching data:", error);
      setMarketData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const selectedTimeframe = timeframes.find((t) => t.label === timeframe);
    if (selectedTimeframe) {
      fetchMarketData(selectedTimeframe.days);
    }
  }, [timeframe]);

  const selectedConfig = datasetsConfig.find((d) => d.key === selectedDataset);

  return (
    <div className="bg-black text-white rounded-lg p-5 -mt-8 mb-8 max-w-7xl mx-auto">
      <h2 className="text-4xl font-semibold text-center text-cyan-400">
        Crypto Market Analysis
      </h2>

      <div className="flex flex-wrap justify-center mt-3 space-x-2">
        {datasetsConfig.map((dataset) => (
          <Button
            key={dataset.key}
            onClick={() => setSelectedDataset(dataset.key)}
            className={`px-3 py-1.5 text-sm rounded-md transition ${
              selectedDataset === dataset.key
                ? "bg-cyan-500 text-black"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {dataset.label}
          </Button>
        ))}
      </div>

      <Card className="p-6 mt-5 shadow-lg max-h-[500px]">
        {loading ? (
          <p className="text-center text-gray-400">Loading...</p>
        ) : marketData && marketData.labels.length > 0 ? (
          <div className="h-[400px]">
            <Line
              data={{
                labels: marketData.labels,
                datasets: [
                  {
                    label: selectedConfig.label,
                    data: marketData.datasets[selectedDataset],
                    borderColor: selectedConfig.color,
                    backgroundColor: `${selectedConfig.color}33`,
                    fill: true,
                    tension: 0.4,
                  },
                ],
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    labels: {
                      color: "white",
                      font: { size: 14 },
                    },
                  },
                },
                scales: {
                  x: { ticks: { color: "white" }, grid: { color: "gray" } },
                  y: { ticks: { color: "white" }, grid: { color: "gray" } },
                },
              }}
            />
          </div>
        ) : (
          <p className="text-center text-gray-400">No data available</p>
        )}
      </Card>

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

export default CryptoMarketChart;
