import { useState } from "react";
import { Button } from "../../@/ui/button";
import { cn } from "../../@/lib/utils";

export default function ToggleComponents({ priceType, handlePriceTypeChange }) {
  const toggleOptions = [
    { value: "prices", label: "Prices" },
    { value: "market_caps", label: "Market Cap" },
    { value: "total_volumes", label: "Total Volume" },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          border: "1px solid #3b82f6",
          borderRadius: "50px",
          overflow: "hidden",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        }}
      >
        {toggleOptions.map((option) => (
          <Button
            key={option.value}
            variant="ghost"
            className={cn(
              "px-6 py-2 text-md font-semibold tracking-wider",
              priceType === option.value
                ? "bg-blue-600 text-white transition-all duration-300 ease-in-out transform" 
                : "text-blue-600 hover:bg-blue-200 hover:text-blue-700 transition-all duration-300"
            )}
            onClick={() => handlePriceTypeChange(option.value)}
          >
            {option.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
