import React, { useState } from "react";
import { motion } from "framer-motion";
import { Combobox } from "../ui/combobox";
import { Card, CardContent } from "../ui/card";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../ui/select";

import SIPCalculator from "./tools/SIPCalculator";
import EMICalculator from "./tools/EMICalculator";
import InsuranceCalculator from "./tools/InsuranceCalculator";
import GSTCalculator from "./tools/GSTCalculator";
import IncomeTaxCalculator from "./tools/IncomeTaxCalculator";
import ProfitMarginCalculator from "./tools/ProfitMarginCalculator";
import NetProfitValueCalculator from "./tools/NetProfitValueCalculator";
import ROICalculator from "./tools/ROICalculator";
import GDPCalculator from "./tools/GDPCalculator";
import CreditCardPayoff from "./tools/CreditCardPayoff";
import SplitBillCalculator from "./tools/SplitBillCalculator";
import FixedDepositCalculator from "./tools/FixedDepositCalculator";
import RecurringDepositCalculator from "./tools/RecurringDepositCalculator";
import EPFCalculator from "./tools/EPFCalculator";
import ExpenditureSavingCalculator from "./tools/ExpenditureSavingCalculator";

const textVariant = (delay) => ({
  hidden: { y: -50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", duration: 1.25, delay: delay },
  },
});

const FinanceTools = () => {
  const [selectedTool, setSelectedTool] = useState(null);
  const [selectedCurrency, setSelectedCurrency] = useState("INR");

  const tools = [
    { label: "📊 SIP Lump Calculator", component: SIPCalculator },
    { label: "🏠 EMI Calculator", component: EMICalculator },
    { label: "💼 Insurance Calculator", component: InsuranceCalculator },
    { label: "💰 GST Calculator", component: GSTCalculator },
    { label: "📄 Income Tax Calculator", component: IncomeTaxCalculator },
    { label: "📈 Profit Margin Calculator", component: ProfitMarginCalculator },
    { label: "📉 Net Profit Value Calculator", component: NetProfitValueCalculator },
    { label: "💸 Return of Investment Calculator", component: ROICalculator },
    { label: "🌍 GDP Calculator", component: GDPCalculator },
    { label: "💳 Credit Card Payoff Calculator", component: CreditCardPayoff },
    { label: "💵 Split Bill Calculator", component: SplitBillCalculator },
    { label: "💰 Fixed Deposit Calculator", component: FixedDepositCalculator },
    { label: "🔁 Recurring Deposit Calculator", component: RecurringDepositCalculator },
    { label: "🏢 EPF Calculator", component: EPFCalculator },
    { label: "💸 Expenditure & Saving Calculator", component: ExpenditureSavingCalculator },
  ];

  const CurrentTool = selectedTool
    ? tools.find((tool) => tool.label === selectedTool)?.component
    : null;

  return (
    <div className="p-5 max-w-4xl mx-auto bg-black text-white rounded-2xl shadow-2xl">
      <motion.div variants={textVariant(0.4)} initial="hidden" animate="show">
        <h2 className="text-5xl md:text-6xl text-center font-extrabold text-white leading-tight tracking-tight mb-4">
          Financial Tools
        </h2>
      </motion.div>
      <motion.div variants={textVariant(1.1)} initial="hidden" animate="show">
        <p className="text-lg text-gray-300 text-center">
          Take control of your finances with our powerful calculators. Choose a tool from the dropdown to begin.
        </p>
      </motion.div>
      <motion.div variants={textVariant(1.6)} initial="hidden" animate="show">
        <div className="mt-4  mb-2 h-1 w-20 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
      </motion.div>

      <div className="flex justify-between mb-8">
        <motion.div variants={textVariant(2.4)} initial="hidden" animate="show">
          <div className="w-1/2">
            <Combobox
              options={tools.map((tool) => tool.label)}
              placeholder="Select a financial tool..."
              onChange={setSelectedTool}
            />
          </div>
        </motion.div>
        <motion.div variants={textVariant(2.4)} initial="hidden" animate="show">
          <div className="ml-4 w-32">
            <Select value={selectedCurrency} onValueChange={setSelectedCurrency}>
              <SelectTrigger className="bg-black text-white border border-gray-200 rounded-lg shadow-lg">
                <SelectValue placeholder="Select Currency" />
              </SelectTrigger>
              <SelectContent className="bg-[#FFFFFF]">
                <SelectItem className="text-black" value="INR">INR</SelectItem>
                <SelectItem className="text-black" value="USD">USD</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </motion.div>
      </div>

      <motion.div variants={textVariant(3)} initial="hidden" animate="show">
      <Card className="bg-black border-2 border-gray-200 rounded-lg shadow-xl">
        <CardContent className="p-8">
          {CurrentTool ? (
            <CurrentTool />
          ) : (
            <p className="text-white text-center text-lg">
              Please select a tool to get started.
            </p>
          )}
        </CardContent>
      </Card>
      </motion.div>

      <motion.div variants={textVariant(3.5)} initial="hidden" animate="show">
        <footer className="mt-10 text-center text-sm text-gray-500">
          Built with 💡 by <span className="font-bold text-purple-400">InvestIQ Developers</span>
        </footer>
      </motion.div>
    </div>
  );
};

export default FinanceTools;
