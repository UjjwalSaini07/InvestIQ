import React, { useState } from "react";
import { Label } from "../../ui/label";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";

const EMICalculator = () => {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [tenure, setTenure] = useState("");
  const [emi, setEmi] = useState(null);

  const calculateEMI = () => {
    const monthlyRate = rate / 100 / 12;
    const emi =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
      (Math.pow(1 + monthlyRate, tenure) - 1);
    setEmi(emi.toFixed(2));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">EMI Calculator</h2>
      <div className="space-y-4">
        <div>
          <Label>Principal Amount</Label>
          <Input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            placeholder="Enter principal"
          />
        </div>
        <div>
          <Label>Annual Interest Rate (%)</Label>
          <Input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            placeholder="Enter rate"
          />
        </div>
        <div>
          <Label>Tenure (Months)</Label>
          <Input
            type="number"
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
            placeholder="Enter tenure"
          />
        </div>
        <Button onClick={calculateEMI} className="w-full mt-4">
          Calculate
        </Button>
      </div>
      {emi && (
        <p className="mt-4 text-green-600 font-semibold text-lg">
          Monthly EMI: ₹{emi}
        </p>
      )}
    </div>
  );
};

export default EMICalculator;
