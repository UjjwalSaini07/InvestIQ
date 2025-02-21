import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../common/Loader";
import Search from "./common/search/searchbar";
import TabsComponent from "./common/tabs/tabcomponent";
import PaginationComponent from "./common/pagination/pagination";

const ITEMS_PER_PAGE = 10;

function CryptoDashboard() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      setCoins(response.data);
      setPaginatedCoins(response.data.slice(0, ITEMS_PER_PAGE));
    } catch (error) {
      console.error("Error fetching data:", error.message);
      setError("Failed to fetch data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.trim().toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.trim().toLowerCase())
  );

  const handlePageChange = (event, value) => {
    setPage(value);
    const initialCount = (value - 1) * ITEMS_PER_PAGE;
    setPaginatedCoins(coins.slice(initialCount, initialCount + ITEMS_PER_PAGE));
  };

  if (loading) return <Loader />;
  if (error) return <div>{error}</div>;

  return (
    <>
      <Search search={search} handleChange={handleChange} />
      <TabsComponent
        coins={search ? filteredCoins : paginatedCoins}
        setSearch={setSearch}
      />
      {!search && (
        <PaginationComponent
          page={page}
          handlePageChange={handlePageChange}
        />
      )}
    </>
  );
}

export default CryptoDashboard;
