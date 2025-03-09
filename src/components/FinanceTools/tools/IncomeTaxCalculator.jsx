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
        <div>
          <Label className="font-bold">Annual Income</Label>
          <Input
            className="mt-2"
            type="number"
            placeholder="Enter annual income"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
          />
        </div>

        <div>
          <Label className="font-bold">Tax Rate (%)</Label>
          <Input
            className="mt-2"
            type="number"
            placeholder="Enter tax rate"
            value={taxRate}
            onChange={(e) => setTaxRate(e.target.value)}
          />
        </div>

        <Button
          onClick={calculateTax}
          className="w-full mt-4 bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-[1.01]"
        >
          Calculate
        </Button>

        {tax && (
          <p className="mt-4 text-green-600 font-semibold text-lg bg-green-100 p-4 rounded-lg shadow-xl text-center">
            Income Tax: ₹{tax}
          </p>
        )}
      </div>
    </div>
  );
};

export default IncomeTaxCalculator;
