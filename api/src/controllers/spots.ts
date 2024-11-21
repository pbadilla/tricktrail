import Spots, { ISpot } from "../models/spots";
import { Request, Response } from "express";

export const createSpots = async (req: Request, res: Response) => {
  const spots = new Spots<ISpot>(req.body);

  try {
    await spots.save();
  } catch (error) {
    return res.status(500).json({
      error,
    });
  }

  res.status(201).json({
    message: "Spots created successfully",
  });
};

export const getSpots = async (req: Request, res: Response) => {
  const spots = await Spots.find<ISpot>();

  res.json({
    spots,
  });
};

export const getSpotsById = async (req: Request, res: Response) => {
  const spotsId = req.params._id;

  try {
    const spots = await Spots.findById(spotsId);

    if (!spots) {
      return res.status(404).json({
        message: "The spots does not exist.",
      });
    }

    return res.json({
      spots,
    });
  } catch (error) {
    return res.status(500).json({
      error,
    });
  }
};

export const deleteSpotsById = async (req: Request, res: Response) => {
  const spotsId = req.params._id;

  try {
    const spots = await Spots.findByIdAndDelete(spotsId);

    if (!spots) {
      return res.status(404).json({
        message: "The spots does not exist.",
      });
    }

    return res.json({
      message: "Spots was deleted successfully.",
    });
  } catch (error) {
    return res.status(500).json({
      error,
    });
  }
};