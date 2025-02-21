import React, { useState } from "react";
import Grid from "../grid/gridview";
import List from "../list/listview";

const Tabs = ({ coins, setSearch }) => {
  const [activeTab, setActiveTab] = useState("grid");

  const tabStyle = (tab) =>
    `px-4 py-2 text-sm font-semibold ${
      activeTab === tab
        ? "text-blue-600 border-b-2 border-blue-600"
        : "text-gray-400 hover:text-gray-300"
    }`;

  return (
    <div>
      <div className="border-b border-gray-700 flex justify-around">
        <button
          className={tabStyle("grid")}
          onClick={() => setActiveTab("grid")}
        >
          Grid
        </button>
        <button
          className={tabStyle("list")}
          onClick={() => setActiveTab("list")}
        >
          List
        </button>
      </div>

      {activeTab === "grid" && (
        <div className="flex flex-wrap justify-center items-start gap-4 w-full py-4">
          {coins.length > 0 ? (
            coins.map((coin, i) => (
              <Grid coin={coin} key={i} delay={(i % 4) * 0.2} />
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
      {activeTab === "list" && (
        <div className="w-11/12 mx-auto py-4">
          {coins.length > 0 ? (
            coins.map((coin, i) => (
              <List coin={coin} key={i} delay={(i % 8) * 0.2} />
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
    </div>
  );
};

export default Tabs;