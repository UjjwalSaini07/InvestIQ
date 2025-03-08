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
      <h2 className="text-2xl font-bold mb-4">Return of Investment Calculator</h2>
      <div className="space-y-4">
        <Label>Total Gain</Label>
        <Input
          type="number"
          placeholder="Enter gain"
          value={gain}
          onChange={(e) => setGain(e.target.value)}
        />

        <Label>Total Cost</Label>
        <Input
          type="number"
          placeholder="Enter cost"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
        />

        <Button className="mt-4" onClick={calculateROI}>
          Calculate
        </Button>

        {roi && (
          <p className="mt-4 text-green-600 font-semibold">ROI: {roi}%</p>
        )}
      </div>
    </div>
  );
};

export default ROICalculator;
