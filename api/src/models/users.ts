// src/models/User.ts
import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  age?: number; // Optional
}

const userSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number },
});

const User: Model<IUser> = mongoose.model<IUser>('User', userSchema);

export default User;
