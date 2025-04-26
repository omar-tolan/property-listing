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
  *           example: "Luxury Villa in New Cairo"
  *         type:
  *           type: string
  *           description: The type of the property
  *           enum: ["Apartment", "House", "Villa", "Townhouse", "Penthouse", "Chalet"]
  *           example: "Villa"
  *         price:
  *           type: number
  *           description: Unit overall price
  *           minimum: 0
  *           example: 1000000
  *         description:
  *           type: string
  *           description: Detailed description of the property
  *           example: "Spacious villa with modern design and premium finishing"
  *         images:
  *           type: array
  *           description: Array of image URLs for the property
  *           items:
  *             type: string
  *           example: ["https://cdn.pixabay.com/photo/2016/11/29/03/53/architecture-1867187_1280.jpg", "https://cdn.pixabay.com/photo/2016/11/29/03/53/architecture-1867187_1280.jpg"]
  *         area:
  *           type: object
  *           description: Contains all area measurements
  *           required:
  *             - unit
  *           properties:
  *             unit:
  *               type: number
  *               description: Unit Area in square meters
  *               minimum: 0
  *               example: 500
  *             garden:
  *               type: number
  *               description: Garden Area in square meters
  *               minimum: 0
  *               default: 0
  *               example: 100
  *             terrace:
  *               type: number
  *               description: Terrace Area in square meters
  *               minimum: 0
  *               default: 0
  *               example: 50
  *             roof:
  *               type: number
  *               description: Roof Area in square meters
  *               minimum: 0
  *               default: 0
  *               example: 200
  *             parkingArea:
  *               type: number
  *               description: Parking Area in square meters
  *               minimum: 0
  *               default: 0
  *               example: 50
  *         features:
  *           type: object
  *           description: Property features
  *           required:
  *             - bathrooms
  *             - bedrooms
  *           properties:
  *             bathrooms:
  *               type: number
  *               description: Number of bathrooms
  *               minimum: 0
  *               example: 4
  *             bedrooms:
  *               type: number
  *               description: Number of bedrooms
  *               minimum: 0
  *               example: 4
  *             floors:
  *               type: number
  *               description: Number of floors
  *               minimum: 1
  *               default: 1
  *               example: 2
  *         finishing:
  *           type: string
  *           description: Unit Finishing
  *           enum: ["Fully Finished", "Semi Finished", "Unfinished"]
  *           example: "Fully Finished"
  *         plans:
  *           type: array
  *           description: Array of image URLs for unit floor plans
  *           items:
  *             type: string
  *           example: ["floor1.jpg", "floor2.jpg"]
  *         location:
  *           type: object
  *           description: Property location object with location type and coordinates
  *           required:
  *             - title
  *             - type
  *             - coordinates
  *           properties:
  *             title:
  *               type: string
  *               description: Location title or area name
  *               example: "New Cairo"
  *             type:
  *               type: string
  *               enum: ["Point"]
  *               description: GeoJSON type for the location
  *               example: "Point"
  *             coordinates:
  *               type: array
  *               description: Longitude and latitude coordinates [lng, lat]
  *               items:
  *                 type: number
  *               example: [31.4913, 30.0171]
  *         compound:
  *           type: object
  *           description: Compound or development information
  *           required:
  *             - name
  *             - launchDate
  *             - amenities
  *           properties:
  *             name:
  *               type: string
  *               description: Compound Name
  *               example: "Lake View Compound"
  *             launchDate:
  *               type: string
  *               format: date-time
  *               description: Project launch date
  *               example: "2023-01-01T00:00:00Z"
  *             amenities:
  *               type: array
  *               description: An array of available compound amenities
  *               items:
  *                 type: string
  *               example: ["Swimming Pool", "Gym", "Security", "Parking"]
  *         paymentPlan:
  *           type: object
  *           description: Available payment plans
  *           required:
  *             - installment
  *             - downPayment
  *           properties:
  *             installment:
  *               type: number
  *               description: Installment percentage
  *               default: 0
  *               example: 15
  *             downPayment:
  *               type: number
  *               description: Down Payment percentage
  *               default: 0
  *               example: 30
  *         createdAt:
  *           type: string
  *           format: date-time
  *           description: Date and time when the property was created
  *           example: "2023-01-01T12:00:00Z"
  *         updatedAt:
  *           type: string
  *           format: date-time
  *           description: Date and time when the property was last updated
  *           example: "2023-01-01T12:00:00Z"
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
    parkingArea: number;
  };
  features: {
    bathrooms: number;
    bedrooms: number;
    floors: number;
  };
  finishing: string;
  plans?: string[];
  location: {
    title: string;
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
      title: {
        type: String,
        required: true,
        trim: true,
      },
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
      parkingArea: {
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
