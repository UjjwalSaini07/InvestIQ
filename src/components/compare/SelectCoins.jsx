import React from "react";
import { Select, SelectTrigger, SelectContent, SelectItem } from "../../@/ui/select";
import SelectDays from "./SelectDays";

function SelectCoins({ allCoins, crypto1, crypto2, onCoinChange, days, handleDaysChange }) {
  const handleCoinChange = (coinId, isCrypto2) => {
    onCoinChange(coinId, isCrypto2);
  };

  const getCoinName = (coinId) => {
    const coin = allCoins.find((coin) => coin.id === coinId);
    return coin ? coin.name : "Select a crypto";
  };

  return (
    <div className="flex flex-wrap justify-center items-center gap-6 m-6">
      <div className="flex items-center gap-4">
        <p className="m-0 text-white font-semibold">Crypto 1</p>
        <Select
          value={crypto1}
          onValueChange={(value) => handleCoinChange(value, false)}
        >
          <SelectTrigger className="w-48 h-10 text-white bg-[#2c2c2c] border border-gray-500 rounded-md pl-3 transition-all hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            {getCoinName(crypto1)}
          </SelectTrigger>
          <SelectContent className="bg-[#2c2c2c] rounded-md shadow-lg mt-1">
            {allCoins
              .filter((coin) => coin.id !== crypto2)
              .map((coin) => (
                <SelectItem
                  key={coin.id}
                  value={coin.id}
                  className="text-white hover:bg-gray-500 p-2 rounded-md"
                >
                  {coin.name}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-4">
        <p className="m-0 text-white font-semibold">Crypto 2</p>
        <Select
          value={crypto2}
          onValueChange={(value) => handleCoinChange(value, true)}
        >
          <SelectTrigger className="w-48 h-10 text-white bg-[#2c2c2c] border border-gray-500 rounded-md pl-3 transition-all hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            {getCoinName(crypto2)}
          </SelectTrigger>
          <SelectContent className="bg-[#2c2c2c] rounded-md shadow-lg mt-1">
            {allCoins
              .filter((coin) => coin.id !== crypto1)
              .map((coin) => (
                <SelectItem
                  key={coin.id}
                  value={coin.id}
                  className="text-white hover:bg-gray-500 p-2 rounded-md"
                >
                  {coin.name}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
      </div>

      <SelectDays days={days} handleDaysChange={handleDaysChange} noPTag={true}/>
    </div>
  );
}

export default SelectCoins;
