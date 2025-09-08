const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const cors = require("cors")({ origin: true });

/**
 * HTTP Cloud Function
 * Endpoint: https://<your-region>-<project-id>.cloudfunctions.net/hello
 */
exports.hello = onRequest((req, res) => {
  cors(req, res, () => {
    try {
      logger.info("Incoming request", {
        method: req.method,
        ip: req.ip,
        path: req.path,
        time: new Date().toISOString(),
      });

      res.status(200).json({
        success: true,
        message: "Hello from InvestIQ Firebase Function 🚀",
        data: {
          method: req.method,
          timestamp: Date.now(),
        },
      });
    } catch (error) {
      logger.error("Error in hello function", error);
      res.status(500).json({
        success: false,
        error: "Internal Server Error",
      });
    }
  });
});
