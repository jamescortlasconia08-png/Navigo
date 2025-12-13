import User from "../../model/user/userModel.js";
import UserPreferences from "../../model/user/userPreferences.js";
import UserStats from "../../model/user/userStats.js";
import UserSettings from "../../model/user/userSettings.js";

// Get complete user profile (all data)
export const getCompleteProfile = async (req, res) => {
  try {
    const userId = req.params.userId || req.user?.id;

    // Get all data in parallel
    const [user, preferences, stats, settings] = await Promise.all([
      User.findById(userId).select("-password_hash"),
      UserPreferences.findOne({ user_id: userId }),
      UserStats.findOne({ user_id: userId }),
      UserSettings.findOne({ user_id: userId }),
    ]);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const profile = {
      user: user,
      preferences: preferences || {},
      stats: stats || {},
      settings: settings || {},
    };

    res.status(200).json(profile);
  } catch (error) {
    console.error("Get complete profile error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Update multiple profile sections at once
export const updateCompleteProfile = async (req, res) => {
  try {
    const userId = req.params.userId || req.user?.id;
    const { user, preferences, stats, settings } = req.body;

    const updatePromises = [];

    if (user) {
      delete user.password_hash;
      delete user._id;
      updatePromises.push(
        User.findByIdAndUpdate(
          userId,
          { $set: user },
          { new: true, runValidators: true }
        ).select("-password_hash")
      );
    }

    if (preferences) {
      updatePromises.push(
        UserPreferences.findOneAndUpdate(
          { user_id: userId },
          { $set: preferences },
          { new: true, upsert: true, runValidators: true }
        )
      );
    }

    if (stats) {
      updatePromises.push(
        UserStats.findOneAndUpdate(
          { user_id: userId },
          { $set: stats },
          { new: true, upsert: true, runValidators: true }
        )
      );
    }

    if (settings) {
      updatePromises.push(
        UserSettings.findOneAndUpdate(
          { user_id: userId },
          { $set: settings },
          { new: true, upsert: true, runValidators: true }
        )
      );
    }

    const results = await Promise.all(updatePromises);

    const response = {
      user: results[0] || null,
      preferences: results[1] || null,
      stats: results[2] || null,
      settings: results[3] || null,
    };

    res.status(200).json(response);
  } catch (error) {
    console.error("Update complete profile error:", error);

    if (error.name === "ValidationError") {
      return res.status(400).json({ error: error.message });
    }

    res.status(500).json({ error: "Server error" });
  }
};
