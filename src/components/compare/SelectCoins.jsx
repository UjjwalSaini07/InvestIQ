import React from "react";
import { Select, SelectTrigger, SelectContent, SelectItem } from "../../@/ui/select";
import SelectDays from "./SelectDays";

function SelectCoins({ allCoins, crypto1, crypto2, onCoinChange, days, handleDaysChange }) {
  const handleCoinChange = (value, isCrypto2) => {
    onCoinChange(value, isCrypto2);
  };

  return (
    <div className="flex flex-wrap justify-start items-center gap-6 m-6">
      <div className="flex items-center gap-4">
        <p className="m-0 text-white font-semibold">Crypto 1</p>
        <Select onValueChange={(value) => handleCoinChange(value, false)} value={crypto1}>
          <SelectTrigger
            className="w-48 h-10 text-white bg-[#2c2c2c] border border-gray-500 rounded-md pl-3 transition-all hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-accent-color"
          >
            {crypto1 ? allCoins.find(coin => coin.id === crypto1)?.name : "Select a crypto"}
          </SelectTrigger>
          <SelectContent className="bg-[#2c2c2c] rounded-md shadow-lg transition-all mt-1">
            {allCoins
              .filter((coin) => coin.id !== crypto2)
              .map((coin, i) => (
                <SelectItem
                  value={coin.id}
                  key={i}
                  className="text-white hover:bg-gray-500 transition-all p-2 rounded-md"
                >
                  {coin.name}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-4">
        <p className="m-0 text-white font-semibold">Crypto 2</p>
        <Select onValueChange={(value) => handleCoinChange(value, true)} value={crypto2}>
          <SelectTrigger
            className="w-48 h-10 text-white bg-[#2c2c2c] border border-gray-500 rounded-md pl-3 transition-all hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-accent-color"
          >
            {crypto2 ? allCoins.find(coin => coin.id === crypto2)?.name : "Select a crypto"}
          </SelectTrigger>
          <SelectContent className="bg-[#2c2c2c] rounded-md shadow-lg transition-all mt-1">
            {allCoins
              .filter((coin) => coin.id !== crypto1)
              .map((coin, i) => (
                <SelectItem
                  value={coin.id}
                  key={i}
                  className="text-white hover:bg-gray-500 transition-all p-2 rounded-md"
                >
                  {coin.name}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
      </div>

      <SelectDays days={days} handleDaysChange={handleDaysChange} noPTag={true} />
    </div>
  );
}

export default SelectCoins;
