import mongoose, { Document, Schema } from "mongoose";

export interface IRoutes extends Document {
  name: string;
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
}

const spotSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
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
  },
  { timestamps: true }
);

const Routes = mongoose.model<IRoutes>("Routes", spotSchema);

export default Routes;
