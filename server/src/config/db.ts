import Mongoose from "mongoose";
import logger from "./logger";

export const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI;
    if(!uri) throw new Error("Mongo URI not found");
    await Mongoose.connect(uri);
    logger.info("Database Connected", {
        uri: uri,
    })
} catch (err) {
    logger.error("Database Connection Failed", {
        uri: process.env.MONGO_URI,
        error: {
            message: (err as Error).message,
            stack: (err as Error).stack,
        },
    })
    process.exit(1);
  }
};