import React, { useState } from "react";
import { Label } from "../../ui/label";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";

const SIPCalculator = () => {
  const [investment, setInvestment] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [result, setResult] = useState(null);

  const calculateSIP = () => {
    const monthlyRate = rate / 100 / 12;
    const months = years * 12;
    const futureValue =
      investment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
    setResult(futureValue.toFixed(2));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">SIP Lump Calculator</h2>
      <div className="space-y-4">
        <div>
          <Label className="font-bold">Monthly Investment</Label>
          <Input
            className="mt-2"
            type="number"
            value={investment}
            onChange={(e) => setInvestment(e.target.value)}
            placeholder="Enter monthly investment"
          />
        </div>
        <div>
          <Label className="font-bold">Annual Rate of Return (%)</Label>
          <Input
            className="mt-2"
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            placeholder="Enter rate"
          />
        </div>
        <div>
          <Label className="font-bold">Investment Duration (Years)</Label>
          <Input
            className="mt-2"
            type="number"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            placeholder="Enter years"
          />
        </div>

        <Button
          onClick={calculateSIP}
          className="w-full mt-4 bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-[1.01]"
        >
          Calculate
        </Button>
      </div>

      {result && (
        <p className="mt-4 text-green-600 font-semibold text-lg bg-green-100 p-4 rounded-lg shadow-xl text-center">
          Future Value: ₹{result}
        </p>
      )}

    </div>
  );
};

export default SIPCalculator;
