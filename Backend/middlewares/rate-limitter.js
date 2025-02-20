const rateLimit = require("express-rate-limit");
const logger = require("./loggers");

const Universalratelimiter = (maxRequests, maxTime) =>
  rateLimit({
    windowMs : maxTime,
    max: maxRequests,
    standardHeaders: true,
    legacyHeaders: false,
    handler: (req, res) => {
      logger.warn(`Rate limit exceeded for IP: ${req.ip} | Route: ${req.originalUrl}`);
      res.status(429).json({
        success: false,
        error: "Too many requests. Please wait before retrying.",
      });
    },
  });

module.exports = Universalratelimiter ;
