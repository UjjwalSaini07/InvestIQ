import * as React from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Grid from "../grid/gridview";
import List from "../list/listview";
import { Button } from "../../../../@/ui/button";

export default function TabsComponent({ coins, setSearch }) {
  const [value, setValue] = React.useState("grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabStyle = {
    color: "#ffffff",
    "& .Mui-selected": {
      color: "#2563EB !important", // Tailwind blue-600
    },
    fontFamily: "Inter, sans-serif",
    fontWeight: 600,
    textTransform: "capitalize",
  };

  return (
    <TabContext value={value}>
      <div className="border-b border-gray-300">
        <TabList onChange={handleChange} variant="fullWidth">
          <Tab label="Grid" value="grid" sx={tabStyle} />
          <Tab label="List" value="list" sx={tabStyle} />
        </TabList>
      </div>
      <TabPanel value="grid">
        <div className="flex flex-wrap justify-center items-start gap-4 w-full">
          {coins.length > 0 ? (
            coins.map((coin, i) => (
              <Grid coin={coin} key={i} delay={(i % 4) * 0.2} />
            ))
          ) : (
            <div>
              <h1 className="text-center">
                Sorry, Couldn't find the coin you're looking for 😞
              </h1>
              <div className="flex justify-center my-8">
                <Button text="Clear Search" onClick={() => setSearch("")} />
              </div>
            </div>
          )}
        </div>
      </TabPanel>
      <TabPanel value="list">
        <div className="w-11/12 mx-auto">
          {coins.length > 0 ? (
            coins.map((coin, i) => (
              <List coin={coin} key={i} delay={(i % 8) * 0.2} />
            ))
          ) : (
            <div>
              <h1 className="text-center">
                Sorry, Couldn't find the coin you're looking for 😞
              </h1>
              <div className="flex justify-center my-8">
                <Button text="Clear Search" onClick={() => setSearch("")} />
              </div>
            </div>
          )}
        </div>
      </TabPanel>
    </TabContext>
  );
}
