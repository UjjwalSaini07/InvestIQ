import React, { useState } from "react";
import { Label } from "../../ui/label";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";

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
        <Label>Total Revenue</Label>
        <Input
          type="number"
          placeholder="Enter revenue"
          value={revenue}
          onChange={(e) => setRevenue(e.target.value)}
        />

        <Label>Total Expenses</Label>
        <Input
          type="number"
          placeholder="Enter expenses"
          value={expenses}
          onChange={(e) => setExpenses(e.target.value)}
        />

        <Button className="mt-4" onClick={calculateNetProfit}>
          Calculate
        </Button>

        {netProfit && (
          <p className="mt-4 text-green-600 font-semibold">Net Profit: ₹{netProfit}</p>
        )}
      </div>
    </div>
  );
};

export default NetProfitValueCalculator;
