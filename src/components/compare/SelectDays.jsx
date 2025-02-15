import React from "react";
import { Select, SelectTrigger, SelectContent, SelectItem } from "../../@/ui/select";

function SelectDays({ days, handleDaysChange, noPTag }) {
  return (
    <div
      className="select-days"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "0.5rem",
        marginBottom: noPTag ? "0" : "1.5rem",
      }}
    >
      {!noPTag && <p style={{ margin: 0 }}>Price change in</p>}
      <Select
        onValueChange={(value) => handleDaysChange(Number(value))}
        value={String(days)}
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
          <SelectItem value="7">7 Days</SelectItem>
          <SelectItem value="30">30 Days</SelectItem>
          <SelectItem value="60">60 Days</SelectItem>
          <SelectItem value="90">90 Days</SelectItem>
          <SelectItem value="120">120 Days</SelectItem>
          <SelectItem value="365">1 Year</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default SelectDays;
