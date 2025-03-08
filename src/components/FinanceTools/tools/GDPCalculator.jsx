import React, { useState } from "react";
import { Label } from "../../ui/label";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";

const GDPCalculator = () => {
  const [consumption, setConsumption] = useState("");
  const [investment, setInvestment] = useState("");
  const [governmentSpending, setGovernmentSpending] = useState("");
  const [netExports, setNetExports] = useState("");
  const [gdp, setGdp] = useState(null);

  const calculateGDP = () => {
    const totalGDP =
      parseFloat(consumption) +
      parseFloat(investment) +
      parseFloat(governmentSpending) +
      parseFloat(netExports);
    setGdp(totalGDP.toFixed(2));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">GDP Calculator</h2>
      <div className="space-y-4">
        <Label>Consumption</Label>
        <Input
          type="number"
          placeholder="Enter consumption"
          value={consumption}
          onChange={(e) => setConsumption(e.target.value)}
        />

        <Label>Investment</Label>
        <Input
          type="number"
          placeholder="Enter investment"
          value={investment}
          onChange={(e) => setInvestment(e.target.value)}
        />

        <Label>Government Spending</Label>
        <Input
          type="number"
          placeholder="Enter government spending"
          value={governmentSpending}
          onChange={(e) => setGovernmentSpending(e.target.value)}
        />

        <Label>Net Exports</Label>
        <Input
          type="number"
          placeholder="Enter net exports"
          value={netExports}
          onChange={(e) => setNetExports(e.target.value)}
        />

        <Button className="mt-4" onClick={calculateGDP}>
          Calculate
        </Button>

        {gdp && (
          <p className="mt-4 text-green-600 font-semibold">GDP: ₹{gdp}</p>
        )}
      </div>
    </div>
  );
};

export default GDPCalculator;
