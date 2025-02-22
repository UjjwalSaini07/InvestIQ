import { writeFileSync } from "fs";

interface Currency {
  usd: number;
  inr: number;
}

interface CryptoData {
  [key: string]: Currency;
}

const CRYPTOCURRENCIES = [
  "bitcoin",
  "ethereum",
  "dogecoin",
  "tether",
  "solana",
];
const CURRENCIES = ["usd", "inr"];
const API_URL = "https://api.coingecko.com/api/v3/simple/price";

async function getValues() {
  const currencyQuery = encodeURIComponent(CURRENCIES.join(","));
  const cryptoQuery = encodeURIComponent(CRYPTOCURRENCIES.join(","));

  try {
    const response = await fetch(
      `${API_URL}?ids=${cryptoQuery}&vs_currencies=${currencyQuery}`,
      { method: "GET" }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const data = (await response.json()) as CryptoData;

    const formatter = {
      inr: new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
      }),
      usd: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }),
    };

    const timestamp = new Date().toLocaleString();

    const content = `
# 🚀 Cryptocurrency Dashboard

Welcome to the InvestIQ - **Cryptocurrency Dashboard**, where you can find the latest prices for popular cryptocurrencies. Get real-time prices in both **USD** and **INR** currencies for the top 5 coins.

---

## 📊 Prices at a Glance

| **Cryptocurrency** | **Price (USD)**       | **Price (INR)**        |
|---------------------|-----------------------|------------------------|
${CRYPTOCURRENCIES.map(
  (crypto) =>
    `| **${capitalize(crypto)}**   | ${formatter.usd.format(
      data[crypto]?.usd ?? 0
    )} | ${formatter.inr.format(data[crypto]?.inr ?? 0)} |`
).join("\n")}

---

## 📌 Individual Details
${CRYPTOCURRENCIES.map(
  (crypto) => `
### ${capitalize(crypto)}

- **USD Price:** ${formatter.usd.format(data[crypto]?.usd ?? 0)}
- **INR Price:** ${formatter.inr.format(data[crypto]?.inr ?? 0)}
- **Last Updated:** ${timestamp} (GMT)
---
`
).join("\n")}

> _This data is powered by [CoinGecko](https://www.coingecko.com)._  
> _Last updated: ${timestamp}_  

---
🪙 Made with ❤️ by your cryptocurrency tracker - Developer: UjjwalSaini07!
`;

    writeFileSync("README.md", content);
    console.log(
      "README.md file has been successfully updated with the latest cryptocurrency prices."
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching or processing data:", error.message);
    } else {
      console.error("An unexpected error occurred:", error);
    }
  }
}

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

getValues();