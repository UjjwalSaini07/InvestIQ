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

const ROICalculator = () => {
  const [gain, setGain] = useState("");
  const [cost, setCost] = useState("");
  const [roi, setRoi] = useState(null);

  const calculateROI = () => {
    const roiValue = ((gain - cost) / cost) * 100;
    setRoi(roiValue.toFixed(2));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        Return of Investment Calculator
      </h2>
      <div className="space-y-4">
        <div>
          <Label className="font-bold flex item-center">
            Total Gain
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
                The total profit or gain you have earned from the investment, including capital appreciation and income.
              </TooltipContent>
            </Tooltip>
          </Label>
          <Input
            className="mt-2"
            type="number"
            placeholder="Enter gain"
            value={gain}
            onChange={(e) => setGain(e.target.value)}
          />
        </div>

        <div>
          <Label className="font-bold flex item-center">
            Total Cost
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
                The total amount you have spent or invested, including the initial investment and any associated costs.
              </TooltipContent>
            </Tooltip>
          </Label>
          <Input
            className="mt-2"
            type="number"
            placeholder="Enter cost"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
        </div>

        <Button
          onClick={calculateROI}
          className="w-full mt-4 bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-[1.01]"
        >
          Calculate
        </Button>

        {roi && (
          <p className="mt-4 text-green-600 font-semibold text-lg bg-green-100 p-4 rounded-lg shadow-xl text-center">
            ROI: {roi}%
          </p>
        )}
      </div>
    </div>
  );
};

export default ROICalculator;
