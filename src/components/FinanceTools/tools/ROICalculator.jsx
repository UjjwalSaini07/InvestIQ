import React, { useState } from "react";
import { Label } from "../../ui/label";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";

const ROICalculator = () => {
  const [gain, setGain] = useState("");
  const [cost, setCost] = useState("");
  const [roi, setRoi] = useState(null);

  const calculateROI = () => {
    const roiValue = ((gain - cost) / cost) * 100;
    setRoi(roiValue.toFixed(2));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        Return of Investment Calculator
      </h2>
      <div className="space-y-4">
        <div>
          <Label className="font-bold">Total Gain</Label>
          <Input
            className="mt-2"
            type="number"
            placeholder="Enter gain"
            value={gain}
            onChange={(e) => setGain(e.target.value)}
          />
        </div>

        <div>
          <Label className="font-bold">Total Cost</Label>
          <Input
            className="mt-2"
            type="number"
            placeholder="Enter cost"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
        </div>

        <Button
          onClick={calculateROI}
          className="w-full mt-4 bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-[1.01]"
        >
          Calculate
        </Button>

        {roi && (
          <p className="mt-4 text-green-600 font-semibold text-lg bg-green-100 p-4 rounded-lg shadow-xl text-center">
            ROI: {roi}%
          </p>
        )}
      </div>
    </div>
  );
};

export default ROICalculator;
