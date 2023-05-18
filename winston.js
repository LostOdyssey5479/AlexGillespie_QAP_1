const winston = require("winston");

// Create a Winston logger instance
const logger = winston.createLogger({
  level: "info", // Set the logging level
  format: winston.format.simple(), // Specify the log format
  transports: [
    new winston.transports.Console(), // Log to the console
    new winston.transports.File({ filename: "app.log" }), // Log to a file
  ],
});

// Log some messages
logger.info("This is an informational message.");
logger.warn("This is a warning message.");
logger.error("This is an error message.");
