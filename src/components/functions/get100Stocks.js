import axios from "axios";

export const get100Stocks = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/v1/fetchStocksData');
    return response.data;
  } catch (error) {
    console.log("ERROR>>>", error.message);
  }
};
