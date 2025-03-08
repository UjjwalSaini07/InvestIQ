import React, { useState } from "react";
import { Label } from "../../ui/label";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";

const IncomeTaxCalculator = () => {
  const [income, setIncome] = useState("");
  const [taxRate, setTaxRate] = useState("");
  const [tax, setTax] = useState(null);

  const calculateTax = () => {
    const calculatedTax = (income * taxRate) / 100;
    setTax(calculatedTax.toFixed(2));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Income Tax Calculator</h2>
      <div className="space-y-4">
        <Label>Annual Income</Label>
        <Input
          type="number"
          placeholder="Enter annual income"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
        />

        <Label>Tax Rate (%)</Label>
        <Input
          type="number"
          placeholder="Enter tax rate"
          value={taxRate}
          onChange={(e) => setTaxRate(e.target.value)}
        />

        <Button className="mt-4" onClick={calculateTax}>
          Calculate
        </Button>

        {tax && (
          <p className="mt-4 text-green-600 font-semibold">Income Tax: ₹{tax}</p>
        )}
      </div>
    </div>
  );
};

export default IncomeTaxCalculator;
