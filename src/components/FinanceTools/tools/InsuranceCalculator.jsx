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

const InsuranceCalculator = () => {
  const [sumAssured, setSumAssured] = useState("");
  const [premiumRate, setPremiumRate] = useState("");
  const [premium, setPremium] = useState(null);

  const calculatePremium = () => {
    const annualPremium = (sumAssured * premiumRate) / 100;
    setPremium(annualPremium.toFixed(2));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Insurance Calculator</h2>
      <div className="space-y-4">
        <div>
          <Label className="font-bold flex item-center">
            Sum Assured
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
                The amount of money that the insurance company will pay out in case of a claim or at the end of the policy term.
              </TooltipContent>
            </Tooltip>
          </Label>
          <Input
            className="mt-2"
            type="number"
            placeholder="Enter sum assured"
            value={sumAssured}
            onChange={(e) => setSumAssured(e.target.value)}
          />
        </div>

        <div>
          <Label className="font-bold flex item-center">
            Premium Rate (%)
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
                The percentage of the sum assured that you need to pay annually as the insurance premium.
              </TooltipContent>
            </Tooltip>
          </Label>
          <Input
            className="mt-2"
            type="number"
            placeholder="Enter premium rate"
            value={premiumRate}
            onChange={(e) => setPremiumRate(e.target.value)}
          />
        </div>

        <Button
          onClick={calculatePremium}
          className="w-full mt-4 bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-[1.01]"
        >
          Calculate
        </Button>

        {premium && (
          <p className="mt-4 text-green-600 font-semibold text-lg bg-green-100 p-4 rounded-lg shadow-xl text-center">
            Annual Premium: ₹{premium}
          </p>
        )}
      </div>
    </div>
  );
};

export default InsuranceCalculator;
