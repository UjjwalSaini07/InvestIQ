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
        <div>
          <Label className="font-bold">Principal</Label>
          <Input
            className="mt-2"
            type="number"
            placeholder="Enter principal amount"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
          />
        </div>

        <div>
          <Label className="font-bold">Interest Rate (%)</Label>
          <Input
            className="mt-2"
            type="number"
            placeholder="Enter interest rate"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />
        </div>

        <div>
          <Label className="font-bold">Time Period (Years)</Label>
          <Input
            className="mt-2"
            type="number"
            placeholder="Enter time period"
            value={timePeriod}
            onChange={(e) => setTimePeriod(e.target.value)}
          />
        </div>

        <Button
          onClick={calculateMaturity}
          className="w-full mt-4 bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-[1.01]"
        >
          Calculate
        </Button>

        {maturityAmount && (
          <p className="mt-4 text-green-600 font-semibold text-lg bg-green-100 p-4 rounded-lg shadow-xl text-center">
            Maturity Amount: ₹{maturityAmount}
          </p>
        )}
      </div>
    </div>
  );
};

export default FixedDepositCalculator;
