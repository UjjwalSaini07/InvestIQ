const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./db/serverdb.js");
const { app } = require("./app.js");
const { morganLogger } = require("./middlewares/loggers.js");
const AuthRoutes = require("./routers/auth/authRoutes.js");
const { corsOptions } = require("./config/cors");
const globalErrorHandler = require("./middlewares/globalErrorHandler.js");
const versionHandler = require("./middlewares/versionHandler.js");
const UniversalRateLimiter = require("./middlewares/rate-limitter.js");
const path = require("path");
const { spawn } = require("child_process");

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
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morganLogger);
app.use(versionHandler("v1"));
app.use(UniversalRateLimiter(100, 15 * 60 * 1000));

// Health check route
app.get("/api/v1/", (req, res) => {
    res.send("InvestIQ is Active");
});

// Routes
app.use("/api/v1/auth", AuthRoutes);

// Function to run the Python script
const runPythonScript = () => {
    return new Promise((resolve, reject) => {
        const scriptPath = path.resolve(__dirname, '../src/components/webScrappedData/WebScrappingData.py');
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

// Endpoint to run the Python script
app.get('/api/v1/run-script', async (req, res) => {
    try {
        await runPythonScript();
        res.json({ success: true, message: 'Python script executed successfully.' });
    } catch (err) {
        res.json({ success: false, error: err.message });
    }
});

// Global Error Handler
app.use(globalErrorHandler);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`⚙️ Server is running at port: ${PORT}`);
});
