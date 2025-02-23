import React, { useState } from "react";

const data = [
  {
    title: "Candles",
    description:
      "One of the most popular traditional charts on TradingView. Conveys the size of price movements using different colors.",
    image: "/path/to/image1.png", // Replace with actual image path
  },
  {
    title: "Bars",
    description:
      "A chart, composed of multiple price bars, each visualizing the price movement of an asset or security over a specified time period.",
    image: "/path/to/image2.png", // Replace with actual image path
  },
  {
    title: "Volume Candles",
    description:
      "This chart visualizes trading volume, allowing traders to assess the volume of trades using candlesticks.",
    image: "/path/to/image3.png", // Replace with actual image path
  },
  {
    title: "Range",
    description: "Enables users to analyze the price movements of financial instruments with more clarity, minimizing market noise.",
    image: "/path/to/image4.png", // Replace with actual image path
  },
  {
    title: "Heikin Ashi",
    description: "Reduces market noise by smoothing significant price swings, making it easier to identify trend movements within the market.",
    image: "/path/to/image4.png", // Replace with actual image path
  },
  {
    title: "Renko",
    description: "Allows users to detect major price moves within a Renko box, if they occurred.",
    image: "/path/to/image4.png", // Replace with actual image path
  },
  {
    title: "Line break",
    description: "Focuses solely on price movements, ignoring time intervals within this Japanese chart style.",
    image: "/path/to/image4.png", // Replace with actual image path
  },
  {
    title: "Point & figure",
    description: "Illustrates price movements as a lone metric, disregarding time intervals in their creation.",
    image: "/path/to/image4.png", // Replace with actual image path
  },
  {
    title: "Kagi",
    description: "Utilizes vertical lines (green for up and red for down) connected by small horizontal lines to highlight significant movements in an asset's price.",
    image: "/path/to/image4.png", // Replace with actual image path
  },
  {
    title: "Area",
    description: "Visualizes data in a similar way to a line chart. An area chart plots and connects data with the area in between filled with color to convey information.",
    image: "/path/to/image4.png", // Replace with actual image path
  },
  {
    title: "HLC area",
    description: "Focused on three data-point areas — High-Low-Close (HLC) — to show how price changes over a period of time, allowing traders to disregard the open price value, which is less significant for analysis.",
    image: "/path/to/image4.png", // Replace with actual image path
  },
  {
    title: "Baseline",
    description: "Explores price movements relative to a selected baseline, giving traders the tools needed to analyze price fluctuations.",
    image: "/path/to/image4.png", // Replace with actual image path
  },
  {
    title: "Line",
    description: "Connects data points with a single line to form a classic line chart.",
    image: "/path/to/image4.png", // Replace with actual image path
  },
  {
    title: "Step line",
    description: "Forms a series of steps using horizontal and vertical lines to highlight the irregularity of changes within the market.",
    image: "/path/to/image4.png", // Replace with actual image path
  },
  {
    title: "Line with markers",
    description: "Adds markers to the classic line charts to represent essential data points.",
    image: "/path/to/image4.png", // Replace with actual image path
  },
  {
    title: "High-low",
    description: "Displays the range of prices from high to low on each bar.",
    image: "/path/to/image4.png", // Replace with actual image path
  },
  {
    title: "Columns",
    description: "The chart represents the change in the real price of an instrument through the use of columns.",
    image: "/path/to/image4.png", // Replace with actual image path
  },
  {
    title: "Hollow candles",
    description: "This chart displays data as hollow candlesticks, similar to Japanese candlesticks, except their fill and color help to interpret data.",
    image: "/path/to/image4.png", // Replace with actual image path
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
    <div className="bg-black text-white min-h-screen flex items-center justify-center p-8">
      {/* Transparent Container */}
      <div className="border border-green-400 rounded-xl w-[80%] h-[600px] relative bg-opacity-0">
        <div className="flex h-full">
          {/* Left Vertical Text Section */}
          <div className="w-1/3 p-6 space-y-6 overflow-hidden">
            {data.map((item, index) => (
              <div
                key={index}
                className={`transition-transform duration-500 ${
                  index === currentIndex
                    ? "transform scale-105 text-white border-l-4 border-green-400 pl-4"
                    : "transform scale-100 text-gray-400"
                }`}
              >
                <h2 className="text-2xl font-semibold">{item.title}</h2>
                {index === currentIndex && (
                  <p className="mt-2 text-sm">{item.description}</p>
                )}
              </div>
            ))}
          </div>

          {/* Right Image Section */}
          <div className="w-2/3 flex items-center justify-center">
            <img
              src={data[currentIndex].image}
              alt={data[currentIndex].title}
              className="rounded-xl shadow-lg max-h-full w-auto border border-gray-700"
            />
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute bottom-6 right-6 flex space-x-4">
          <button
            onClick={handlePrevious}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 shadow-lg text-lg font-bold"
          >
            {"<"}
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 shadow-lg text-lg font-bold"
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TradingPatterns;
