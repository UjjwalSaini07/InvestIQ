import React, { useState } from "react";
import { Label } from "../../ui/label";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@radix-ui/react-tooltip";
import { Info } from "lucide-react";

const NetProfitValueCalculator = () => {
  const [revenue, setRevenue] = useState("");
  const [expenses, setExpenses] = useState("");
  const [netProfit, setNetProfit] = useState(null);

  const calculateNetProfit = () => {
    const profit = revenue - expenses;
    setNetProfit(profit.toFixed(2));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Net Profit Value Calculator</h2>
      <div className="space-y-4">
        <div>
          <Label className="font-bold flex item-center">
            Total Revenue
            <Tooltip>
              <TooltipTrigger asChild>
                <Info
                  className="ml-2 text-gray-500 hover:text-white cursor-pointer"
                  size={16}
                />
              </TooltipTrigger>
              <TooltipContent
                side="right"
                align="center"
                className="ml-2 mb-1 bg-transparent border border-gray200 text-white p-2 rounded"
              >
                The total income generated from sales of goods or services before any expenses are deducted.
              </TooltipContent>
            </Tooltip>
          </Label>
          <Input
            className="mt-2"
            type="number"
            placeholder="Enter revenue"
            value={revenue}
            onChange={(e) => setRevenue(e.target.value)}
          />
        </div>

        <div>
          <Label className="font-bold flex item-center">
            Total Expenses
            <Tooltip>
              <TooltipTrigger asChild>
                <Info
                  className="ml-2 text-gray-500 hover:text-white cursor-pointer"
                  size={16}
                />
              </TooltipTrigger>
              <TooltipContent
                side="right"
                align="center"
                className="ml-2 mb-1 bg-transparent border border-gray200 text-white p-2 rounded"
              >
                The total costs incurred in running the business, including operating, production, and other expenses.
              </TooltipContent>
            </Tooltip>
          </Label>
          <Input
            className="mt-2"
            type="number"
            placeholder="Enter expenses"
            value={expenses}
            onChange={(e) => setExpenses(e.target.value)}
          />
        </div>

        <Button
          onClick={calculateNetProfit}
          className="w-full mt-4 bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-[1.01]"
        >
          Calculate
        </Button>

        {netProfit && (
          <p className="mt-4 text-green-600 font-semibold text-lg bg-green-100 p-4 rounded-lg shadow-xl text-center">
            Net Profit: ₹{netProfit}
          </p>
        )}
      </div>
    </div>
  );
};

export default NetProfitValueCalculator;
