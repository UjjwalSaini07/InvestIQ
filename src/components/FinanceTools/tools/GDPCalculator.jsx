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

const GDPCalculator = () => {
  const [consumption, setConsumption] = useState("");
  const [investment, setInvestment] = useState("");
  const [governmentSpending, setGovernmentSpending] = useState("");
  const [netExports, setNetExports] = useState("");
  const [gdp, setGdp] = useState(null);

  const calculateGDP = () => {
    const totalGDP =
      parseFloat(consumption) +
      parseFloat(investment) +
      parseFloat(governmentSpending) +
      parseFloat(netExports);
    setGdp(totalGDP.toFixed(2));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">GDP Calculator</h2>
      <div className="space-y-4">
        <div>
          <Label className="font-bold flex item-center">
            Consumption
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
                The total value of goods and services consumed by households
                within a country.
              </TooltipContent>
            </Tooltip>
          </Label>
          <Input
            className="mt-2"
            type="number"
            placeholder="Enter consumption"
            value={consumption}
            onChange={(e) => setConsumption(e.target.value)}
          />
        </div>

        <div>
          <Label className="font-bold flex item-center">
            Investment
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
                The total amount spent on capital goods, such as equipment,
                machinery, and infrastructure.
              </TooltipContent>
            </Tooltip>
          </Label>
          <Input
            className="mt-2"
            type="number"
            placeholder="Enter investment"
            value={investment}
            onChange={(e) => setInvestment(e.target.value)}
          />
        </div>

        <div>
          <Label className="font-bold flex item-center">
            Government Spending
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
                The total expenditure by the government on goods, services, and
                public projects.
              </TooltipContent>
            </Tooltip>
          </Label>
          <Input
            className="mt-2"
            type="number"
            placeholder="Enter government spending"
            value={governmentSpending}
            onChange={(e) => setGovernmentSpending(e.target.value)}
          />
        </div>

        <div>
          <Label className="font-bold flex item-center">
            Net Exports
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
                The difference between a country's exports and imports of goods
                and services.
              </TooltipContent>
            </Tooltip>
          </Label>
          <Input
            className="mt-2"
            type="number"
            placeholder="Enter net exports"
            value={netExports}
            onChange={(e) => setNetExports(e.target.value)}
          />
        </div>

        <Button
          onClick={calculateGDP}
          className="w-full mt-4 bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-[1.01]"
        >
          Calculate
        </Button>

        {gdp && (
          <p className="mt-4 text-green-600 font-semibold text-lg bg-green-100 p-4 rounded-lg shadow-xl text-center">
            GDP: ₹{gdp}
          </p>
        )}
      </div>
    </div>
  );
};

export default GDPCalculator;
