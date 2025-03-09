import React, { useState } from "react";
import { Label } from "../../ui/label";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";

const ProfitMarginCalculator = () => {
  const [cost, setCost] = useState("");
  const [revenue, setRevenue] = useState("");
  const [margin, setMargin] = useState(null);

  const calculateProfitMargin = () => {
    const profit = revenue - cost;
    const margin = (profit / revenue) * 100;
    setMargin(margin.toFixed(2));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Profit Margin Calculator</h2>
      <div className="space-y-4">
        <div>
          <Label className="font-bold">Total Cost</Label>
          <Input
            className="mt-2"
            type="number"
            placeholder="Enter cost"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
        </div>

        <div>
          <Label className="font-bold">Total Revenue</Label>
          <Input
            className="mt-2"
            type="number"
            placeholder="Enter revenue"
            value={revenue}
            onChange={(e) => setRevenue(e.target.value)}
          />
        </div>

        <Button
          onClick={calculateProfitMargin}
          className="w-full mt-4 bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-[1.01]"
        >
          Calculate
        </Button>

        {margin && (
          <p className="mt-4 text-green-600 font-semibold text-lg bg-green-100 p-4 rounded-lg shadow-xl text-center">
            Profit Margin: {margin}%
          </p>
        )}
      </div>
    </div>
  );
};

export default ProfitMarginCalculator;
