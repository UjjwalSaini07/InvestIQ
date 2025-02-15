import React from "react";
import { Select, SelectTrigger, SelectContent, SelectItem } from "../../@/ui/select";
import SelectDays from "./SelectDays";

function SelectCoins({ allCoins, crypto1, crypto2, onCoinChange, days, handleDaysChange }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "1.5rem",
        margin: "1.5rem 3rem",
        flexWrap: "wrap",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <p style={{ margin: 0 }}>Crypto 1</p>
        <Select
          onValueChange={(value) => onCoinChange(value, false)}
          value={crypto1}
        >
          <SelectTrigger
            className="w-[12rem] h-[2.5rem] text-white"
            style={{
              backgroundColor: "transparent",
              border: "1px solid var(--white)",
              color: "var(--white)",
            }}
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
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <p style={{ margin: 0 }}>Crypto 2</p>
        <Select
          onValueChange={(value) => onCoinChange(value, true)}
          value={crypto2}
        >
          <SelectTrigger
            className="w-[12rem] h-[2.5rem] text-white"
            style={{
              backgroundColor: "transparent",
              border: "1px solid var(--white)",
              color: "var(--white)",
            }}
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
