// controllers/exploreController.js
import Explore from "../model/explore.js";

// Get all explore destinations
export const getAllDestinations = async (req, res) => {
  try {
    const destinations = await Explore.find();
    res.status(200).json(destinations);
  } catch (error) {
    console.error("Get destinations error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Get single destination by ID
export const getDestinationById = async (req, res) => {
  try {
    const destinationId = req.params.id;

    const destination = await Explore.findById(destinationId);

    if (!destination) {
      return res.status(404).json({ error: "Destination not found" });
    }

    res.status(200).json(destination);
  } catch (error) {
    console.error("Get destination by ID error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Search destinations
export const searchDestinations = async (req, res) => {
  try {
    const { query, country } = req.query;
    const searchQuery = {};

    if (query) {
      searchQuery.$or = [
        { name: { $regex: query, $options: "i" } },
        { country: { $regex: query, $options: "i" } },
        { highlights: { $regex: query, $options: "i" } },
      ];
    }

    if (country) {
      searchQuery.country = { $regex: country, $options: "i" };
    }

    const destinations = await Explore.find(searchQuery);
    res.status(200).json(destinations);
  } catch (error) {
    console.error("Search destinations error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Create new destination
export const createDestination = async (req, res) => {
  try {
    const destinationData = req.body;

    const newDestination = await Explore.create(destinationData);
    res.status(201).json(newDestination);
  } catch (error) {
    console.error("Create destination error:", error);
    res.status(500).json({ error: "Server error" });
  }
};
