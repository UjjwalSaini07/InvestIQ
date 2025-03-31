import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../common/Loader";
import Search from "./common/search/searchbar";
import TabsComponent from "./common/tabs/tabcomponent";
import PaginationControlled from "./common/pagination/pagination";

const ITEMS_PER_PAGE = 10;

function CryptoStockDashboard() {
  const [coins, setCoins] = useState([]);
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);

  const isMarketOpenHours = () => {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    const minutes = now.getMinutes();

    // Checking- Monday to Friday (day 1-5) and 9am-4pm (9-16)
    return day >= 1 && day <= 5 && hour >= 9 && hour < 16;
  };

  useEffect(() => {
    getData();
    getStocks();
    const intervalId = setInterval(() => {
      if (isMarketOpenHours()) {
        getStocks();
      }
    }, 5 * 60 * 1000);
    return () => clearInterval(intervalId);
  }, []);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      setCoins(response.data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      // setError("Failed to fetch Crypto data. Please try again later.");
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-3xl font-bold text-white mt-5 text-center mb-4">
          Sorry, Failed to fetch Crypto data, Please try again later...
        </h1>
        <Link to="/">
          <Button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600">
            Explore Home Page
          </Button>
        </Link>
      </div>;
    } finally {
      setLoading(false);
    }
  };

  const getStocks = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://invest-iq-backend.vercel.app/api/v1/fetchStocksData"
        // "http://localhost:5000/api/v1/fetchStocksData"
      );
      setStocks(response.data);
    } catch (error) {
      console.error("Error fetching stocks:", error);
      // setError("Failed to fetch stocks data. Please try again later...");
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-3xl font-bold text-white mt-5 text-center mb-4">
          Sorry, Failed to fetch stocks data, Please try again later...
        </h1>
        <Link to="/">
          <Button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600">
            Explore Home Page
          </Button>
        </Link>
      </div>
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.trim().toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.trim().toLowerCase())
  );

  const filteredStocks = stocks.filter(
    (stock) =>
      stock &&
      stock.ticker &&
      stock.ticker.toLowerCase().includes(search.trim().toLowerCase())
  );

  const displayedCoins = filteredCoins.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const displayedStocks = filteredStocks.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const totalPages = Math.ceil(filteredStocks.length / ITEMS_PER_PAGE);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  if (loading) return <Loader />;
  if (error) return <div>{error}</div>;

  return (
    <>
      <Search search={search} handleChange={handleChange} />
      <TabsComponent
        coins={displayedCoins}
        stocks={displayedStocks}
        setSearch={setSearch}
      />
      {!search && (
        <PaginationControlled
          page={page}
          handlePageChange={handlePageChange}
          totalPages={totalPages}
        />
      )}
    </>
  );
}

export default CryptoStockDashboard;
