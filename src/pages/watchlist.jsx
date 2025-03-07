import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Helmet } from "react-helmet";
import TabsComponent from "../components/dashboard/common/tabs/tabcomponent";
import { get100Coins } from "../components/functions/get100Coins";
import { get100Stocks } from "../components/functions/get100Stocks";

function Watchlist() {
  const watchlist = JSON.parse(localStorage.getItem("watchlist"));
  const [coins, setCoins] = useState([]);
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (watchlist) {
      getData();
      getStocks();
    }
  }, []);

  const getData = async () => {
    const allCoins = await get100Coins();
    if (allCoins) {
      setCoins(allCoins.filter((coin) => watchlist.includes(coin.id)));
    }
  };
  const getStocks = async () => {
    const allStocks = await get100Stocks();
    if (allStocks) {
      setStocks(allStocks.filter((stock) => watchlist.includes(stock.ticker)));
    }
  };
  console.log(stocks);
  return (
    <>
      <Helmet>
        <title>Watchlist | InvestIQ</title>
      </Helmet>
      <div className="min-h-screen">
        {watchlist?.length > 0 ? (
          <div className="shadow-lg rounded-2xl p-6">
            <h1 className="text-2xl font-semibold text-center mb-4">
              Your Watchlist
            </h1>
            <TabsComponent coins={coins} stocks={stocks} />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-3xl font-bold text-white mt-5 text-center mb-4">
              Sorry, At that moment, No Items In The Watchlist.
            </h1>
            <Link to="/dashboard">
              <Button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600">
                Explore Coins, And add To watchlist
              </Button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default Watchlist;
