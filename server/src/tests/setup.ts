import mongoose from "mongoose";
import dotenv from "dotenv";
import { seedProperties } from "../data/property-seeds";
import { cleanUpDb } from "./utils/cleanup";

dotenv.config({ path: "./dev.env" });

const testDBUrl = process.env.MONGO_URI;

if(!testDBUrl){
  throw new Error("MONGOOSE_URL is not defined in environment variables")
}

beforeAll(async() => {
    try{
        await mongoose.connect(testDBUrl)
        console.log("Connected to test database")
        await seedProperties()
    }catch(error){
        throw new Error("Failed to connect to test database")
    }
})

afterAll(async() => {
    try{
        await cleanUpDb()        
        await mongoose.connection.close()        
    }catch(error){
        throw new Error("Failed to close test database connection")
    }
})