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
        <Label>Total Cost</Label>
        <Input
          type="number"
          placeholder="Enter cost"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
        />

        <Label>Total Revenue</Label>
        <Input
          type="number"
          placeholder="Enter revenue"
          value={revenue}
          onChange={(e) => setRevenue(e.target.value)}
        />

        <Button className="mt-4" onClick={calculateProfitMargin}>
          Calculate
        </Button>

        {margin && (
          <p className="mt-4 text-green-600 font-semibold">Profit Margin: {margin}%</p>
        )}
      </div>
    </div>
  );
};

export default ProfitMarginCalculator;
