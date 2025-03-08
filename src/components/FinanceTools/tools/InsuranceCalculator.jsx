import React, { useState } from "react";
import { Label } from "../../ui/label";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";

const InsuranceCalculator = () => {
  const [sumAssured, setSumAssured] = useState("");
  const [premiumRate, setPremiumRate] = useState("");
  const [premium, setPremium] = useState(null);

  const calculatePremium = () => {
    const annualPremium = (sumAssured * premiumRate) / 100;
    setPremium(annualPremium.toFixed(2));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Insurance Calculator</h2>
      <div className="space-y-4">
        <Label>Sum Assured</Label>
        <Input
          type="number"
          placeholder="Enter sum assured"
          value={sumAssured}
          onChange={(e) => setSumAssured(e.target.value)}
        />

        <Label>Premium Rate (%)</Label>
        <Input
          type="number"
          placeholder="Enter premium rate"
          value={premiumRate}
          onChange={(e) => setPremiumRate(e.target.value)}
        />

        <Button className="mt-4" onClick={calculatePremium}>
          Calculate
        </Button>

        {premium && (
          <p className="mt-4 text-green-600 font-semibold">Annual Premium: ₹{premium}</p>
        )}
      </div>
    </div>
  );
};

export default InsuranceCalculator;
