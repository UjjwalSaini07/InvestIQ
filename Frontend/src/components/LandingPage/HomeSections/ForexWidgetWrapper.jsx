import React, { useEffect } from "react";
import Section1 from "../TradingWidgets/MarketOverview";
import Section2 from "../TradingWidgets/ForexCrossRates";
import Section3 from "../TradingWidgets/IndianGainerLosser";

const ForexWidgetWraper = () => {
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

  return (
    <div className="flex p-4">
      <div className="ml-8">
        <Section1 />
      </div>
      <div className="ml-4">
        <Section2 />
      </div>
      <div className="ml-4">
        <Section3 />
      </div>
    </div>
  );
};

export default ForexWidgetWraper;
