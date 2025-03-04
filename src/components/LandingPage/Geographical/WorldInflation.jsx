import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantile } from "d3-scale";
import { Tooltip as ReactTooltip } from "react-tooltip";
import CountryData from "./countryData.json";

const GEO_JSON_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const LegendCheckBox = () => {
  const legendItems = [
    { label: "Less than 0%", color: "bg-[#33261a]" },
    { label: "0-3%", color: "bg-[#593a1b]" },
    { label: "3-7%", color: "bg-[#8c541c]" },
    { label: "7-12%", color: "bg-[#cc7014]" },
    { label: "12-25%", color: "bg-[#e57e17]" },
    { label: "More than 25%", color: "bg-[#ff9100]" },
  ];

  return (
    <div className="flex justify-center items-center -mb-4">
      <div className="flex text-center space-x-4 bg-black p-4 rounded-md">
        {legendItems.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div className={`w-4 h-4 ${item.color} rounded-sm`}></div>
            <span className="text-sm text-gray-400">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function GlobalInflationMap() {
  const [tooltipContent, setTooltipContent] = useState("");

  const getCountryInflationData = (geoName) => {
    return CountryData.find((d) => d.country === geoName);
  };

  const colorScale = scaleQuantile()
    .domain(CountryData.map((d) => d.yearly_rate_pct))
    .range(["#33261a", "#593a1b", "#8c541c", "#cc7014", "#e57e17", "#ff9100"]);

  return (
    <div className="bg-black text-white -mt-14 mb-14 flex flex-col items-center">
      <h1 className="text-5xl font-bold mt-8 tracking-wide">Global Economy</h1>
      <h2 className="text-2xl mt-4 tracking-wide">Economic Pulse: Inflation Map</h2>
      <div className="mt-6 flex-grow w-full h-full relative">
        <ComposableMap
          projection="geoMercator"
          className="w-full h-full"
          style={{
            width: "100%",
            height: "calc(100vh - 100px)",
          }}
        >
          <Geographies geography={GEO_JSON_URL}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const geoName = geo.properties.name;
                const countryData = getCountryInflationData(geoName);

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={
                      countryData
                        ? colorScale(countryData.yearly_rate_pct)
                        : "#2e2e2e"
                    }
                    stroke="#000"
                    className="transition duration-300 hover:border-2 hover:border-white hover:opacity-90"
                    style={{
                      default: { outline: "none" },
                      hover: { outline: "none" },
                      pressed: { outline: "none" },
                    }}
                    data-tooltip-id="map-tooltip"
                    data-tooltip-content={
                      countryData
                        ? `${geoName}: ${countryData.yearly_rate_pct}%`
                        : `${geoName}: No data`
                    }
                    onMouseEnter={() =>
                      setTooltipContent(
                        countryData
                          ? `${geoName}: ${countryData.yearly_rate_pct}%`
                          : `${geoName}: No data`
                      )
                    }
                    onMouseLeave={() => setTooltipContent("")}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
        <LegendCheckBox/>
        <ReactTooltip
          id="map-tooltip"
          place="bottom"
          effect="solid"
          className="bg-gray-800 text-white rounded-md px-2 py-1 text-sm"
          arrowColor="#000"
        />
      </div>
    </div>
  );
}
