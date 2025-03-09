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
        <div>
          <Label className="font-bold">Consumption</Label>
          <Input
            className="mt-2"
            type="number"
            placeholder="Enter consumption"
            value={consumption}
            onChange={(e) => setConsumption(e.target.value)}
          />
        </div>

        <div>
          <Label className="font-bold">Investment</Label>
          <Input
            className="mt-2"
            type="number"
            placeholder="Enter investment"
            value={investment}
            onChange={(e) => setInvestment(e.target.value)}
          />
        </div>

        <div>
          <Label className="font-bold">Government Spending</Label>
          <Input
            className="mt-2"
            type="number"
            placeholder="Enter government spending"
            value={governmentSpending}
            onChange={(e) => setGovernmentSpending(e.target.value)}
          />
        </div>

        <div>
          <Label className="font-bold">Net Exports</Label>
          <Input
            className="mt-2"
            type="number"
            placeholder="Enter net exports"
            value={netExports}
            onChange={(e) => setNetExports(e.target.value)}
          />
        </div>

        <Button
          onClick={calculateGDP}
          className="w-full mt-4 bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-[1.01]"
        >
          Calculate
        </Button>

        {gdp && (
          <p className="mt-4 text-green-600 font-semibold text-lg bg-green-100 p-4 rounded-lg shadow-xl text-center">
            GDP: ₹{gdp}
          </p>
        )}
      </div>
    </div>
  );
};

export default GDPCalculator;
