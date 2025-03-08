import React, { useState } from "react";
import { Label } from "../../ui/label";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";

const EPFCalculator = () => {
  const [basicSalary, setBasicSalary] = useState("");
  const [epfRate, setEpfRate] = useState("");
  const [contribution, setContribution] = useState(null);

  const calculateEPF = () => {
    const salary = parseFloat(basicSalary);
    const rate = parseFloat(epfRate) / 100;
    const amount = salary * rate;
    setContribution(amount.toFixed(2));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Employee Provident Fund (EPF) Calculator</h2>
      <div className="space-y-4">
        <Label>Basic Salary</Label>
        <Input
          type="number"
          placeholder="Enter basic salary"
          value={basicSalary}
          onChange={(e) => setBasicSalary(e.target.value)}
        />

        <Label>EPF Contribution Rate (%)</Label>
        <Input
          type="number"
          placeholder="Enter EPF contribution rate"
          value={epfRate}
          onChange={(e) => setEpfRate(e.target.value)}
        />

        <Button className="mt-4" onClick={calculateEPF}>
          Calculate
        </Button>

        {contribution && (
          <p className="mt-4 text-green-600 font-semibold">
            EPF Contribution: ₹{contribution}
          </p>
        )}
      </div>
    </div>
  );
};

export default EPFCalculator;
