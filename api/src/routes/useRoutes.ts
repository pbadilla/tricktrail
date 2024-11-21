// src/routes/userRoutes.ts
import express from 'express';

import { createSpots, deleteSpotsById, getSpots, getSpotsById } from "../controllers/spots";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Spots
 *   description: API for managing spots
 */

/**
 * @swagger
 * /spots:
 *   get:
 *     summary: Get all spots
 *     tags: [Spots]
 *     responses:
 *       200:
 *         description: List of all spots
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Spot'
 */
router.get("/spots", getSpots);

/**
 * @swagger
 * /spots/{id}:
 *   get:
 *     summary: Get a spot by its ID
 *     tags: [Spots]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the spot to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A spot object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Spot'
 *       404:
 *         description: Spot not found
 */
router.get("/spots/:id", getSpotsById);

export default router;
