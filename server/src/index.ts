import dotenv from "dotenv";
// Load environment variables from .env file
dotenv.config();
import logger from "./config/logger";
import { connectDB } from "./config/db";
import {seedProperties} from "./data/property-seeds";
const app = require("./app");

const startServer = async () => {
  const port = process.env.PORT || 3333;
  connectDB();
  await seedProperties();
  app.listen(port, () => {
    logger.info("Server Started", {
      port: port,
    });
    console.log(`Server started on port ${port}`);
  });
};

startServer().catch((error: Error) => {
  logger.error("Server Start Failed", {
    message: error.message,
    stack: error.stack,
  });
});
