import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantile } from "d3-scale";
import { Tooltip } from "react-tooltip";

const GEO_JSON_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
const API_DATA = [
  { country: "Austria", yearly_rate_pct: 2.04 },
  { country: "Belgium", yearly_rate_pct: 4.08 },
  { country: "Canada", yearly_rate_pct: 1.9 },
  { country: "Chile", yearly_rate_pct: 4.94 },
  { country: "Estonia", yearly_rate_pct: 3.96 },
  { country: "Germany", yearly_rate_pct: 2.3 },
  { country: "Hungary", yearly_rate_pct: 5.45 },
  { country: "Iceland", yearly_rate_pct: 4.65 },
  { country: "Ireland", yearly_rate_pct: 1.93 },
  { country: "Luxembourg", yearly_rate_pct: 1.94 },
  { country: "Norway", yearly_rate_pct: 2.35 },
  { country: "Portugal", yearly_rate_pct: 2.54 },
  { country: "Slovakia", yearly_rate_pct: 3.91 },
  { country: "Sweden", yearly_rate_pct: 0.93 },
  { country: "Switzerland", yearly_rate_pct: 0.4 },
  { country: "The Netherlands", yearly_rate_pct: 3.34 },
];

const getCountryCode = (countryName) => {
  const countryMap = {
    Austria: "AUT",
    Belgium: "BEL",
    Canada: "CAN",
    Chile: "CHL",
    Estonia: "EST",
    Germany: "DEU",
    Hungary: "HUN",
    Iceland: "ISL",
    Ireland: "IRL",
    Luxembourg: "LUX",
    Norway: "NOR",
    Portugal: "PRT",
    Slovakia: "SVK",
    Sweden: "SWE",
    Switzerland: "CHE",
    "The Netherlands": "NLD",
  };
  return countryMap[countryName];
};

export default function GlobalInflationMap() {
  const [tooltipContent, setTooltipContent] = useState("");
  const colorScale = scaleQuantile()
    .domain(API_DATA.map((d) => d.yearly_rate_pct))
    .range(["#4D280B", "#8C400A", "#C76305", "#FF8C00", "#FF4500"]);

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
                const countryCode = geo.properties.ISO_A3;
                const countryData = API_DATA.find(
                  (d) => getCountryCode(d.country) === countryCode
                );

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={countryData ? colorScale(countryData.yearly_rate_pct) : "#333"}
                    stroke="#000"
                    className="transition duration-300 hover:opacity-75"
                    onMouseEnter={() => {
                      setTooltipContent(
                        countryData
                          ? `${geo.properties.NAME}: ${countryData.yearly_rate_pct}%`
                          : `${geo.properties.NAME}: No data`
                      );
                    }}
                    onMouseLeave={() => setTooltipContent("")}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
        <Tooltip>{tooltipContent}</Tooltip>
      </div>
    </div>
  );
}
