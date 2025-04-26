import Mongoose from "mongoose";
import logger from "./logger";
import { InternalError } from "../core/api-error";

export const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri)
      throw new InternalError("Mongo URI not found", {
        uri: uri,
      });
    await Mongoose.connect(uri);
    logger.info("Database Connected", {
      uri: uri,
    });
  } catch (err) {
    logger.error("Database Connection Failed", {
      uri: process.env.DEV_MONGO_URI != "" ? process.env.DEV_MONGO_URI : process.env.MONGO_URI,
      error: {
        message: (err as Error).message,
        stack: (err as Error).stack,
      },
    });
    process.exit(1);
  }
};
