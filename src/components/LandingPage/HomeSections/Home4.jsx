import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Section1 from "../StockSlider/Cap1Stock";
import Section2 from "../StockSlider/Cap2Stock";
import Section3 from "../FeedSection/TradeNews";
import Section4 from "../FeedSection/TopStories";
import Section5 from "../Geographical/WorldInflation";
import Section6 from "./WidgetWraper";
import Section7 from "../gainerloser/CryptoGainerLoser";
import Section8 from "../gainerloser/StockGainerLoser";
import Section9 from "../TradingWidgets/ForexHeatmap";
import Section10 from "../HomeSections/ForexWidgetWrapper";
import Section11 from "../Patterns/TradingPatterns";
import Section12 from "../TradingWidgets/SymbolOverviewChart";
import Section13 from "../TradingWidgets/RealtimeData";

const Home4 = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    AOS.init({
      offset: 100,
      delay: 5,
      duration: 2000,
      easing: "ease",
      once: true,
    });
  }, []);

  return (
    <div>
      <div data-aos="zoom-in-up">
        <Section1 />
      </div>
      <div data-aos="zoom-in-up">
        <Section2 />
      </div>
      <div className="h-auto mb-14">
        <div data-aos="fade-left">
          <Section3 />
        </div>
        <div data-aos="zoom-in-up">
          <Section4 />
        </div>
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
      <div>
        <h1 className="text-5xl mt-4 mb-2 text-center font-bold tracking-wide">
          Forex and BSE Market Data
        </h1>
        <Section10 />
      </div>
      <Section11 />
      <div>
        <h1 className="text-5xl text-center font-bold tracking-wide mb-8 -mt-5">
          Real-Time Data Triggering
        </h1>
        <div className="h-auto mb-14 flex flex-col md:flex-row justify-between">
          <Section12 />
          <Section13 />
        </div>
      </div>
    </div>
  );
};

export default Home4;
