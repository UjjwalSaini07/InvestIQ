import express, { Request, Response } from "express";
import { writeFileSync } from "fs";

interface Currency {
  usd: number;
  inr: number;
  usd_24h_change?: number;
  usd_market_cap?: number;
  usd_24h_vol?: number;
}

interface CryptoData {
  [key: string]: Currency;
}

const CRYPTOCURRENCIES = [
  "bitcoin", "ethereum", "dogecoin", "tether", "solana",
  "cardano", "polkadot", "litecoin", "chainlink", "ripple",
  "tron", "stellar"
];
const CURRENCIES = ["usd", "inr"];
const API_URL = "https://api.coingecko.com/api/v3/simple/price";

async function getValues() {
  const currencyQuery = encodeURIComponent(CURRENCIES.join(","));
  const cryptoQuery = encodeURIComponent(CRYPTOCURRENCIES.join(","));

  try {
    const response = await fetch(
      `${API_URL}?ids=${cryptoQuery}&vs_currencies=${currencyQuery}&include_24hr_change=true&include_market_cap=true&include_24hr_vol=true`,
      { method: "GET" }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const data = (await response.json()) as CryptoData;
    const timestamp = new Date().toLocaleString();

    const formatter = {
      inr: new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }),
      usd: new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }),
    };

    const content = `  
# 🚀 **InvestIQ - Ultimate Cryptocurrency Dashboard**  
📢 **Track real-time crypto prices, market cap & volume!**  
Stay ahead in the crypto market with **InvestIQ**, your go-to dashboard for up-to-date cryptocurrency stats in **USD** & **INR**. 📈💰  

🌐 **Data Source:** [CoinGecko](https://www.coingecko.com)  
🕒 **Last Updated:** *${timestamp}*  

## 📊 **Live Cryptocurrency Prices**  

| 🪙 **Cryptocurrency** | 💵 **USD Price** | 💰 **INR Price** | 📈 **24h Change (%)** | 🏦 **Market Cap (USD)** | 🔄 **24h Volume (USD)** |
|----------------------|------------------|------------------|------------------|------------------|------------------|
${CRYPTOCURRENCIES.map((crypto) => {
  const change = data[crypto]?.usd_24h_change ?? 0;
  const changeSymbol = change >= 0 ? "🟢" : "🔴";
  return `| **${capitalize(crypto)}** | ${formatter.usd.format(
    data[crypto]?.usd ?? 0
  )} | ${formatter.inr.format(data[crypto]?.inr ?? 0)} | ${changeSymbol} ${change.toFixed(2)}% | ${formatter.usd.format(
    data[crypto]?.usd_market_cap ?? 0
  )} | ${formatter.usd.format(data[crypto]?.usd_24h_vol ?? 0)} |`;
}).join("\n")}

## 🏆 **Top Cryptos at a Glance**  

- 🚀 **Bitcoin (BTC)** – The king of crypto with the highest market cap.  
- 💎 **Ethereum (ETH)** – Powering the smart contract revolution.  
- 🐶 **Dogecoin (DOGE)** – Meme coin turned serious investment.  
- 💲 **Tether (USDT)** – Stablecoin ensuring smooth trading.  
- ☀️ **Solana (SOL)** – High-speed blockchain for DeFi & NFTs.  
- 🔗 **Chainlink (LINK)** – Bridging real-world data with smart contracts.  
- 🏛 **Cardano (ADA)** – A highly secure and scalable blockchain.  
- ⚡ **Polkadot (DOT)** – The future of blockchain interoperability.  
- ⚙️ **Litecoin (LTC)** – Faster and cheaper alternative to Bitcoin.  
- 🌐 **Ripple (XRP)** – Digital asset for instant global payments.  
- 🚀 **Tron (TRX)** – Smart contracts at ultra-low fees.  
- ✨ **Stellar (XLM)** – Fast transactions & cross-border payments.  

## 🎯 **Why Choose InvestIQ?**  

✅ **Real-Time Data** – Up-to-the-minute crypto prices and trends.  
✅ **Market Cap Tracking** – Know the **total value** of each crypto.  
✅ **Trading Volume Insights** – See **how much is being traded** daily.  
✅ **Multi-Currency Support** – View prices in **USD** & **INR**.  
✅ **24h Price Change** – Easily spot **gains** or **losses**.  
✅ **Open-Source & Customizable** – Modify & extend as needed.  

## 🛠 **About the Developer**  

👨‍💻 **Developer:** UjjwalSaini07 (ujjwalsaini.dev), Gayatri Singh
❤️ *Made with passion to keep you updated with crypto trends!*  

🔗 **Follow for More Crypto Insights!**  

`;

    writeFileSync("README.md", content);
    console.log("✅ README.md updated at", timestamp);

    return { success: true, timestamp, data };
  } catch (error) {
    if (error instanceof Error) {
      console.error("❌ Error fetching or processing data:", error.message);
    } else {
      console.error("❌ Unexpected error:", error);
    }
    return { success: false, error };
  }
}

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Express Server
const app = express();
const PORT = process.env.PORT || 4000;

// 🌍 Root route
app.get("/", (_req: Request, res: Response) => {
  res.json({
    message: "🚀 Workflow service is running",
    endpoints: {
      health: "/health",
      run: "/run",
      info: "/info"
    },
    timestamp: new Date().toISOString()
  });
});

// ❤️ Health check route
app.get("/health", (_req: Request, res: Response) => {
  res.json({
    status: "ok",
    service: "workflows",
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// ⚡ Trigger workflow manually
app.get("/run", async (_req: Request, res: Response) => {
  const result = await getValues();
  if (result.success) {
    res.json({
      status: "success",
      message: "README updated successfully",
      lastUpdated: result.timestamp
    });
  } else {
    res.status(500).json({
      status: "error",
      message: "Failed to update README",
      error: result.error
    });
  }
});

// ℹ️ Service info route
app.get("/info", (_req: Request, res: Response) => {
  res.json({
    service: "InvestIQ Workflows",
    description: "Handles crypto data fetching & README updates",
    version: "1.0.2",
    author1: "Ujjwal Saini",
    author2: "Gayatri Singh",
    repo: "https://github.com/UjjwalSaini07/InvestIQ"
  });
});

app.listen(PORT, () => {
  console.log(`🌍 Workflow service running at http://localhost:${PORT}`);
});
