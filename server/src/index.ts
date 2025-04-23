import dotenv from "dotenv";
import path from "path";
import logger from "./config/logger";
import { connectDB } from "./config/db";

const app = require("./app");

const startServer = async () => {
  dotenv.config({ path: path.join(__dirname, "../dev.env") });
  const port = process.env.PORT || 3333;
  connectDB();

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
