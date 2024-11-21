import mongoose, { Document, Schema } from "mongoose";

export interface ISpot extends Document {
  name: string;
  nickname: string;
  description?: string;
  address: {
    country: string;
    street: string;
    suburb: string;
    zipCode: string;
    country_code: string;
    location: {
      mapUrl: string;
      iframe: string;
      plusCode: string;
      coordinates: {
        latitude: number;
        longitude: number;
      };
      isLocationExact: boolean;
    };
  };
  type: string;
  amenities: string[];
  categories: {
    ramps?: {
      number: number;
      type: string;
    };
    bars?: {
      number: number;
      type: string;
    };
    bumps?: {
      number: number;
      type: string;
    };
    pools?: {
      number: number;
      type: string;
    };
  };
  characteristics?: Record<string, any>;
  notes?: string;
  services?: Record<string, any>;
  images: {
    thumbnailUrl?: string;
    mediumUrl?: string;
    pictureUrl: string;
    xlPictureUrl?: string;
  };
  photos: {
    thumbnailUrl?: string;
    mediumUrl?: string;
    pictureUrl: string;
    xlPictureUrl?: string;
  };
  reviews: {
    stars: number;
    comment?: string;
    conditions?: string;
  };
}

const spotSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    nickname: { type: String },
    description: { type: String },
    address: {
      country: { type: String, required: true },
      street: { type: String },
      suburb: { type: String },
      zipCode: { type: String },
      country_code: { type: String },
      location: {
        mapUrl: { type: String },
        iframe: { type: String },
        plusCode: { type: String },
        coordinates: {
          latitude: { type: Number, required: true },
          longitude: { type: Number, required: true },
        },
        isLocationExact: { type: Boolean, required: true },
      },
    },
    type: { type: String, required: true },
    amenities: [{ type: String }],
    categories: {
      ramps: {
        number: { type: Number },
        type: { type: String },
      },
      bars: {
        number: { type: Number },
        type: { type: String },
      },
      bumps: {
        number: { type: Number },
        type: { type: String },
      },
      pools: {
        number: { type: Number },
        type: { type: String },
      },
    },
    characteristics: { type: Map, of: Schema.Types.Mixed },
    notes: { type: String },
    services: { type: Map, of: Schema.Types.Mixed },
    images: {
      thumbnailUrl: { type: String },
      mediumUrl: { type: String },
      pictureUrl: { type: String, required: true },
      xlPictureUrl: { type: String },
    },
    photos: {
      thumbnailUrl: { type: String },
      mediumUrl: { type: String },
      pictureUrl: { type: String, required: true },
      xlPictureUrl: { type: String },
    },
    reviews: {
      stars: { type: Number, required: true },
      comment: { type: String },
      conditions: { type: String },
    },
  },
  { timestamps: true }
);

const Spot = mongoose.model<ISpot>("Spot", spotSchema);

export default Spot;
