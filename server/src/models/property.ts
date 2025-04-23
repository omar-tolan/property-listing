import mongoose, { Document, Schema } from "mongoose";
 /**
  * @swagger
  * components:
  *   schemas:
  *     Property:
  *       type: object
  *       required:
  *         - title
  *         - type
  *         - price
  *         - description
  *         - images
  *         - area
  *         - features
  *         - finishing
  *         - location
  *         - compound
  *         - paymentPlan
  *       properties:
  *         title:
  *           type: string
  *           description: The title of the property
  *           example: Luxury Villa in New Cairo 
  *         type:
  *           type: string
  *           description: The type of the property
  *           enum: ["Apartment", "House", "Villa", "Townhouse", "Penthouse", "Chalet"]
  *           example: Villa
  *         price:
  *           type: number
  *           description: Unit overall price
  *           example: 1000000
  *         description:
  *           type: string
  *           example: Spacious villa with modern design and premium finishing
  *         images:
  *            type: array
  *            description: Array of image URLs for the property
  *            items:
  *              type: string
  *              example: ["pic1.jpg", "pic2.jpg"]
  *         area:
  *           type: object
  *           description: Contains all areas
  *           properties:
  *             unit:
  *               type: number
  *               description: Unit Area
  *               example: 500
  *             garden:
  *               type: number
  *               description: Garden Area
  *               example: 100
  *             terrace:
  *               type: number
  *               description: Terrace Area
  *               example: 50
  *             roof:
  *               type: number
  *               description: Roof Area
  *               example: 200
  *             parkingArea:
  *               type: number
  *               description: Parking Area
  *               example: 200
  *         features:
  *           type: object
  *           description: Property features
  *           properties:
  *             bathrooms:
  *               type: number
  *               description: Number of bathrooms
  *               example: 4
  *             bedrooms:
  *               type: number
  *               description: Number of bedrooms
  *               example: 4
  *             floors:
  *               type: number
  *               description: Number of floors
  *               example: 2
  *         finishing:
  *           type: string
  *           description: Unit Finishing
  *           enum: ["Fully Finished", "Semi Finished", "Unfinished"]
  *           example: Fully Finished
  *         plans:
  *           type: array
  *           description: Array of image urls for unit plans
  *           items:
  *             type: string
  *             example: ["plan1.jpg", "plan2.jpg"]
  *         location:
  *           type: object
  *           description: Property location object with location type and coordinates
  *           properties:
  *             type:
  *               type: string
  *               example: Point
  *               enum: ["Point"]
  *             coordinates:
  *               type: array
  *               items:
  *                 type: number
  *                 example: [234.112, 214.244]
  *         compound:
  *           type: object
  *           description: Compound Data
  *           properties:
  *             name:
  *               type: string
  *               description: Compound Name
  *               example: Compound New Cairo
  *             launchDate:
  *               type: string
  *               format: date-time
  *               description: project launch date
  *               example: "2026-04-01T00:00:00Z"
  *             amenities:
  *               type: array
  *               description: An array of available unit amenities
  *               items:
  *                 type: string
  *                 example: ["Parking Area", "Roof Top"]
  *         paymentPlan:
  *           type: object
  *           description: Available payment plans
  *           properties:
  *             installment:
  *               type: number
  *               description: Installment percentage
  *               example: 15
  *             downPayment:
  *               type: number
  *               description: Down Payment percentage
  *               example: 30
  *         createdAt:
  *           type: string
  *           format: date-time 
  *           example: 2023-01-01T12:00:00Z
  *         updatedAt:
  *           type: string
  *           format: date-time 
  *           example: 2023-01-01T12:00:00Z
  */

interface IProperty extends Document {
  title: string;
  type: string;
  price: number;
  description: string;
  images: string[];
  area: {
    unit: number;
    garden: number;
    terrace: number;
    roof: number;
  };
  features: {
    bathrooms: number;
    bedrooms: number;
    floors: number;
  };
  finishing: string;
  plans?: string[];
  location: {
    type: string;
    coordinates: number[];
  };
  compound: {
    name: string;
    launchDate: Date;
    amenities: string[];
  };
  paymentPlan: {
    installment: number,
    downPayment: number
  };
  createdAt: Date;
  updatedAt: Date;
}

const propertySchema: Schema<IProperty> = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      required: true,
      enum: ["Apartment", "House", "Villa", "Townhouse", "Penthouse", "Chalet"],
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    location: {
      type: {
        type: String,
        enum: ["Point"],
        required: true,
      },
      coordinates: {
        type: [Number],
        required: true,
      },
    },
    description: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
    area: {
      unit: {
        type: Number,
        required: true,
        min: 0,
      },
      garden: {
        type: Number,
        default: 0,
        min: 0,
      },
      terrace: {
        type: Number,
        default: 0,
        min: 0,
      },
      roof: {
        type: Number,
        default: 0,
        min: 0,
      },
    },
    features: {
      bathrooms: {
        type: Number,
        required: true,
        min: 0,
      },
      bedrooms: {
        type: Number,
        required: true,
        min: 0,
      },
      floors: {
        type: Number,
        default: 1,
        min: 1,
      },
    },
    finishing: {
      type: String,
      required: true,
      enum: ["Fully Finished", "Semi Finished", "Unfinished"],
    },
    plans: {
      type: [String],
      required: false,
    },
    compound: {
      name: {
        type: String,
        required: true,
        trim: true
      },
      launchDate: {
        type: Date,
        required: true,
      },
      amenities: {
        type: [String],
        required: true,
      },
    },
    paymentPlan: {
      installment: {
        type: Number,
        required: true,
        default: 0
      },
      downPayment: {
        type: Number,
        required: true,
        default: 0
      },
    },
  },
  { timestamps: true }
);

propertySchema.index({ location: "2dsphere" });
propertySchema.index({ "compound.name": 1 });
propertySchema.index({ type: 1 });
propertySchema.index({price: 1})

export const Property = mongoose.model<IProperty>("Property", propertySchema);
