import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FinanceTools = () => {
    const [stocks, setStocks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStocks = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/fetchStocksData');
                setStocks(response.data);
            } catch (error) {
                console.error("Error fetching stocks:", error);
                setError("Failed to fetch stocks data. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchStocks();
    }, []);

    if (loading) {
        return <div className="p-4">Loading stocks data...</div>;
    }

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold">Stocks Data</h1>
            {error && <div className="text-red-500 mt-4">{error}</div>}
            <table className="table-auto border-collapse border border-gray-300 w-full mt-4">
                <thead>
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">Ticker</th>
                        <th className="border border-gray-300 px-4 py-2">Exchange</th>
                        <th className="border border-gray-300 px-4 py-2">Current Price</th>
                        <th className="border border-gray-300 px-4 py-2">Previous Close</th>
                        <th className="border border-gray-300 px-4 py-2">Market Cap</th>
                        <th className="border border-gray-300 px-4 py-2">High</th>
                        <th className="border border-gray-300 px-4 py-2">Low</th>
                        <th className="border border-gray-300 px-4 py-2">Dividend Yield</th>
                        <th className="border border-gray-300 px-4 py-2">Face Value</th>
                    </tr>
                </thead>
                <tbody>
                    {stocks.length > 0 ? (
                        stocks.map((stock, index) => (
                            <tr key={index}>
                                <td className="border border-gray-300 px-4 py-2">{stock.ticker}</td>
                                <td className="border border-gray-300 px-4 py-2">{stock.exchange}</td>
                                <td className="border border-gray-300 px-4 py-2">{stock.current_price}</td>
                                <td className="border border-gray-300 px-4 py-2">{stock.previous_close}</td>
                                <td className="border border-gray-300 px-4 py-2">{stock.market_cap}</td>
                                <td className="border border-gray-300 px-4 py-2">{stock.high}</td>
                                <td className="border border-gray-300 px-4 py-2">{stock.low}</td>
                                <td className="border border-gray-300 px-4 py-2">{stock.dividend_yield}</td>
                                <td className="border border-gray-300 px-4 py-2">{stock.face_value}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="9" className="border border-gray-300 px-4 py-2 text-center">No stocks data available.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default FinanceTools;




// Todo: Temporary Code...
// import React from "react";
// import { Button } from "../../@/ui/button";

// function financetools() {
//   return (
//     <div className="text-center mt-20">
//       <p>Basic Code For File Initialisation Only</p>
//       <Button
//         type="submit"
//         className="w-auto p-5 mt-5 rounded-full text-white text-sm transition bg-[#06b6d4] hover:bg-[#06b6d4]"
//       >
//         Finance Tools
//       </Button>
//     </div>
//   );
// }

// export default financetools;
