// routes/tripRoutes.js
import express from "express";
import {
  getUserTrips,
  getTripById,
  createTrip,
  updateTrip,
  deleteTrip,
} from "../controller/tripController.js";

const tripRouter = express.Router();

// Get all trips for a user
tripRouter.get("/user/:userId", getUserTrips);

// Get single trip by ID
tripRouter.get("/:id", getTripById);

// Create new trip
tripRouter.post("/", createTrip);

// Update trip
tripRouter.put("/:id", updateTrip);

// Delete trip
tripRouter.delete("/:id", deleteTrip);

export default tripRouter;
