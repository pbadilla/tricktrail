import { Request, Response } from "express";
import User, { IUser } from "../models/user"; // Adjust the path as necessary

// Get all users
export const getUsers = async (req: Request, res: Response): Promise<Response> => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: "Error fetching users", error });
  }
};

// Get a user by ID
export const getUserById = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: "Error fetching user", error });
  }
};

// Create a new user
export const createUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const userData: IUser = req.body;
    const newUser = new User(userData);
    const savedUser = await newUser.save();
    return res.status(201).json(savedUser);
  } catch (error) {
    return res.status(500).json({ message: "Error creating user", error });
  }
};

// Delete a user by ID
export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Error deleting user", error });
  }
};
