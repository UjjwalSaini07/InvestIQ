import React from "react";
import { Select, SelectTrigger, SelectContent, SelectItem } from "../../@/ui/select";

function SelectDays({ days, handleDaysChange, noPTag }) {
  const options = [
    { value: "7", label: "7 Days" },
    { value: "28", label: "28 Days" },
    { value: "60", label: "60 Days" },
    { value: "90", label: "90 Days" },
    { value: "120", label: "120 Days" },
    { value: "365", label: "1 Year" },
  ];

  return (
    <div
      className="select-days"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "1rem",
        marginBottom: noPTag ? "0" : "1.5rem",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {!noPTag && (
        <p
          style={{
            margin: 0,
            color: "#ccc",
            fontSize: "16px",
            fontWeight: "600",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
          }}
        >
          Price change in
        </p>
      )}

      <Select
        onValueChange={(value) => handleDaysChange(Number(value))}
        value={String(days)}
      >
        <SelectTrigger
          className="w-[12rem] h-[2.5rem] flex items-center justify-between text-white bg-[rgba(255,255,255,0.1)] border-[1px] border-[rgba(255,255,255,0.3)] rounded-[8px] px-[1rem] py-[0.5rem] text-[16px] transition-all duration-300 cursor-pointer hover:bg-[rgba(255,255,255,0.2)] hover:border-[rgba(255,255,255,0.5)]"
        >
          <span>
            {options.find((item) => item.value === String(days))?.label ||
              "Select Days"}
          </span>
        </SelectTrigger>

        <SelectContent
          className="bg-[#2c2c2c] rounded-[8px] shadow-lg p-[0.5rem]"
        >
          {options.map((item) => (
            <SelectItem
              key={item.value}
              value={item.value}
              className={`text-white px-[1rem] py-[0.5rem] rounded-[4px] transition-all duration-300 cursor-pointer hover:bg-[rgba(255,255,255,0.2)] ${
                String(days) === item.value ? "bg-[rgba(255,255,255,0.2)]" : ""
              }`}
            >
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default SelectDays;
