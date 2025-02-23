import React, { useState } from "react";
import VolumeFootprint from "../../assets/Landing/TradingPatterns/VolumeFootprint.svg";
import TimePriceOpportunity from "../../assets/Landing/TradingPatterns/TimePriceOpportunity.svg";
import SessionVolumeProfile from "../../assets/Landing/TradingPatterns/SessionVolumeProfile.svg";
import Candles from "../../assets/Landing/TradingPatterns/Candles.svg";
import Bars from "../../assets/Landing/TradingPatterns/Bars.svg";
import VolumeCandles from "../../assets/Landing/TradingPatterns/VolumeCandles.svg";
import Range from "../../assets/Landing/TradingPatterns/Range.svg";
import HeikinAshi from "../../assets/Landing/TradingPatterns/HeikinAshi.svg";
import Renko from "../../assets/Landing/TradingPatterns/Renko.svg";
import LineBreak from "../../assets/Landing/TradingPatterns/LineBreak.svg";
import PointFigure from "../../assets/Landing/TradingPatterns/Point&Figure.svg";
import Kagi from "../../assets/Landing/TradingPatterns/Kagi.svg";
import Area from "../../assets/Landing/TradingPatterns/Area.svg";
import HLCArea from "../../assets/Landing/TradingPatterns/HLCArea.svg";
import Baseline from "../../assets/Landing/TradingPatterns/Baseline.svg";
import Line from "../../assets/Landing/TradingPatterns/Line.svg";
import StepLine from "../../assets/Landing/TradingPatterns/StepLine.svg";
import LineWithMarker from "../../assets/Landing/TradingPatterns/LineWithMarker.svg";
import HighLow from "../../assets/Landing/TradingPatterns/HighLow.svg";
import Columns from "../../assets/Landing/TradingPatterns/Columns.svg";
import HollowCandles from "../../assets/Landing/TradingPatterns/HollowCandles.svg";

const data = [
  {
    title: "Volume Footprints",
    description:
      "Displays the distribution of trading volume at various price levels for each candlestick within a specified timeframe.",
    image: {VolumeFootprint},
  },
  {
    title: "Time Price Opportunity",
    description:
      "Enables traders to visualize price movements as the profile period progresses, illustrating the concentration of prices at specific levels during a given timeframe.",
    image: {TimePriceOpportunity},
  },
  {
    title: "Session Volume Profile",
    description:
      "Calculates volume data within a specified session or sub-session, allowing traders to analyze intraday volume activity for a particular segment of the session.",
    image: {SessionVolumeProfile},
  },
  {
    title: "Candles",
    description:
      "One of the most popular traditional charts on TradingView. Conveys the size of price movements using different colors.",
    image: {Candles},
  },
  {
    title: "Bars",
    description:
      "A chart, composed of multiple price bars, each visualizing the price movement of an asset or security over a specified time period.",
    image: {Bars},
  },
  {
    title: "Volume Candles",
    description:
      "This chart visualizes trading volume, allowing traders to assess the volume of trades using candlesticks.",
    image: {VolumeCandles},
  },
  {
    title: "Range",
    description: "Enables users to analyze the price movements of financial instruments with more clarity, minimizing market noise.",
    image: {Range},
  },
  {
    title: "Heikin Ashi",
    description: "Reduces market noise by smoothing significant price swings, making it easier to identify trend movements within the market.",
    image: {HeikinAshi},
  },
  {
    title: "Renko",
    description: "Allows users to detect major price moves within a Renko box, if they occurred.",
    image: {Renko},
  },
  {
    title: "Line break",
    description: "Focuses solely on price movements, ignoring time intervals within this Japanese chart style.",
    image: {LineBreak},
  },
  {
    title: "Point & figure",
    description: "Illustrates price movements as a lone metric, disregarding time intervals in their creation.",
    image: {PointFigure},
  },
  {
    title: "Kagi",
    description: "Utilizes vertical lines (green for up and red for down) connected by small horizontal lines to highlight significant movements in an asset's price.",
    image: {Kagi},
  },
  {
    title: "Area",
    description: "Visualizes data in a similar way to a line chart. An area chart plots and connects data with the area in between filled with color to convey information.",
    image: {Area},
  },
  {
    title: "HLC area",
    description: "Focused on three data-point areas — High-Low-Close (HLC) — to show how price changes over a period of time, allowing traders to disregard the open price value, which is less significant for analysis.",
    image: {HLCArea},
  },
  {
    title: "Baseline",
    description: "Explores price movements relative to a selected baseline, giving traders the tools needed to analyze price fluctuations.",
    image: {Baseline},
  },
  {
    title: "Line",
    description: "Connects data points with a single line to form a classic line chart.",
    image: {Line},
  },
  {
    title: "Step line",
    description: "Forms a series of steps using horizontal and vertical lines to highlight the irregularity of changes within the market.",
    image: {StepLine},
  },
  {
    title: "Line with markers",
    description: "Adds markers to the classic line charts to represent essential data points.",
    image: {LineWithMarker},
  },
  {
    title: "High-low",
    description: "Displays the range of prices from high to low on each bar.",
    image: {HighLow},
  },
  {
    title: "Columns",
    description: "The chart represents the change in the real price of an instrument through the use of columns.",
    image: {Columns},
  },
  {
    title: "Hollow candles",
    description: "This chart displays data as hollow candlesticks, similar to Japanese candlesticks, except their fill and color help to interpret data.",
    image: {HollowCandles},
  },
];

const TradingPatterns = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-black text-white flex items-center justify-center p-8">
      <div className="border border-green-500 rounded-2xl w-[95%] h-[600px] relative bg-opacity-0">
        <div className="flex h-full">
          <div className="p-8 space-y-6 overflow-hidden">
            {data.map((item, index) => (
              <div
                key={index}
                className={`transition-transform duration-500 ${
                  index === currentIndex
                    ? "transform scale-105 text-white border-l-4 border-green-400 pl-4"
                    : "transform scale-100 text-gray-400"
                }`}
              >
                <h2 className="text-3xl font-semibold">{item.title}</h2>
                {index === currentIndex && (
                  <p className="mt-2 text-sm">{item.description}</p>
                )}
              </div>
            ))}
          </div>
          <div className="w-2/3 flex items-center justify-center">
            <img
              src={data[currentIndex].image}
              alt={data[currentIndex].title}
              className="rounded-xl shadow-lg max-h-full w-auto border border-gray-700"
            />
          </div>
        </div>

        <div className="absolute bottom-6 right-6 flex space-x-4">
          <button
            onClick={handlePrevious}
            className="w-12 h-12 flex items-center justify-center rounded-full text-lg font-bold"
          >
            {"<"}
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 flex items-center justify-center rounded-full text-lg font-bold"
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TradingPatterns;
