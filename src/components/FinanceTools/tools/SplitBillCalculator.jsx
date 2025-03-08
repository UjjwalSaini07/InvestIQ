import React, { useState } from "react";
import { Label } from "../../ui/label";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";

const SplitBillCalculator = () => {
  const [totalAmount, setTotalAmount] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [amountPerPerson, setAmountPerPerson] = useState(null);

  const calculateSplitAmount = () => {
    const total = parseFloat(totalAmount);
    const people = parseInt(numberOfPeople);
    const amount = total / people;
    setAmountPerPerson(amount.toFixed(2));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Split Bill Calculator</h2>
      <div className="space-y-4">
        <Label>Total Amount</Label>
        <Input
          type="number"
          placeholder="Enter total amount"
          value={totalAmount}
          onChange={(e) => setTotalAmount(e.target.value)}
        />

        <Label>Number of People</Label>
        <Input
          type="number"
          placeholder="Enter number of people"
          value={numberOfPeople}
          onChange={(e) => setNumberOfPeople(e.target.value)}
        />

        <Button className="mt-4" onClick={calculateSplitAmount}>
          Calculate
        </Button>

        {amountPerPerson && (
          <p className="mt-4 text-green-600 font-semibold">
            Each person should pay ₹{amountPerPerson}.
          </p>
        )}
      </div>
    </div>
  );
};

export default SplitBillCalculator;
