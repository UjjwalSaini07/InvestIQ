import React, { useEffect } from "react";
import Section1 from "../StockSlider/Cap1Stock";
import Section2 from "../StockSlider/Cap2Stock";
import Section3 from "../FeedSection/TradeNews";
import Section4 from "../FeedSection/TopStories";
import Section5 from "../Geographical/WorldInflation";
import Section6 from "./WidgetWraper";
import Section7 from "../gainerloser/CryptoGainerLoser";
import Section8 from "../gainerloser/StockGainerLoser";
import Section9 from "../TradingWidgets/ForexHeatmap";
import Section10 from "../Patterns/TradingPatterns";
import Section11 from "../TradingWidgets/SymbolOverviewChart";
import Section12 from "../TradingWidgets/RealtimeData";

const Home4 = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <Section1 />
      <Section2 />
      <div className="h-auto mb-14">
        <Section3 />
        <Section4 />
      </div>
      <Section5 />
      <Section6 />
      <div>
        <h1 className="text-5xl text-center mt-6 mb-4 font-bold tracking-wide">
          Gainer & Loser Real-Time Data
        </h1>
        <Section7 />
        <Section8 />
      </div>
      <div>
        <h1 className="text-5xl text-center font-bold tracking-wide">
          Forex Heat Map Trading
        </h1>
        <Section9 />
      </div>
      <Section10 />
      <div>
        <h1 className="text-5xl text-center font-bold tracking-wide mb-8 -mt-5">
          Real-Time Data Triggering
        </h1>
        <div className="h-auto mb-14 flex flex-col md:flex-row justify-between">
          <Section11 />
          <Section12 />
        </div>
      </div>
    </div>
  );
};

export default Home4;
