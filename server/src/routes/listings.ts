import { Router } from "express";
import { getListings, createListing, getPropertyDetails } from "../controllers/listings";

const listingsRouter = Router();

listingsRouter.get("/all", getListings);
listingsRouter.get("/:id", getPropertyDetails);
listingsRouter.post("/", createListing);


export default listingsRouter;
