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

const GSTCalculator = () => {
  const [amount, setAmount] = useState("");
  const [gstRate, setGstRate] = useState("");
  const [result, setResult] = useState(null);

  const calculateGST = () => {
    const gstAmount = (amount * gstRate) / 100;
    const totalAmount = parseFloat(amount) + gstAmount;
    setResult({ gstAmount, totalAmount });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">GST Calculator</h2>
      <div className="space-y-4">
        <div>
          <Label className="font-bold flex item-center">
            Amount
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
                The total amount of the goods or services before the Goods and Services Tax (GST) is applied.
              </TooltipContent>
            </Tooltip>
          </Label>
          <Input
            className="mt-2"
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div>
          <Label className="font-bold flex item-center">
            GST Rate (%)
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
                The percentage rate at which GST is applied to the total amount of goods or services.
              </TooltipContent>
            </Tooltip>
          </Label>
          <Input
            className="mt-2"
            type="number"
            placeholder="Enter GST rate"
            value={gstRate}
            onChange={(e) => setGstRate(e.target.value)}
          />
        </div>

        <Button
          onClick={calculateGST}
          className="w-full mt-4 bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-[1.01]"
        >
          Calculate
        </Button>

        {result && (
          <p className="mt-4 text-green-600 font-semibold text-lg bg-green-100 p-4 rounded-lg shadow-xl text-center">
            GST: ₹{result.gstAmount.toFixed(2)} | Total: ₹
            {result.totalAmount.toFixed(2)}
          </p>
        )}
      </div>
    </div>
  );
};

export default GSTCalculator;
