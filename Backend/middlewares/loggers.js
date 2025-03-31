const { createLogger, format, transports } = require("winston");
const DailyRotateFile = require("winston-daily-rotate-file");
// const path = require("path");
const morgan = require("morgan");

const { combine, timestamp, json, printf } = format;

// Define a custom log format
const consoleLogFormat = printf(({ level, message, timestamp }) => {
	return `${timestamp} [${level}]: ${message}`;
});

// Configure log rotation
// const fileTransport = new DailyRotateFile({
// 	filename: path.join("./logs/app-%DATE%.log"),
// 	datePattern: "YYYY-MM-DD",
// 	zippedArchive: true, // Compress old logs
// 	maxSize: "10m", // Max log file size (10MB)
// 	maxFiles: "14d", // Keep logs for 14 days
// 	format: combine(timestamp(), json()), // JSON format for structured logs
// });

const logger = createLogger({
	level: "info",
	format: combine(timestamp(), json()), // JSON format for consistent logs
	transports: [
		new transports.Console({
			format: combine(timestamp(), consoleLogFormat), // Console logs formatted for readability
		}),
		// fileTransport, // Daily log rotation
	],
});

const morganFormat = ":method :url :status :response-time ms";

const morganLogger = morgan(morganFormat, {
  stream: {
    write: (message) => {
      const logObject = {
        method: message.split(" ")[0],
        url: message.split(" ")[1],
        status: message.split(" ")[2],
        responseTime: message.split(" ")[3],
      };
      logger.info(JSON.stringify(logObject));
    },
  },
});

module.exports = { morganLogger };
