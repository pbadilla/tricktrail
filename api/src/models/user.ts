import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  name: string;
  nickname: string;
  description?: string;
  email: string;
  phone: string;
  photos: {
    thumbnailUrl?: string;
    mediumUrl?: string;
    pictureUrl: string;
    xlPictureUrl?: string;
  };
  sports: string[];
  communications: {
    wantIt: boolean;
    via: string;
  };
  termsAndConditions: boolean;
}

const userSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    nickname: { type: String, required: true },
    description: { type: String },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    photos: {
      thumbnailUrl: { type: String },
      mediumUrl: { type: String },
      pictureUrl: { type: String, required: true },
      xlPictureUrl: { type: String },
    },
    sports: [{ type: String }],
    communications: {
      wantIt: { type: Boolean, required: true },
      via: { type: String, required: true },
    },
    termsAndConditions: { type: Boolean, required: true },
  },
  { timestamps: true }
);

const User = mongoose.model<IUser>("User", userSchema);

export default User;
