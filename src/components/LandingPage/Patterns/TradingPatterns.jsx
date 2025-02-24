import React, { useState, useEffect } from "react";
import Data from "./data.json";

import VolumeFootprint from "../../../assets/Landing/TradingPatterns/VolumeFootprint.jpg";
import TimePriceOpportunity from "../../../assets/Landing/TradingPatterns/TimePriceOpportunity.jpg";
import SessionVolumeProfile from "../../../assets/Landing/TradingPatterns/SessionVolumeProfile.jpg";
import Candles from "../../../assets/Landing/TradingPatterns/Candles.jpg";
import Bars from "../../../assets/Landing/TradingPatterns/Bars.jpg";
import VolumeCandles from "../../../assets/Landing/TradingPatterns/VolumeCandles.jpg";
import Range from "../../../assets/Landing/TradingPatterns/Range.jpg";
import HeikinAshi from "../../../assets/Landing/TradingPatterns/HeikinAshi.jpg";
import Renko from "../../../assets/Landing/TradingPatterns/Renko.jpg";
import LineBreak from "../../../assets/Landing/TradingPatterns/LineBreak.jpg";
import PointFigure from "../../../assets/Landing/TradingPatterns/Point&Figure.jpg";
import Kagi from "../../../assets/Landing/TradingPatterns/Kagi.jpg";
import Area from "../../../assets/Landing/TradingPatterns/Area.jpg";
import HLCArea from "../../../assets/Landing/TradingPatterns/HLCArea.jpg";
import Baseline from "../../../assets/Landing/TradingPatterns/Baseline.jpg";
import Line from "../../../assets/Landing/TradingPatterns/Line.jpg";
import StepLine from "../../../assets/Landing/TradingPatterns/StepLine.jpg";
import LineWithMarker from "../../../assets/Landing/TradingPatterns/LineWithMarker.jpg";
import HighLow from "../../../assets/Landing/TradingPatterns/HighLow.jpg";
import Columns from "../../../assets/Landing/TradingPatterns/Columns.jpg";
import HollowCandles from "../../../assets/Landing/TradingPatterns/HollowCandles.jpg";

const TradingPatterns = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const visibleItems = 7;
  const images = [
    VolumeFootprint,
    TimePriceOpportunity,
    SessionVolumeProfile,
    Candles,
    Bars,
    VolumeCandles,
    Range,
    HeikinAshi,
    Renko,
    LineBreak,
    PointFigure,
    Kagi,
    Area,
    HLCArea,
    Baseline,
    Line,
    StepLine,
    LineWithMarker,
    HighLow,
    Columns,
    HollowCandles,
  ];

  const handleNext = () => {
    if (currentIndex + 1 < Data.length) {
      if ((currentIndex + 1) % visibleItems === 0) {
        setStartIndex(startIndex + visibleItems);
      }
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      if (currentIndex % visibleItems === 0) {
        setStartIndex(startIndex - visibleItems);
      }
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleDirectSelect = (index) => {
    setCurrentIndex(index);
    const newStartIndex = Math.floor(index / visibleItems) * visibleItems;
    setStartIndex(newStartIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex + 1 < Data.length) {
        handleNext();
      } else {
        setCurrentIndex(0);
        setStartIndex(0);
      }
    }, 2500);
    return () => clearInterval(interval);
  }, [currentIndex, startIndex]);

  return (
    <div className="bg-black text-white flex items-center justify-center p-8">
      <div className="border border-grey-500 rounded-2xl w-[95%] h-[600px] relative bg-opacity-0">
        <div className="flex h-full">
          <div className="w-5/8 p-8 space-y-6 overflow-hidden">
            {Data.slice(startIndex, startIndex + visibleItems).map(
              (item, index) => (
                <div>
                  <button
                    key={index}
                    onClick={() => handleDirectSelect(index + startIndex)}
                    className={`w-full text-left transition-transform duration-500 ${
                      index + startIndex === currentIndex
                        ? "transform scale-105 text-white border-l-4 border-green-400 pl-4"
                        : "transform scale-100 text-gray-400"
                    }`}
                  >
                    <h2 className="text-5xl font-semibold">{item.title}</h2>
                    {index + startIndex === currentIndex && (
                      <p className="mt-2 text-2sm">{item.description}</p>
                    )}
                  </button>
                </div>
              )
            )}
          </div>
          <div className="w-2/3 flex items-center justify-center">
            <img
              src={images[currentIndex]}
              alt={Data[currentIndex].title}
              className="max-h-full w-auto"
            />
          </div>
        </div>
        <div className="absolute bottom-0 right-6 flex space-x-4 items-center">
          <button
            onClick={handlePrevious}
            className="w-14 h-14 flex items-center justify-center rounded-full text-xl font-bold"
          >
            {"<"}
          </button>
          <span className="text-xl font-bold">
            {currentIndex + 1}/{Data.length}
          </span>
          <button
            onClick={handleNext}
            className="w-14 h-14 flex items-center justify-center rounded-full text-xl font-bold"
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TradingPatterns;
