import UserPreferences from "../../model/user/userPreferences.js";

// Get user preferences
export const getUserPreferences = async (req, res) => {
  try {
    const userId = req.params.userId || req.user?.id;

    let preferences = await UserPreferences.findOne({ user_id: userId });

    // If no preferences exist, create default ones
    if (!preferences) {
      preferences = await UserPreferences.create({
        user_id: userId,
        // Default preferences
        travel_style: "mid_range",
        travel_type: "leisure",
        activity_level: "moderate",
      });
    }

    res.status(200).json(preferences);
  } catch (error) {
    console.error("Get user preferences error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Update user preferences
export const updateUserPreferences = async (req, res) => {
  try {
    const userId = req.params.userId || req.user?.id;
    const updateData = req.body;

    // Remove user_id from update data to prevent changing it
    delete updateData.user_id;
    delete updateData._id;

    // Find and update, or create if doesn't exist
    const preferences = await UserPreferences.findOneAndUpdate(
      { user_id: userId },
      { $set: updateData },
      {
        new: true,
        upsert: true, // Create if doesn't exist
        runValidators: true,
      }
    );

    res.status(200).json(preferences);
  } catch (error) {
    console.error("Update user preferences error:", error);

    if (error.name === "ValidationError") {
      return res.status(400).json({ error: error.message });
    }

    res.status(500).json({ error: "Server error" });
  }
};

// Reset preferences to default
export const resetPreferences = async (req, res) => {
  try {
    const userId = req.params.userId || req.user?.id;

    const defaultPreferences = {
      user_id: userId,
      travel_style: "mid_range",
      travel_type: "leisure",
      activity_level: "moderate",
      preferred_class: "premium_economy",
      seat_preference: "window",
      meal_preference: "vegetarian",
      accommodation_preference: "hotel",
      star_rating: "4",
      room_type: "double",
      budget_range: "mid_range",
      activity_interests: ["hiking", "museums", "food_tours", "photography"],
      dietary_restrictions: [],
      accessibility_needs: [],
      language_preferences: ["English", "Spanish"],
    };

    const preferences = await UserPreferences.findOneAndUpdate(
      { user_id: userId },
      { $set: defaultPreferences },
      {
        new: true,
        upsert: true,
        runValidators: true,
      }
    );

    res.status(200).json(preferences);
  } catch (error) {
    console.error("Reset preferences error:", error);
    res.status(500).json({ error: "Server error" });
  }
};
