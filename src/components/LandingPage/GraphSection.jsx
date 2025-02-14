import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const timeframes = ["1D", "1W", "1M", "6M", "YTD", "1Y", "5Y", "All"];

const CryptoMarketChart = () => {
  const [timeframe, setTimeframe] = useState("5Y");
  const [marketData, setMarketData] = useState(null);

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/global`)
      .then((res) => res.json())
      .then((data) => {
        // Simulate dynamic data based on timeframe
        const mockData = {
          labels: ["Mar 2021", "2022", "2023", "2024", "2025"],
          datasets: [
            {
              label: "Total Market Cap",
              data: [1.5, 2.1, 1.8, 2.9, 3.15],
              borderColor: "#0ff",
              backgroundColor: "rgba(0, 255, 255, 0.2)",
              fill: true,
            },
          ],
        };
        setMarketData(mockData);
      });
  }, [timeframe]);

  return (
    <div className="p-4 bg-black text-white">
      <h2 className="text-2xl font-bold">Total market cap</h2>
      <Card className="p-4 mt-2">
        {marketData && <Line data={marketData} />}
      </Card>
      <div className="flex space-x-2 mt-4">
        {timeframes.map((t) => (
          <Button
            key={t}
            onClick={() => setTimeframe(t)}
            className={
              timeframe === t ? "bg-gray-600 text-white" : "bg-gray-800 text-gray-400"
            }
          >
            {t}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CryptoMarketChart;
