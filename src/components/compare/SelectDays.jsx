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
          className="w-[12rem] h-[2.5rem] text-white"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            borderRadius: "8px",
            color: "white",
            padding: "0.5rem 1rem",
            fontSize: "16px",
            transition: "background-color 0.3s ease, border-color 0.3s ease",
            cursor: "pointer",
          }}
        >
          <span>Select Days</span>
        </SelectTrigger>

        <SelectContent
          style={{
            backgroundColor: "#2c2c2c",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.25)",
            padding: "0.5rem",
          }}
        >
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
