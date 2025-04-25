import winston, { format, transports } from 'winston';
import path from 'path';
import fs from 'fs'

const logDir = path.join(process.cwd(), 'logs');

if(!fs.existsSync(logDir)){
  fs.mkdirSync(logDir);
}

const logger = winston.createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    format.errors({ stack: true }),
    format.printf(({ level, message, timestamp, ...metadata }) => {
      let msg = `${timestamp} [${level}] : ${message}`;
      if (Object.keys(metadata).length > 0) {
        // Safely handle circular references
        const sanitizedMetadata = JSON.stringify(metadata, (key, value) => {
          if (key === 'socket' || key === 'parser') {
            return '[Circular]';
          }
          return value;
        });
        msg += ` ${sanitizedMetadata}`;
      }
      return msg;
    })
  ),
  transports: [
    // Container console logs
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ level, message, timestamp, ...metadata }) => {
          let msg = `${timestamp} [${level}] : ${message}`;
          if (Object.keys(metadata).length > 0) {
            msg += ` ${JSON.stringify(metadata)}`;
          }
          return msg;
        })
      )
    }),
    // Error log file
    new transports.File({ 
      filename: path.join(logDir, 'error.log'),
      level: 'error',
      maxsize: 5242880, // 5MB
      maxFiles: 5,
    }),
    
    // Combined log file
    new transports.File({ 
      filename: path.join(logDir, 'combined.log'),
      maxsize: 5242880, // 5MB
      maxFiles: 5,
    })
  ],
  // Prevent winston from exiting on error
  exitOnError: false
});

// Add exception handling
logger.exceptions.handle(
  new transports.File({ filename: path.join(logDir, 'exceptions.log') })
);

// Add rejection handling
logger.rejections.handle(
  new transports.File({ filename: path.join(logDir, 'rejections.log') })
);

export default logger;
