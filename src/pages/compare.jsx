import React, { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Info from "../components/compare/Info";
import LineChart from "../components/compare/LineChart";
import ToggleComponents from "../components/compare/ToggleComponent";
import SelectCoins from "../components/compare/SelectCoins";
import Loader from "../components/common/Loader";
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
  const hasShownToast = useRef(false);
  const compareRef = useRef(null);

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
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasShownToast.current) {
          toast.info(
            "This Crypto Comparison page is loading data. Please wait... After making changes from the dropdown, press the refresh button (located at the top-right) to fetch the data.",
            {
              position: "top-right",
              autoClose: 10000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: false,
            }
          );
          hasShownToast.current = true;
        }
      },
      { threshold: 0.5 }
    );

    fetchData();

    if (compareRef.current) {
      observer.observe(compareRef.current);
    }

    return () => {
      if (compareRef.current) {
        observer.unobserve(compareRef.current);
      }
    };
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
    <>
      <Helmet>
        <title>Compare | InvestIQ</title>
      </Helmet>
      <div
        className="min-h-screen bg-black text-white flex flex-col justify-center items-center py-8 relative"
        ref={compareRef}
      >
        <ToastContainer />
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
            <Info
              title={coin1Data.name || "Loading..."}
              desc={coin1Data.desc || ""}
            />
          </div>
          <div className="p-6 border border-gray-600 rounded-lg">
            <Info
              title={coin2Data.name || "Loading..."}
              desc={coin2Data.desc || ""}
            />
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
            width="22"
            height="22"
            fill="currentColor"
            className="bi bi-arrow-clockwise"
            viewBox="0 0 35 35"
          >
            <path
              fillRule="evenodd"
              d="M17.5 6.563a10.938 10.938 0 1 0 9.944 6.374 1.094 1.094 0 0 1 1.986 -0.912A13.125 13.125 0 1 1 17.5 4.375z"
            />
            <path d="M17.5 9.769V1.168a0.547 0.547 0 0 1 0.897 -0.42l5.162 4.301c0.263 0.219 0.263 0.621 0 0.84L18.397 10.189A0.547 0.547 0 0 1 17.5 9.769" />
          </svg>
        </button>
      </div>
    </>
  );
}

export default Compare;
