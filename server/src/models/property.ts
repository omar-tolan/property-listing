import mongoose, { Document, Schema } from "mongoose";

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
    parkingArea: number;
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
      parkingArea: {
        type: Number,
        default: 0,
        min: 0,
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
