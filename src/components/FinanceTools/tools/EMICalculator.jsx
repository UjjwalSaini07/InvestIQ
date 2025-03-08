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
          <Label className="font-bold">Principal Amount</Label>
          <Input
            className="mt-2"
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            placeholder="Enter principal"
          />
        </div>
        <div>
          <Label className="font-bold">Annual Interest Rate (%)</Label>
          <Input
            className="mt-2"
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            placeholder="Enter rate"
          />
        </div>
        <div>
          <Label className="font-bold">Tenure (Months)</Label>
          <Input
            className="mt-2"
            type="number"
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
            placeholder="Enter tenure"
          />
        </div>
        <Button 
          onClick={calculateEMI} 
          className="w-full mt-4 bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-[1.01]"
        >
          Calculate
        </Button>
      </div>
      {emi && (
        <p className="mt-4 text-green-600 font-semibold text-lg bg-green-100 p-3 rounded-lg shadow-xl text-center">
          Monthly EMI: ₹{emi}
        </p>
      )}
    </div>
  );
};

export default EMICalculator;
