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

const EPFCalculator = () => {
  const [basicSalary, setBasicSalary] = useState("");
  const [epfRate, setEpfRate] = useState("");
  const [contribution, setContribution] = useState(null);

  const calculateEPF = () => {
    const salary = parseFloat(basicSalary);
    const rate = parseFloat(epfRate) / 100;
    const amount = salary * rate;
    setContribution(amount.toFixed(2));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        Employee Provident Fund (EPF) Calculator
      </h2>
      <div className="space-y-4">
        <div>
          <Label className="font-bold flex item-center">
            Basic Salary
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
                The base salary on which your EPF contributions are calculated, excluding allowances and bonuses.
              </TooltipContent>
            </Tooltip>
          </Label>
          <Input
            className="mt-2"
            type="number"
            placeholder="Enter basic salary"
            value={basicSalary}
            onChange={(e) => setBasicSalary(e.target.value)}
          />
        </div>

        <div>
          <Label className="font-bold flex item-center">
            EPF Contribution Rate (%)
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
                The percentage of your basic salary contributed to the Employee Provident Fund (EPF) each month.
              </TooltipContent>
            </Tooltip>
          </Label>
          <Input
            className="mt-2"
            type="number"
            placeholder="Enter EPF contribution rate"
            value={epfRate}
            onChange={(e) => setEpfRate(e.target.value)}
          />
        </div>

        <Button
          onClick={calculateEPF}
          className="w-full mt-4 bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-[1.01]"
        >
          Calculate
        </Button>

        {contribution && (
          <p className="mt-4 text-green-600 font-semibold text-lg bg-green-100 p-4 rounded-lg shadow-xl text-center">
            EPF Contribution: ₹{contribution}
          </p>
        )}
      </div>
    </div>
  );
};

export default EPFCalculator;
