import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../common/Loader";
import Search from "./common/search/searchbar";
import TabsComponent from "./common/tabs/tabcomponent";
import PaginationComponent from "./common/pagination/pagination";

const ITEMS_PER_PAGE = 10;

function CryptoStockDashboard() {
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

export default CryptoStockDashboard;







// !Changed Code - But not fully Optimised
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import Loader from "../common/Loader";
// import Search from "./common/search/searchbar";
// import TabsComponent from "./common/tabs/tabcomponent";
// import PaginationControlled from "./common/pagination/pagination";
// import StocksInfo from "../webScrappedData/StocksData.json";

// const ITEMS_PER_PAGE = 10;

// function CryptoStockDashboard() {
//   const [coins, setCoins] = useState([]);
//   const [stocks, setStocks] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [search, setSearch] = useState("");
//   const [page, setPage] = useState(1);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     getData();
//     getStocks();
//   }, []);

//   const getData = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get(
//         "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
//       );
//       setCoins(response.data);
//     } catch (error) {
//       console.error("Error fetching data:", error.message);
//       setError("Failed to fetch data. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getStocks = async () => {
//     setLoading(true);
//     try {
//       setStocks(StocksInfo.StockData);
//     } catch (error) {
//       console.error("Error fetching data:", error.message);
//       setError("Failed to fetch data. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleChange = (e) => {
//     setSearch(e.target.value);
//     setPage(1); // Reset to the first page when searching
//   };

//   const filteredCoins = coins.filter(
//     (coin) =>
//       coin.name.toLowerCase().includes(search.trim().toLowerCase()) ||
//       coin.symbol.toLowerCase().includes(search.trim().toLowerCase())
//   );

//   const filteredStocks = stocks.filter(
//     (stock) =>
//       stock &&
//       stock.ticker &&
//       stock.ticker.toLowerCase().includes(search.trim().toLowerCase())
//   );

//   const displayedCoins = filteredCoins.slice(
//     (page - 1) * ITEMS_PER_PAGE,
//     page * ITEMS_PER_PAGE
//   );

//   const displayedStocks = filteredStocks.slice(
//     (page - 1) * ITEMS_PER_PAGE,
//     page * ITEMS_PER_PAGE
//   );

//   console.log("Filtered Stocks:", filteredStocks); // Logs filtered stocks after search
//   console.log("Displayed Stocks:", displayedStocks); // Logs paginated stocks for the current page

//   const totalPages = Math.ceil(filteredStocks.length / ITEMS_PER_PAGE);

//   const handlePageChange = (event, value) => {
//     setPage(value);
//   };

//   if (loading) return <Loader />;
//   if (error) return <div>{error}</div>;

//   return (
//     <>
//       <Search search={search} handleChange={handleChange} />
//       <TabsComponent
//         coins={displayedCoins}
//         stocks={displayedStocks} // Pass only paginated stocks here
//         setSearch={setSearch}
//       />
//       {!search && (
//         <PaginationControlled
//           page={page}
//           handlePageChange={handlePageChange}
//           totalPages={totalPages}
//         />
//       )}
//     </>
//   );
// }

// export default CryptoStockDashboard;