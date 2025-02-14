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
    <div className="bg-black text-white rounded-lg">
      <h2 className="text-xl font-semibold text-center text-cyan-400">Crypto Market Cap</h2>
      <Card className="p-4 mt-3 shadow-lg">
        {loading ? (
          <p className="text-center text-gray-400">Loading...</p>
        ) : marketData ? (
          <Line data={marketData} options={{ responsive: true, maintainAspectRatio: false }} />
        ) : (
          <p className="text-center text-gray-400">No data available</p>
        )}
      </Card>
      <div className="flex flex-wrap justify-center mt-3 space-x-1">
        {timeframes.map((t) => (
          <Button
            key={t.label}
            onClick={() => setTimeframe(t.label)}
            className={`px-2 py-1 text-sm rounded-md transition ${
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


// import React, { useState, useEffect } from "react";
// import { Line } from "react-chartjs-2";
// import "chart.js/auto";
// import { Card } from "../../@/ui/card";
// import { Button } from "../../@/ui/button";

// const timeframes = [
//   { label: "1D", days: 1 },
//   { label: "1W", days: 7 },
//   { label: "1M", days: 30 },
//   { label: "6M", days: 180 },
//   { label: "YTD", days: 365 },
//   { label: "1Y", days: 365 },
//   { label: "5Y", days: 1825 },
//   { label: "All", days: "max" },
// ];

// const CryptoMarketChart = () => {
//   const [timeframe, setTimeframe] = useState("5Y");
//   const [marketData, setMarketData] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const fetchMarketData = async (days) => {
//     setLoading(true);
//     try {
//       const res = await fetch(
//         `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${days}`
//       );
//       const data = await res.json();

//       const chartData = {
//         labels: data.prices.map((item) =>
//           new Date(item[0]).toLocaleDateString()
//         ),
//         datasets: [
//           {
//             label: "Market Cap (USD)",
//             data: data.market_caps.map((item) => item[1]),
//             borderColor: "#0ff",
//             backgroundColor: "rgba(0, 255, 255, 0.2)",
//             fill: true,
//           },
//         ],
//       };
//       setMarketData(chartData);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     const selectedTimeframe = timeframes.find((t) => t.label === timeframe);
//     if (selectedTimeframe) {
//       fetchMarketData(selectedTimeframe.days);
//     }
//   }, [timeframe]);

//   return (
//     <div className="p-6 bg-gray-900 text-white rounded-lg shadow-lg">
//       <h2 className="text-2xl font-bold text-center">Crypto Market Cap</h2>
//       <Card className="p-6 mt-4 bg-gray-800">
//         {loading ? (
//           <p className="text-center">Loading...</p>
//         ) : marketData ? (
//           <Line data={marketData} />
//         ) : (
//           <p className="text-center">No data available</p>
//         )}
//       </Card>
//       <div className="flex flex-wrap justify-center space-x-2 mt-4">
//         {timeframes.map((t) => (
//           <Button
//             key={t.label}
//             onClick={() => setTimeframe(t.label)}
//             className={`px-3 py-1 rounded-md transition-all ${
//               timeframe === t.label
//                 ? "bg-blue-500 text-white"
//                 : "bg-gray-700 text-gray-300 hover:bg-gray-600"
//             }`}
//           >
//             {t.label}
//           </Button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CryptoMarketChart;
