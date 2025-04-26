import { Request, Response } from "express";
import { Property } from "../models/property";
import { BadRequestError, NotFoundError } from "../core/api-error";
import { ResourceCreatedResponse, SuccessResponse } from "../core/responses";
import asyncHandler from "../utils/async-handler";
import logger from "../config/logger";

/**
 * @swagger
 * tags:
 *   name: Listings
 *   description: Property listing management
 */

/**
 * @swagger
 * tags:
 *   name: Listings
 *   description: Property listing management
 */

interface ListingQueryParams {
  type?: string;
  title?: string;
  minPrice?: string;
  maxPrice?: string;
  location?: string;
  sortBy?: "price" | "createdAt";
  sortDir?: "asc" | "desc";
  page?: string;
  limit?: string;
}

type ListingsQuery = {
  type?: object;
  title?: object;
  price?: Record<string, number>;
  location?: Record<string, any>;
};

type ListingSortOptions = {
  price?: 1 | -1;
  createdAt?: 1 | -1;
};


/**
 * @swagger
 * /listings/all:
 *   get:
 *     summary: Get a list of property listings
 *     description: Retrieves property listings with filtering, sorting, and pagination
 *     tags: [Listings]
 *     parameters:
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *         description: Filter by property type
 *       - in: query
 *         name: title
 *         schema:
 *           type: string
 *         description: Search by title
 *       - in: query
 *         name: minPrice
 *         schema:
 *           type: number
 *         description: Minimum price
 *       - in: query
 *         name: maxPrice
 *         schema:
 *           type: number
 *         description: Maximum price
 *       - in: query
 *         name: location
 *         schema:
 *           type: string
 *         description: Comma-separated longitude and latitude
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *           enum: [price, createdAt]
 *         description: Field to sort by
 *       - in: query
 *         name: sortDir
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *         description: Sort direction
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *           maximum: 50
 *         description: Items per page
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Property'
 *                 pagination:
 *                   type: object
 *                   properties:
 *                     page:
 *                       type: integer
 *                     limit:
 *                       type: integer
 *                     total:
 *                       type: integer
 *                     pages:
 *                       type: integer
 *       400:
 *         description: Bad Request
 *       500:
 *         description: Internal Server Error
 */
export const getListings = asyncHandler(async (
  req: Request<{}, {}, {}, ListingQueryParams>,
  res: Response
) => {
  const page = parseInt(req.query.page || "1");
  const limit = Math.min(parseInt(req.query.limit || "10"), 50);
  const skip = (page - 1) * limit;

  const query: ListingsQuery = {};
  const sortOptions: ListingSortOptions = {};
logger.info("Query", req.query)
if (req.query.type) {
  query.type = { $in: req.query.type };
}

  if (req.query.title) {
    query.title = { $regex: req.query.title, $options: 'i' };
}

  // Handle price range
  if (req.query.minPrice || req.query.maxPrice) {
    query.price = {};
    if (req.query.minPrice) {
      query.price.$gte = Number(req.query.minPrice);
    }
    if (req.query.maxPrice) {
      query.price.$lte = Number(req.query.maxPrice);
    }
  }

  // Handle location
  if (req.query.location) {
    const [lng, lat] = req.query.location.split(",").map((coord) => {
      const num = Number(coord);
      if (isNaN(num)) throw new BadRequestError("Invalid coordinates", {
        location: req.query.location,
      });
      return num;
    });

    query.location = {
      $near: {
        $geometry: {
          type: "Point",
          coordinates: [lng, lat],
        },
      },
    };
  }

  // Build sort configuration
  if (req.query.sortBy && req.query.sortDir) {
    if (req.query.sortBy === "price") {
      sortOptions.price = req.query.sortDir === "desc" ? -1 : 1;
    } else if (req.query.sortBy === "createdAt") {
      sortOptions.createdAt = req.query.sortDir === "desc" ? -1 : 1;
    }
  }

  // Execute query with pagination
  const [listings, total] = await Promise.all([
    Property.find(query).sort(sortOptions).skip(skip).limit(limit),
    Property.countDocuments(query),
  ]);

  new SuccessResponse("Listings fetched successfully", {
    data: listings,
    pagination: {
      page,
      limit,
      total,
      pages: Math.ceil(total / limit),
    },
  }).send(res);
});

/**
 * @swagger
 * /listings/{id}:
 *   get:
 *     summary: Get property details by ID
 *     description: Retrieves detailed information about a specific property
 *     tags: [Listings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The property ID (MongoDB ObjectId)
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Unit details fetched successfully"
 *                 data:
 *                   $ref: '#/components/schemas/Property'
 *       400:
 *         description: Bad Request - Invalid ID format
 *       404:
 *         description: Not Found - Property with the specified ID does not exist
 *       500:
 *         description: Internal Server Error
 */
export const getPropertyDetails = asyncHandler(async(req: Request, res: Response) => {
  const unitId = req.params.id;
  const validId = /^[0-9a-fA-F]{24}$/.test(unitId);
  if(!validId) throw new BadRequestError("Invalid ID", { unitId });
  const unit = await Property.findById(unitId);
  if(!unit) throw new NotFoundError("Unit not found", { unitId });
  new SuccessResponse("Unit details fetched successfully", unit).send(res);
});

/**
 * @swagger
 * /listings:
 *   post:
 *     summary: Create a new property listing
 *     description: Creates a new property listing with the provided details
 *     tags: [Listings]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Property'
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Listing created successfully"
 *                 data:
 *                   $ref: '#/components/schemas/Property'
 *       400:
 *         description: Bad Request - Invalid request body
 *       500:
 *         description: Internal Server Error
 */
export const createListing = asyncHandler(async (req: Request, res: Response) => {
  const listing = req.body;
  if(Object.keys(listing).length === 0) throw new BadRequestError("Invalid request body", { listing });
  const newListing = await Property.create(listing);
  new ResourceCreatedResponse("Listing created successfully", newListing).send(res);
});
