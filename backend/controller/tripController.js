// controllers/tripController.js
import Trips from "../model/trips.js";

// Get all trips for a user
export const getUserTrips = async (req, res) => {
  try {
    const userId = req.params.userId;

    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }

    const trips = await Trips.find({ user_id: userId });
    res.status(200).json(trips);
  } catch (error) {
    console.error("Get user trips error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Get single trip by ID
export const getTripById = async (req, res) => {
  try {
    const tripId = req.params.id;

    const trip = await Trips.findById(tripId);

    if (!trip) {
      return res.status(404).json({ error: "Trip not found" });
    }

    res.status(200).json(trip);
  } catch (error) {
    console.error("Get trip by ID error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Create new trip
export const createTrip = async (req, res) => {
  try {
    const tripData = req.body;

    if (!tripData.user_id) {
      return res.status(400).json({ error: "User ID is required" });
    }

    const newTrip = await Trips.create(tripData);
    res.status(201).json(newTrip);
  } catch (error) {
    console.error("Create trip error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Update trip
export const updateTrip = async (req, res) => {
  try {
    const tripId = req.params.id;
    const updateData = req.body;

    const updatedTrip = await Trips.findByIdAndUpdate(
      tripId,
      { $set: updateData },
      { new: true, runValidators: true }
    );

    if (!updatedTrip) {
      return res.status(404).json({ error: "Trip not found" });
    }

    res.status(200).json(updatedTrip);
  } catch (error) {
    console.error("Update trip error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Delete trip
export const deleteTrip = async (req, res) => {
  try {
    const tripId = req.params.id;

    const deletedTrip = await Trips.findByIdAndDelete(tripId);

    if (!deletedTrip) {
      return res.status(404).json({ error: "Trip not found" });
    }

    res.status(200).json({ message: "Trip deleted successfully" });
  } catch (error) {
    console.error("Delete trip error:", error);
    res.status(500).json({ error: "Server error" });
  }
};
