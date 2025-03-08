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
      <h2 className="text-2xl font-bold mb-4">Expenditure and Saving Calculator</h2>
      <div className="space-y-4">
        <Label>Monthly Income</Label>
        <Input
          type="number"
          placeholder="Enter monthly income"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
        />

        <Label>Monthly Expenditure</Label>
        <Input
          type="number"
          placeholder="Enter monthly expenditure"
          value={expenditure}
          onChange={(e) => setExpenditure(e.target.value)}
        />

        <Button className="mt-4" onClick={calculateSavings}>
          Calculate
        </Button>

        {savings && (
          <p className="mt-4 text-green-600 font-semibold">
            Monthly Savings: ₹{savings}
          </p>
        )}
      </div>
    </div>
  );
};

export default ExpenditureSavingCalculator;
