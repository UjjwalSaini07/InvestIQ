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

const RecurringDepositCalculator = () => {
  const [depositAmount, setDepositAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [timePeriod, setTimePeriod] = useState("");
  const [maturityAmount, setMaturityAmount] = useState(null);

  const calculateMaturity = () => {
    const p = parseFloat(depositAmount);
    const r = parseFloat(interestRate) / 100 / 12;
    const n = parseFloat(timePeriod) * 12;
    const amount = p * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    setMaturityAmount(amount.toFixed(2));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Recurring Deposit Calculator</h2>
      <div className="space-y-4">
        <div>
          <Label className="font-bold flex item-center">
            Monthly Deposit Amount
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
                The fixed amount you deposit every month into the recurring deposit account.
              </TooltipContent>
            </Tooltip>
          </Label>
          <Input
            className="mt-2"
            type="number"
            placeholder="Enter deposit amount"
            value={depositAmount}
            onChange={(e) => setDepositAmount(e.target.value)}
          />
        </div>

        <div>
          <Label className="font-bold flex item-center">
            Interest Rate (%)
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
                The annual interest rate earned on the deposited amount, expressed as a percentage.
              </TooltipContent>
            </Tooltip>
          </Label>
          <Input
            className="mt-2"
            type="number"
            placeholder="Enter interest rate"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />
        </div>

        <div>
          <Label className="font-bold flex item-center">
            Time Period (Years)
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
                The duration for which you plan to keep the recurring deposit, in years.
              </TooltipContent>
            </Tooltip>
          </Label>
          <Input
            className="mt-2"
            type="number"
            placeholder="Enter time period"
            value={timePeriod}
            onChange={(e) => setTimePeriod(e.target.value)}
          />
        </div>

        <Button
          onClick={calculateMaturity}
          className="w-full mt-4 bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-[1.01]"
        >
          Calculate
        </Button>

        {maturityAmount && (
          <p className="mt-4 text-green-600 font-semibold text-lg bg-green-100 p-4 rounded-lg shadow-xl text-center">
            Maturity Amount: ₹{maturityAmount}
          </p>
        )}
      </div>
    </div>
  );
};

export default RecurringDepositCalculator;
