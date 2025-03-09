import React, { useState } from "react";
import { Label } from "../../ui/label";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";

const ExpenditureSavingCalculator = () => {
  const [income, setIncome] = useState("");
  const [expenditure, setExpenditure] = useState("");
  const [savings, setSavings] = useState(null);

  const calculateSavings = () => {
    const totalIncome = parseFloat(income);
    const totalExpenditure = parseFloat(expenditure);
    const saving = totalIncome - totalExpenditure;
    setSavings(saving.toFixed(2));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        Expenditure and Saving Calculator
      </h2>
      <div className="space-y-4">
        <div>
          <Label className="font-bold">Monthly Income</Label>
          <Input
            className="mt-2"
            type="number"
            placeholder="Enter monthly income"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
          />
        </div>

        <div>
          <Label className="font-bold">Monthly Expenditure</Label>
          <Input
            className="mt-2"
            type="number"
            placeholder="Enter monthly expenditure"
            value={expenditure}
            onChange={(e) => setExpenditure(e.target.value)}
          />
        </div>

        <Button
          onClick={calculateSavings}
          className="w-full mt-4 bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-[1.01]"
        >
          Calculate
        </Button>

        {savings && (
          <p className="mt-4 text-green-600 font-semibold text-lg bg-green-100 p-4 rounded-lg shadow-xl text-center">
            Monthly Savings: ₹{savings}
          </p>
        )}
      </div>
    </div>
  );
};

export default ExpenditureSavingCalculator;
