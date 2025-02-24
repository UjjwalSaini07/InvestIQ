import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantile } from "d3-scale";
import { Tooltip as ReactTooltip } from "react-tooltip";

const GEO_JSON_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
const API_DATA = [
  { country: "United States of America", yearly_rate_pct: 3 },
  { country: "Canada", yearly_rate_pct: 1.9 },
  { country: "Mexico", yearly_rate_pct: 4.5 },
  { country: "Belize", yearly_rate_pct: 3.1 },
  { country: "Costa Rica", yearly_rate_pct: 4.0 },
  { country: "El Salvador", yearly_rate_pct: 7.3 },
  { country: "Guatemala", yearly_rate_pct: 5.1 },
  { country: "Honduras", yearly_rate_pct: 6.3 },
  { country: "Panama", yearly_rate_pct: 2.6 },
  { country: "Cuba", yearly_rate_pct: 70.0 },
  { country: "Jamaica", yearly_rate_pct: 7.8 },
  { country: "Haiti", yearly_rate_pct: 47.0 },
  { country: "Dominican Republic", yearly_rate_pct: 7.8 },
  { country: "Brazil", yearly_rate_pct: 5.8 },
  { country: "Argentina", yearly_rate_pct: 48.5 },
  { country: "Chile", yearly_rate_pct: 4.0 },
  { country: "Colombia", yearly_rate_pct: 6.5 },
  { country: "Ecuador", yearly_rate_pct: 3.3 },
  { country: "Paraguay", yearly_rate_pct: 3.8 },
  { country: "Uruguay", yearly_rate_pct: 9.0 },
  { country: "Peru", yearly_rate_pct: 4.1 },
  { country: "Venezuela", yearly_rate_pct: 200.0 },
  { country: "Bolivia", yearly_rate_pct: 2.7 },
  { country: "Iceland", yearly_rate_pct: 4.65 },
  { country: "Ireland", yearly_rate_pct: 1.93 },
  { country: "United Kingdom", yearly_rate_pct: 3.2 },
  { country: "Portugal", yearly_rate_pct: 2.54 },
  { country: "Spain", yearly_rate_pct: "" },
  { country: "France", yearly_rate_pct: "" },
  { country: "Belgium", yearly_rate_pct: 4.08 },
  { country: "Netherlands", yearly_rate_pct: 3.34 },
  { country: "Luxembourg", yearly_rate_pct: 1.94 },
  { country: "Germany", yearly_rate_pct: 2.3 },
  { country: "Switzerland", yearly_rate_pct: 0.4 },
  { country: "Austria", yearly_rate_pct: 2.04 },
  { country: "Italy", yearly_rate_pct: "" },
  { country: "Malta", yearly_rate_pct: "" },
  { country: "Denmark", yearly_rate_pct: "" },
  { country: "Norway", yearly_rate_pct: 2.35 },
  { country: "Sweden", yearly_rate_pct: 0.93 },
  { country: "Finland", yearly_rate_pct: "" },
  { country: "Estonia", yearly_rate_pct: 3.96 },
  { country: "Latvia", yearly_rate_pct: "" },
  { country: "Lithuania", yearly_rate_pct: "" },
  { country: "Poland", yearly_rate_pct: "" },
  { country: "Czech Republic", yearly_rate_pct: "" },
  { country: "Slovakia", yearly_rate_pct: 3.91 },
  { country: "Hungary", yearly_rate_pct: 5.45 },
  { country: "Slovenia", yearly_rate_pct: "" },
  { country: "Croatia", yearly_rate_pct: "" },
  { country: "Serbia", yearly_rate_pct: "" },
  { country: "Bosnia and Herzegovina", yearly_rate_pct: "" },
  { country: "Montenegro", yearly_rate_pct: "" },
  { country: "North Macedonia", yearly_rate_pct: "" },
  { country: "Greece", yearly_rate_pct: "" },
  { country: "Turkey", yearly_rate_pct: 24.5 },
  { country: "Russia", yearly_rate_pct: 6.2 },
  { country: "Ukraine", yearly_rate_pct: "" },
  { country: "Belarus", yearly_rate_pct: "" },
  { country: "Moldova", yearly_rate_pct: "" },
  { country: "Romania", yearly_rate_pct: "" },
  { country: "Bulgaria", yearly_rate_pct: "" },
  { country: "Albania", yearly_rate_pct: "" },
  { country: "Kosovo", yearly_rate_pct: "" },
  { country: "Cyprus", yearly_rate_pct: "" },
  { country: "Israel", yearly_rate_pct: 1.8 },
  { country: "Egypt", yearly_rate_pct: 8.3 },
  { country: "Libya", yearly_rate_pct: "" },
  { country: "Tunisia", yearly_rate_pct: "" },
  { country: "Algeria", yearly_rate_pct: 9.4 },
  { country: "Morocco", yearly_rate_pct: 5.2 },
  { country: "Nigeria", yearly_rate_pct: 15.7 },
  { country: "Ghana", yearly_rate_pct: 28.0 },
  { country: "Ivory Coast", yearly_rate_pct: 4.5 },
  { country: "Cameroon", yearly_rate_pct: 6.0 },
  { country: "Senegal", yearly_rate_pct: 4.8 },
  { country: "Burkina Faso", yearly_rate_pct: 6.0 },
  { country: "Liberia", yearly_rate_pct: 7.4 },
  { country: "Sierra Leone", yearly_rate_pct: "" },
  { country: "Guinea", yearly_rate_pct: "" },
  { country: "Ethiopia", yearly_rate_pct: 35.0 },
  { country: "Kenya", yearly_rate_pct: 6.1 },
  { country: "Uganda", yearly_rate_pct: 6.8 },
  { country: "Tanzania", yearly_rate_pct: 4.4 },
  { country: "Rwanda", yearly_rate_pct: 9.3 },
  { country: "Zambia", yearly_rate_pct: 10.3 },
  { country: "Zimbabwe", yearly_rate_pct: 97.0 },
  { country: "South Africa", yearly_rate_pct: 5.0 },
  { country: "Namibia", yearly_rate_pct: 6.1 },
  { country: "Botswana", yearly_rate_pct: 9.5 },
  { country: "Angola", yearly_rate_pct: 22.0 },
  { country: "Mozambique", yearly_rate_pct: 10.8 },
  { country: "Madagascar", yearly_rate_pct: 10.2 },
  { country: "Malawi", yearly_rate_pct: 25.0 },
  { country: "Saudi Arabia", yearly_rate_pct: 2.3 },
  { country: "United Arab Emirates", yearly_rate_pct: 2.0 },
  { country: "Qatar", yearly_rate_pct: 1.9 },
  { country: "Pakistan", yearly_rate_pct: 8.0 },
  { country: "India", yearly_rate_pct: 3.34 },
  { country: "Bangladesh", yearly_rate_pct: 5.6 },
  { country: "Sri Lanka", yearly_rate_pct: 14.0 },
  { country: "China", yearly_rate_pct: 2.1 },
  { country: "Vietnam", yearly_rate_pct: 2.8 },
  { country: "Philippines", yearly_rate_pct: 3.8 },
  { country: "Indonesia", yearly_rate_pct: 3.3 },
  { country: "Malaysia", yearly_rate_pct: 2.1 },
  { country: "Thailand", yearly_rate_pct: 2.9 },
  { country: "South Korea", yearly_rate_pct: 2.6 },
  { country: "Japan", yearly_rate_pct: 0.9 },
  { country: "Australia", yearly_rate_pct: 3.1 },
  { country: "New Zealand", yearly_rate_pct: 3.2 },
];


const getCountryInflationData = (geoName) => {
  const countryMap = {};

  const countryName = countryMap[geoName] || geoName;
  return API_DATA.find((d) => d.country === countryName);
};

export default function GlobalInflationMap() {
  const [tooltipContent, setTooltipContent] = useState("");

  const colorScale = scaleQuantile()
    .domain(API_DATA.map((d) => d.yearly_rate_pct))
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
                    className="transition duration-300 hover:opacity-75 border hover:border-white"
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
