import React, { useState } from "react";
import { Label } from "../../ui/label";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";

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
        <Label>Amount</Label>
        <Input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <Label>GST Rate (%)</Label>
        <Input
          type="number"
          placeholder="Enter GST rate"
          value={gstRate}
          onChange={(e) => setGstRate(e.target.value)}
        />

        <Button className="mt-4" onClick={calculateGST}>
          Calculate
        </Button>

        {result && (
          <p className="mt-4 text-green-600 font-semibold">
            GST: ₹{result.gstAmount.toFixed(2)} | Total: ₹{result.totalAmount.toFixed(2)}
          </p>
        )}
      </div>
    </div>
  );
};

export default GSTCalculator;
