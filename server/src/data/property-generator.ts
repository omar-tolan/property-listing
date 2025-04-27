import { seedProperties } from "./property-seeds";
import { connectDB } from "../config/db";
import dotenv from "dotenv";
import mongoose from "mongoose";

const generateProperties = async () => {
    try {
        dotenv.config();
        await connectDB();
        console.log("Connected to database");
        await seedProperties();
        console.log("Properties seeded successfully");
    } catch (error) {
        console.error("Failed to seed properties:", {
            error: error instanceof Error ? error.message : 'Unknown error',
            stack: error instanceof Error ? error.stack : undefined
        });
    } finally {
        await mongoose.connection.close();
        process.exit();
    }
}

// Only run if this file is being executed directly
if (require.main === module) {
    generateProperties();
}
