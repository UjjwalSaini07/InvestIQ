import React from "react";
import { Select, SelectTrigger, SelectContent, SelectItem } from "../../@/ui/select";
import SelectDays from "./SelectDays";

function SelectCoins({ allCoins, crypto1, crypto2, onCoinChange, days, handleDaysChange }) {
  return (
    <div className="flex flex-wrap justify-start items-center gap-6 m-6">
      <div className="flex items-center gap-4">
        <p className="m-0 text-white font-semibold">Crypto 1</p>
        <Select onValueChange={(value) => onCoinChange(value, false)} value={crypto1}>
          <SelectTrigger
            className="w-48 h-10 text-white border border-white rounded-md pl-3 transition-all hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-accent-color"
          />
          <SelectContent>
            {allCoins
              .filter((coin) => coin.id !== crypto2)
              .map((coin, i) => (
                <SelectItem value={coin.id} key={i}>
                  {coin.name}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-4">
        <p className="m-0 text-white font-semibold">Crypto 2</p>
        <Select onValueChange={(value) => onCoinChange(value, true)} value={crypto2}>
          <SelectTrigger
            className="w-48 h-10 text-white border border-white rounded-md pl-3 transition-all hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-accent-color"
          />
          <SelectContent>
            {allCoins
              .filter((coin) => coin.id !== crypto1)
              .map((coin, i) => (
                <SelectItem value={coin.id} key={i}>
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

