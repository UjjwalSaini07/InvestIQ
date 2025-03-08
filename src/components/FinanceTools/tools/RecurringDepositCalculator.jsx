import React, { useState } from "react";
import { Label } from "../../ui/label";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";

const RecurringDepositCalculator = () => {
  const [depositAmount, setDepositAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [timePeriod, setTimePeriod] = useState("");
  const [maturityAmount, setMaturityAmount] = useState(null);

  const calculateMaturity = () => {
    const p = parseFloat(depositAmount);
    const r = parseFloat(interestRate) / 100 / 12;
    const n = parseFloat(timePeriod) * 12;
    const amount = p * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    setMaturityAmount(amount.toFixed(2));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Recurring Deposit Calculator</h2>
      <div className="space-y-4">
        <Label>Monthly Deposit Amount</Label>
        <Input
          type="number"
          placeholder="Enter deposit amount"
          value={depositAmount}
          onChange={(e) => setDepositAmount(e.target.value)}
        />

        <Label>Interest Rate (%)</Label>
        <Input
          type="number"
          placeholder="Enter interest rate"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />

        <Label>Time Period (Years)</Label>
        <Input
          type="number"
          placeholder="Enter time period"
          value={timePeriod}
          onChange={(e) => setTimePeriod(e.target.value)}
        />

        <Button className="mt-4" onClick={calculateMaturity}>
          Calculate
        </Button>

        {maturityAmount && (
          <p className="mt-4 text-green-600 font-semibold">
            Maturity Amount: ₹{maturityAmount}
          </p>
        )}
      </div>
    </div>
  );
};

export default RecurringDepositCalculator;
