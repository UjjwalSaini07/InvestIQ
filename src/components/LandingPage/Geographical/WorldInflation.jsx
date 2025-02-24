import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantile } from "d3-scale";
import { Tooltip as ReactTooltip } from "react-tooltip";
import CountryData from "./countryData.json";

const GEO_JSON_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export default function GlobalInflationMap() {
  const [tooltipContent, setTooltipContent] = useState("");

  const getCountryInflationData = (geoName) => {
    return CountryData.find((d) => d.country === geoName);
  };

  const colorScale = scaleQuantile()
    .domain(CountryData.map((d) => d.yearly_rate_pct))
    .range(["#593a1b", "#8c541c", "#593a1b", "#8c541c", "#cc7014", "#ff9100"]);

  return (
    <div className="bg-black text-white -mt-14 mb-14 flex flex-col items-center">
      <h1 className="text-5xl font-bold mt-8 tracking-wide">Global Economy</h1>
      <h2 className="text-2xl mt-4 tracking-wide">Economic Pulse: Inflation Map</h2>
      <div className="mt-6 flex-grow w-full h-full">
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
                        : "#555"
                    }
                    stroke="#000"
                    className="transition duration-300 hover:opacity-75 border hover:border-2 hover:border-white"
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
        <ReactTooltip id="map-tooltip" />
      </div>
    </div>
  );
}
