import { Button } from "../../@/ui/button";
import { cn } from "../../@/lib/utils";

export default function ToggleComponents({ priceType, handlePriceTypeChange }) {
  const toggleOptions = [
    { value: "prices", label: "Prices" },
    { value: "market_caps", label: "Market Cap" },
    { value: "total_volumes", label: "Total Volume" },
  ];

  return (
    <div className="flex justify-center items-center">
      <div className="flex border border-blue-500 rounded-full overflow-hidden shadow-md">
        {toggleOptions.map((option) => (
          <Button
            key={option.value}
            variant="ghost"
            className={cn(
              "px-6 py-2 text-md font-semibold tracking-wider transition-all",
              priceType === option.value
                ? "bg-blue-600 text-white transform scale-105"
                : "text-blue-600 hover:bg-blue-100 hover:text-blue-700"
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
