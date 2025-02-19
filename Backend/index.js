import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./db/serverdb.js";
import { app } from "./app.js";
import { morganLogger } from "./middlewares/loggers.js";
import AuthRoutes from "./routers/auth/authRoutes.js";
import { corsOptions } from "./config/cors.js";
import globalErrorHandler from "./middlewares/globalErrorHandler.js";
import versionHandler from "./middlewares/versionHandler.js";
import UniversalRateLimiter from "./middlewares/rate-limiter.js";

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

// Global Error Handler
app.use(globalErrorHandler);

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`⚙️ Server is running at port: ${PORT}`);
});
