import axios from "axios";

export const getCoinData = async (id, setError) => {
  try {
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
    return response.data || null; // Return data or null if no data
  } catch (e) {
    console.log(e.message);
    if (setError) {
      setError(true);
    }
  }
};