import React, { useState } from "react";
import { Label } from "../../ui/label";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";

const FixedDepositCalculator = () => {
  const [principal, setPrincipal] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [timePeriod, setTimePeriod] = useState("");
  const [maturityAmount, setMaturityAmount] = useState(null);

  const calculateMaturity = () => {
    const p = parseFloat(principal);
    const r = parseFloat(interestRate) / 100;
    const t = parseFloat(timePeriod);
    const amount = p * Math.pow(1 + r, t);
    setMaturityAmount(amount.toFixed(2));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Fixed Deposit Calculator</h2>
      <div className="space-y-4">
        <Label>Principal</Label>
        <Input
          type="number"
          placeholder="Enter principal amount"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
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

export default FixedDepositCalculator;
