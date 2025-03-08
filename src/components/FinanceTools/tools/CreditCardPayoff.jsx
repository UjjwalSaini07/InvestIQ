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
    const numMonths = Math.log(payment / (payment - rate * monthlyDebt)) / Math.log(1 + rate);
    setMonths(Math.ceil(numMonths));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Credit Card Payoff Calculator</h2>
      <div className="space-y-4">
        <Label>Balance</Label>
        <Input
          type="number"
          placeholder="Enter balance"
          value={balance}
          onChange={(e) => setBalance(e.target.value)}
        />

        <Label>Interest Rate (%)</Label>
        <Input
          type="number"
          placeholder="Enter interest rate"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />

        <Label>Monthly Payment</Label>
        <Input
          type="number"
          placeholder="Enter monthly payment"
          value={monthlyPayment}
          onChange={(e) => setMonthlyPayment(e.target.value)}
        />

        <Button className="mt-4" onClick={calculatePayoffMonths}>
          Calculate
        </Button>

        {months && (
          <p className="mt-4 text-green-600 font-semibold">
            It will take {months} months to pay off your credit card.
          </p>
        )}
      </div>
    </div>
  );
};

export default CreditCardPayoff;
