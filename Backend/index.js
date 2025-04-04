const dotenv = require("dotenv");
const express = require("express");
const axios = require('axios');
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./db/serverdb.js");
const { app } = require("./app.js");
// const { morganLogger } = require("./middlewares/loggers.js");
const rateLimit = require('express-rate-limit');
const AuthRoutes = require("./routers/auth/authRoutes.js");
const { corsOptions } = require("./config/cors");
const globalErrorHandler = require("./middlewares/globalErrorHandler.js");
const versionHandler = require("./middlewares/versionHandler.js");
const UniversalRateLimiter = require("./middlewares/rate-limitter.js");
const schedule = require("node-schedule");
const path = require("path");
const { spawn } = require("child_process");
const Stock = require("./models/stocks.model.js");

// Load environment variables
dotenv.config({ path: '../.env' });

// Connect to MongoDB
connectDB()
    .then(() => console.log("✅ MongoDB connection established"))
    .catch((err) => {
        console.error("❌ MongoDB connection failed:", err);
        process.exit(1);
    });

// Middleware setup
app.use(cors(corsOptions));
app.options("", cors(corsOptions))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(morganLogger);
// app.use(versionHandler("v1"));
app.use(UniversalRateLimiter(100, 15 * 60 * 1000));

// Health check route
app.get("/api/v1", (req, res) => {
    res.send("InvestIQ is Active");
});

// Routes
app.use("/api/v1/auth", AuthRoutes);

app.set('trust proxy', 1); // Enable proxy trust

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per window
});

app.use(limiter);

// Function to run the Python script
const runPythonScript = () => {
    return new Promise((resolve, reject) => {
        // const scriptPath = path.resolve(__dirname, '../src/components/webScrappedData/WebScrappingData.py'); //!Frontend Load
        const scriptPath = path.resolve(__dirname, './utlis/ScrapedData/DataWebScrapping.py'); //!Backend Load
        const process = spawn('python', [scriptPath]);

        process.stdout.on('data', (data) => {
            console.log(`Output: ${data.toString()}`);
        });

        process.stderr.on('data', (data) => {
            console.error(`Error: ${data.toString()}`);
        });

        process.on('close', (code) => {
            if (code === 0) {
                resolve('Python script executed successfully.');
            } else {
                reject(new Error(`Python script exited with code ${code}`));
            }
        });
    });
};

// Schedule the script to run automatically
const schedulePythonScript = () => {
    const rule = new schedule.RecurrenceRule();
    rule.dayOfWeek = [new schedule.Range(1, 5)]; // Monday to Friday
    rule.hour = [new schedule.Range(9, 15)]; // From 9 AM to 3 PM
    rule.minute = [0, 10, 20, 30, 40, 50]; // Every 10 minutes

    schedule.scheduleJob(rule, async () => {
        const now = new Date();
        const startTime = new Date(now.setHours(9, 30, 0, 0)); // 9:30 AM
        const endTime = new Date(now.setHours(15, 30, 0, 0)); // 3:30 PM

        if (now >= startTime && now <= endTime) {
            try {
                console.log("Running Python script at:", new Date().toLocaleString());
                await runPythonScript();
            } catch (err) {
                console.error("Error executing Python script:", err);
            }
        }
    });
};

// Start the scheduler
schedulePythonScript();

// Endpoint to run the Python script manually
app.get('/api/v1/run-script', async (req, res) => {
    try {
        await runPythonScript();
        res.json({ success: true, message: 'Python script executed successfully.' });
    } catch (err) {
        res.json({ success: false, error: err.message });
    }
});

// API Route to Fetch Stocks
app.get('/api/v1/fetchStocksData', async (req, res) => {
    try {
        res.setHeader("Cache-Control", "no-store");

        const stocks = await Stock.find({}, { 
            ticker: 1, 
            current_price: 1, 
            dividend_yield: 1, 
            exchange: 1, 
            face_value: 1, 
            high: 1, 
            low: 1, 
            market_cap: 1, 
            previous_close: 1, 
            _id: 0 
        });

        if (!stocks || stocks.length === 0) {
            console.warn("No stock data available in the database.");
            return res.status(404).json({ error: "No stock data available." });
        }

        res.status(200).json(stocks);
    } catch (error) {
        console.error("Error fetching stock data:", error);
        res.status(500).json({ error: "Failed to fetch stocks" });
    }
});

app.get('/api/v1/fetchtradenews', async (req, res) => {
    try {
        const apiKey = process.env.VITE_NEWS_APIKEY;
        if (!apiKey) {
            return res.status(500).json({ error: "API Key is missing in the backend" });
        }

        const url = `https://newsapi.org/v2/everything?q=trading+stocks+bitcoin&from=us,in&sortBy=publishedAt&language=en&apiKey=${apiKey}`;
        const response = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0', // Avoid 426 errors
                'Connection': 'keep-alive'
            }
        });
        res.status(200).json(response.data);
    } catch (error) {
        console.error("Error fetching news:", error);
        res.status(error.response?.status || 500).json({ error: "Failed to fetch news" });
    }
});

// Global Error Handler
app.use(globalErrorHandler);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`⚙️ Server is running at port: ${PORT}`);
});
