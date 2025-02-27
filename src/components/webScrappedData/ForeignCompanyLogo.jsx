import React, { useState } from "react";

const ForeignCompanyLogo = () => {
  const [logo, setLogo] = useState(null);
  const [error, setError] = useState(null);

  const fetchLogo = async () => {
    try {
      const apiKey = import.meta.env.VITE_LogoFetcher;
      const ticker = "INFY";
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
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Fetch Company Logo</h1>
      <button
        onClick={fetchLogo}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Fetch Logo
      </button>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {logo && (
        <div className="mt-4">
          <img src={logo} alt="Company Logo" className="w-24 h-24" />
        </div>
      )}
    </div>
  );
};

export default ForeignCompanyLogo;
