import React, { useEffect, useState } from "react";
import Info from "../components/compare/Info";
import LineChart from "../components/compare/LineChart";
import ToggleComponents from "../components/compare/ToggleComponent";
import SelectCoins from "../components/compare/SelectCoins";
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

  useEffect(() => {
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
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center py-8">
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

      {loading && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="w-16 h-16 border-4 border-t-4 border-blue-500 rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
}

export default Compare;
