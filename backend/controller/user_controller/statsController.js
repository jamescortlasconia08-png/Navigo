import UserStats from "../../model/user/userStats.js";

// Get user stats
export const getUserStats = async (req, res) => {
  try {
    const userId = req.params.userId || req.user?.id;

    let stats = await UserStats.findOne({ user_id: userId });

    // If no stats exist, create default ones
    if (!stats) {
      stats = await UserStats.create({
        user_id: userId,
        total_trips: 0,
        countries_visited: 0,
        total_spent: 0,
        total_miles: 0,
      });
    }

    res.status(200).json(stats);
  } catch (error) {
    console.error("Get user stats error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Update user stats (increment/decrement)
export const updateUserStats = async (req, res) => {
  try {
    const userId = req.params.userId || req.user?.id;
    const { operation, field, value } = req.body;

    if (!["increment", "decrement", "set"].includes(operation)) {
      return res.status(400).json({ error: "Invalid operation" });
    }

    const validFields = [
      "total_trips",
      "countries_visited",
      "total_spent",
      "total_miles",
    ];
    if (!validFields.includes(field)) {
      return res.status(400).json({ error: "Invalid field" });
    }

    let update = {};
    if (operation === "increment") {
      update.$inc = { [field]: value || 1 };
    } else if (operation === "decrement") {
      update.$inc = { [field]: -(value || 1) };
    } else {
      update.$set = { [field]: value };
    }

    const stats = await UserStats.findOneAndUpdate(
      { user_id: userId },
      update,
      {
        new: true,
        upsert: true,
      }
    );

    res.status(200).json(stats);
  } catch (error) {
    console.error("Update user stats error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Add a trip to recent trips
export const addTrip = async (req, res) => {
  try {
    const userId = req.params.userId || req.user?.id;
    const tripData = req.body;

    const stats = await UserStats.findOneAndUpdate(
      { user_id: userId },
      {
        $push: {
          recent_trips: {
            $each: [tripData],
            $slice: -10, // Keep only last 10 trips
          },
        },
        $inc: {
          total_trips: 1,
          total_spent: tripData.cost || 0,
          total_miles: tripData.miles || 0,
        },
        $set: {
          last_trip_date: new Date(),
        },
      },
      {
        new: true,
        upsert: true,
      }
    );

    res.status(200).json(stats);
  } catch (error) {
    console.error("Add trip error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Update favorite/next destination
export const updateDestinations = async (req, res) => {
  try {
    const userId = req.params.userId || req.user?.id;
    const { favorite_destination, next_trip_destination } = req.body;

    const updateData = {};
    if (favorite_destination)
      updateData.favorite_destination = favorite_destination;
    if (next_trip_destination)
      updateData.next_trip_destination = next_trip_destination;

    const stats = await UserStats.findOneAndUpdate(
      { user_id: userId },
      { $set: updateData },
      {
        new: true,
        upsert: true,
      }
    );

    res.status(200).json(stats);
  } catch (error) {
    console.error("Update destinations error:", error);
    res.status(500).json({ error: "Server error" });
  }
};
