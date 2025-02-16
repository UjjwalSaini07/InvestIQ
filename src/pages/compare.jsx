import React, { useEffect, useState } from "react";
import Info from "../components/compare/Info";
import LineChart from "../components/compare/LineChart";
import ToggleComponents from "../components/compare/ToggleComponent";
import SelectCoins from "../components/compare/SelectCoins";
import Loader from "../components/Loader";
import { get100Coins } from "../components/functions/get100Coins";
import { getCoinData } from "../components/functions/getCoinData";
import { getPrices } from "../components/functions/getPrices";
import { settingChartData } from "../components/functions/settingChartData";
import { settingCoinObject } from "../components/functions/settingCoinObject";

function Compare() {
  const [allCoins, setAllCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [coin1Data, setCoin1Data] = useState({});
  const [coin2Data, setCoin2Data] = useState({});
  const [days, setDays] = useState(30);
  const [priceType, setPriceType] = useState("prices");
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  const fetchData = async () => {
    try {
      setLoading(true);
      const coins = await get100Coins();
      if (!coins || coins.length === 0) {
        throw new Error("Failed to fetch coin list");
      }
      setAllCoins(coins);

      const [data1, data2] = await Promise.all([
        getCoinData(crypto1),
        getCoinData(crypto2),
      ]);
      settingCoinObject(data1, setCoin1Data);
      settingCoinObject(data2, setCoin2Data);

      const [prices1, prices2] = await Promise.all([
        getPrices(crypto1, days, priceType),
        getPrices(crypto2, days, priceType),
      ]);
      settingChartData(setChartData, prices1, prices2);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [crypto1, crypto2, days, priceType]);

  const handleCoinChange = async (coinId, isCoin2) => {
    try {
      setLoading(true);
      if (isCoin2) {
        setCrypto2(coinId);
        const data2 = await getCoinData(coinId);
        settingCoinObject(data2, setCoin2Data);
      } else {
        setCrypto1(coinId);
        const data1 = await getCoinData(coinId);
        settingCoinObject(data1, setCoin1Data);
      }

      const [prices1, prices2] = await Promise.all([
        getPrices(isCoin2 ? crypto1 : coinId, days, priceType),
        getPrices(isCoin2 ? coinId : crypto2, days, priceType),
      ]);
      settingChartData(setChartData, prices1, prices2);
    } catch (error) {
      console.error("Error updating coin data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDaysChange = async (newDays) => {
    try {
      setLoading(true);
      setDays(newDays);

      const [prices1, prices2] = await Promise.all([
        getPrices(crypto1, newDays, priceType),
        getPrices(crypto2, newDays, priceType),
      ]);
      settingChartData(setChartData, prices1, prices2);
    } catch (error) {
      console.error("Error updating days:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePriceTypeChange = async (newPriceType) => {
    try {
      setLoading(true);
      setPriceType(newPriceType);

      const [prices1, prices2] = await Promise.all([
        getPrices(crypto1, days, newPriceType),
        getPrices(crypto2, days, newPriceType),
      ]);
      settingChartData(setChartData, prices1, prices2);
    } catch (error) {
      console.error("Error updating price type:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center py-8 relative">
      <h1 className="text-5xl font-semibold text-blue-500 mb-6">
        Cryptocurrency Comparison
      </h1>

      <SelectCoins
        allCoins={allCoins}
        crypto1={crypto1}
        crypto2={crypto2}
        onCoinChange={handleCoinChange}
        days={days}
        handleDaysChange={handleDaysChange}
      />

      <div className="mt-6">
        <ToggleComponents
          priceType={priceType}
          handlePriceTypeChange={handlePriceTypeChange}
        />
      </div>

      <div className="w-full flex justify-center mt-8 mb-6">
        <div className="w-full max-w-screen-xl">
          <div className="ml-20 h-[40vh] sm:h-[50vh] lg:h-[70vh]">
            <LineChart chartData={chartData} multiAxis={true} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mt-8">
        <div className="p-5 border border-gray-600 rounded-lg">
          <Info title={coin1Data.name || "Loading..."} desc={coin1Data.desc || ""} />
        </div>
        <div className="p-6 border border-gray-600 rounded-lg">
          <Info title={coin2Data.name || "Loading..."} desc={coin2Data.desc || ""} />
        </div>
      </div>

      <Loader loading={loading} />

      <button
        onClick={fetchData}
        className="absolute top-4 right-4 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
        aria-label="Refresh Data"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 11l4-4m0 0l-4-4m4 4H3m7 4l-4 4m0 0l4 4m-4-4h14"
          />
        </svg>
      </button>
    </div>
  );
}

export default Compare;
