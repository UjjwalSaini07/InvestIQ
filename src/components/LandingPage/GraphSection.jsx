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

const CryptoMarketChart = () => {
  const [timeframe, setTimeframe] = useState("5Y");
  const [marketData, setMarketData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchMarketData = async (days) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${days}`
      );
      const data = await res.json();

      const chartData = {
        labels: data.prices.map((item) =>
          new Date(item[0]).toLocaleDateString()
        ),
        datasets: [
          {
            label: "Market Cap (USD)",
            data: data.market_caps.map((item) => item[1]),
            borderColor: "#00FFFF",
            backgroundColor: "rgba(0, 255, 255, 0.2)",
            fill: true,
            tension: 0.4,
          },
        ],
      };
      setMarketData(chartData);
    } catch (error) {
      console.error("Error fetching data:", error);
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

  return (
    <div className="bg-black text-white rounded-lg p-5 max-w-7xl mx-auto">
      <h2 className="text-4xl font-semibold text-center text-cyan-400">Crypto Market Cap</h2>
      <Card className="p-6 mt-5 shadow-lg max-h-[500px]">
        {loading ? (
          <p className="text-center text-gray-400">Loading...</p>
        ) : marketData ? (
          <div className="h-[400px]">
            <Line data={marketData} options={{ responsive: true, maintainAspectRatio: false }} />
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
