import dotenv from "dotenv";
import path from "path";
import logger from "./config/logger";
import { connectDB } from "./config/db";
import {seedProperties} from "./data/property-seeds";
const app = require("./app");

const startServer = async () => {
  // const devEnvPath = path.resolve(__dirname, "../..", "dev.env");
  // const dockerEnvPath = path.join(process.cwd(), "docker.env");
  // const devResult = dotenv.config({ path: devEnvPath });
  // if (devResult.error || !process.env.MONGO_URI) {
  //   console.log("error loading dev.env");
  //   dotenv.config({ path: dockerEnvPath });
  // }
  // logger.info("Environment loaded", {
  //   mongoUri: process.env.MONGO_URI ? "Set" : "Not Set",
  //   port: process.env.PORT,
  //   nodeEnv: process.env.NODE_ENV,
  //   dockerEnvPath: dockerEnvPath,
  //   devEnvPath: devEnvPath,
  // });
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
