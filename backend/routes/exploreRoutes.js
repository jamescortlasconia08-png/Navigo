// routes/exploreRoutes.js
import express from "express";
import {
  getAllDestinations,
  getDestinationById,
  searchDestinations,
  createDestination,
} from "../controller/exploreController.js";

const exploreRouter = express.Router();

// Get all destinations
exploreRouter.get("/", getAllDestinations);

// Get single destination
exploreRouter.get("/:id", getDestinationById);

// Search destinations
exploreRouter.get("/search", searchDestinations);

// Create destination
exploreRouter.post("/", createDestination);

export default exploreRouter;
