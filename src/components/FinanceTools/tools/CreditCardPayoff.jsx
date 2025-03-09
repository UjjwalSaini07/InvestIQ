import React, { useState } from "react";
import { Label } from "../../ui/label";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";

const CreditCardPayoff = () => {
  const [balance, setBalance] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("");
  const [months, setMonths] = useState(null);

  const calculatePayoffMonths = () => {
    const rate = parseFloat(interestRate) / 100 / 12;
    const monthlyDebt = parseFloat(balance);
    const payment = parseFloat(monthlyPayment);
    const numMonths =
      Math.log(payment / (payment - rate * monthlyDebt)) / Math.log(1 + rate);
    setMonths(Math.ceil(numMonths));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Credit Card Payoff Calculator</h2>
      <div className="space-y-4">
        <div>
          <Label className="font-bold">Balance</Label>
          <Input
            className="mt-2"
            type="number"
            placeholder="Enter balance"
            value={balance}
            onChange={(e) => setBalance(e.target.value)}
          />
        </div>

        <div>
          <Label className="font-bold">Interest Rate (%)</Label>
          <Input
            className="mt-2"
            type="number"
            placeholder="Enter interest rate"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />
        </div>

        <div>
          <Label className="font-bold">Monthly Payment</Label>
          <Input
            className="mt-2"
            type="number"
            placeholder="Enter monthly payment"
            value={monthlyPayment}
            onChange={(e) => setMonthlyPayment(e.target.value)}
          />
        </div>

        <Button
          onClick={calculatePayoffMonths}
          className="w-full mt-4 bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-[1.01]"
        >
          Calculate
        </Button>

        {months && (
          <p className="mt-4 text-green-600 font-semibold text-lg bg-green-100 p-4 rounded-lg shadow-xl text-center">
            It will take {months} months to pay off your credit card.
          </p>
        )}
      </div>
    </div>
  );
};

export default CreditCardPayoff;
