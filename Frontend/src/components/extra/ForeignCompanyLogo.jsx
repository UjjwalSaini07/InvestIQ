import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const ForeignCompanyLogo = () => {
  const [ticker, setTicker] = useState("");
  const [logo, setLogo] = useState(null);
  const [error, setError] = useState(null);

  const fetchLogo = async () => {
    try {
      const apiKey = import.meta.env.VITE_LogoFetcher;
      const url = `https://finnhub.io/api/v1/stock/profile2?symbol=${ticker}&token=${apiKey}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      if (data.logo) {
        setLogo(data.logo);
        setError(null);
      } else {
        setError("No logo found for this ticker.");
        setLogo(null);
      }
    } catch (err) {
      setError("Failed to fetch logo.");
      setLogo(null);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-black border-2 border-gray-500 shadow-md rounded-xl">
      <h1 className="text-2xl font-bold mb-6 text-center">Fetch Company Logo</h1>
      <div className="flex flex-col space-y-4">
        <Input
          type="text"
          placeholder="Enter ticker symbol (e.g., INFY)"
          value={ticker}
          onChange={(e) => setTicker(e.target.value)}
          className="w-full"
        />
        <Button
          onClick={fetchLogo}
          className="bg-blue-500 text-white hover:bg-blue-600 w-full"
        >
          Fetch Logo
        </Button>
        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
        {logo && (
          <div className="mt-4 flex justify-center">
            <img src={logo} alt="Company Logo" className="w-24 h-24 object-contain" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ForeignCompanyLogo;