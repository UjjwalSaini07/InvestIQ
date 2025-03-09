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
        <div>
          <Label className="font-bold">Total Amount</Label>
          <Input
            className="mt-2"
            type="number"
            placeholder="Enter total amount"
            value={totalAmount}
            onChange={(e) => setTotalAmount(e.target.value)}
          />
        </div>

        <div>
          <Label className="font-bold">Number of People</Label>
          <Input
            className="mt-2"
            type="number"
            placeholder="Enter number of people"
            value={numberOfPeople}
            onChange={(e) => setNumberOfPeople(e.target.value)}
          />
        </div>

        <Button
          onClick={calculateSplitAmount}
          className="w-full mt-4 bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-[1.01]"
        >
          Calculate
        </Button>

        {amountPerPerson && (
          <p className="mt-4 text-green-600 font-semibold text-lg bg-green-100 p-4 rounded-lg shadow-xl text-center">
            Each person should pay ₹{amountPerPerson}.
          </p>
        )}
      </div>
    </div>
  );
};

export default SplitBillCalculator;
