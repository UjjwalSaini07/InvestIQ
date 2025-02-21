import React, { useState } from "react";
import GridCrypto from "../grid/gridview";
import ListCrypto from "../list/listview";
import GridStock from "../grid/gridview";
import ListStock from "../list/listview";

const Tabs = ({ coins, setSearch }) => {
  const [activeTab, setActiveTab] = useState("crypto");
  const [activeView, setActiveView] = useState("grid");

  const mainTabStyle = (tab) =>
  `px-8 py-3 text-base font-medium rounded-t-lg transition-all duration-300 ${
    activeTab === tab
      ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg"
      : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"
  }`;

  const viewTabStyle = (view) =>
    `px-4 py-2 text-sm font-semibold ${
      activeView === view
        ? "text-blue-600 border-b-2 border-blue-600"
        : "text-gray-400 hover:text-gray-300"
    }`;

  return (
    <div>
      <div className="border-b border-gray-700 flex justify-center gap-4 bg-black">
        <button
          className={mainTabStyle("crypto")}
          onClick={() => setActiveTab("crypto")}
        >
          Cryptocurrenies
        </button>
        <button
          className={mainTabStyle("stock")}
          onClick={() => setActiveTab("stock")}
        >
          Stock Market Shares
        </button>
      </div>

      <div className="border-b border-gray-700 flex justify-around mt-2">
        <button
          className={viewTabStyle("grid")}
          onClick={() => setActiveView("grid")}
        >
          Grid
        </button>
        <button
          className={viewTabStyle("list")}
          onClick={() => setActiveView("list")}
        >
          List
        </button>
      </div>

      <div className="py-4">
        {activeTab === "crypto" && activeView === "grid" && (
          <div className="flex flex-wrap justify-center items-start gap-4 w-full">
            {coins.length > 0 ? (
              coins.map((coin, i) => (
                <GridCrypto coin={coin} key={i} delay={(i % 4) * 0.2} />
              ))
            ) : (
              <div>
                <h1 className="text-center text-lg text-gray-300">
                  Sorry, Couldn't find the coin you're looking for 😞
                </h1>
                <div className="flex justify-center my-8">
                  <button
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700"
                    onClick={() => setSearch("")}
                  >
                    Clear Search
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === "crypto" && activeView === "list" && (
          <div className="w-11/12 mx-auto">
            {coins.length > 0 ? (
              coins.map((coin, i) => (
                <ListCrypto coin={coin} key={i} delay={(i % 8) * 0.2} />
              ))
            ) : (
              <div>
                <h1 className="text-center text-lg text-gray-300">
                  Sorry, Couldn't find the coin you're looking for 😞
                </h1>
                <div className="flex justify-center my-8">
                  <button
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700"
                    onClick={() => setSearch("")}
                  >
                    Clear Search
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === "stock" && activeView === "grid" && (
          <div className="flex flex-wrap justify-center items-start gap-4 w-full">
            {coins.length > 0 ? (
              coins.map((coin, i) => (
                <GridStock coin={coin} key={i} delay={(i % 4) * 0.2} />
              ))
            ) : (
              <div>
                <h1 className="text-center text-lg text-gray-300">
                  Sorry, Couldn't find the stock you're looking for 😞
                </h1>
                <div className="flex justify-center my-8">
                  <button
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700"
                    onClick={() => setSearch("")}
                  >
                    Clear Search
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === "stock" && activeView === "list" && (
          <div className="w-11/12 mx-auto">
            {coins.length > 0 ? (
              coins.map((coin, i) => (
                <ListStock coin={coin} key={i} delay={(i % 8) * 0.2} />
              ))
            ) : (
              <div>
                <h1 className="text-center text-lg text-gray-300">
                  Sorry, Couldn't find the stock you're looking for 😞
                </h1>
                <div className="flex justify-center my-8">
                  <button
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700"
                    onClick={() => setSearch("")}
                  >
                    Clear Search
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;