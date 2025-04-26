import { Router } from "express";
import { getListings, createListing, getPropertyDetails } from "../controllers/listings";

/**
 * @swagger
 * /listings:
 *   post:
 *     tags: [Listings]
 *     summary: Create a new property listing
 *     description: Creates a new property with the provided details
 *
 * /listings/all:
 *   get:
 *     tags: [Listings]
 *     summary: Get all property listings
 *     description: Retrieves a list of properties with optional filtering and pagination
 *
 * /listings/{id}:
 *   get:
 *     tags: [Listings]
 *     summary: Get property details
 *     description: Retrieves detailed information about a specific property by ID
 */

const listingsRouter = Router();

// Get all listings with optional filtering
listingsRouter.get("/all", getListings);

// Get property details by ID
listingsRouter.get("/:id", getPropertyDetails);

// Create a new property listing
listingsRouter.post("/", createListing);

export default listingsRouter;
