import UserSettings from "../../model/user/userSettings.js";

// Get user settings
export const getUserSettings = async (req, res) => {
  try {
    const userId = req.params.userId || req.user?.id;

    let settings = await UserSettings.findOne({ user_id: userId });

    // If no settings exist, create default ones
    if (!settings) {
      settings = await UserSettings.create({
        user_id: userId,
        notifications: {
          booking_confirmations: true,
          price_alerts: true,
          travel_reminders: true,
          weekly_digest: false,
          push_notifications: true,
          sms_alerts: false,
          marketing_emails: true,
        },
        security: {
          two_factor_enabled: false,
          login_alerts: true,
          data_sharing: false,
          profile_visibility: "friends",
        },
      });
    }

    res.status(200).json(settings);
  } catch (error) {
    console.error("Get user settings error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Update notification settings
export const updateNotificationSettings = async (req, res) => {
  try {
    const userId = req.params.userId || req.user?.id;
    const notificationUpdates = req.body;

    const settings = await UserSettings.findOneAndUpdate(
      { user_id: userId },
      {
        $set: {
          notifications: notificationUpdates,
        },
      },
      {
        new: true,
        upsert: true,
        runValidators: true,
      }
    );

    res.status(200).json(settings);
  } catch (error) {
    console.error("Update notification settings error:", error);

    if (error.name === "ValidationError") {
      return res.status(400).json({ error: error.message });
    }

    res.status(500).json({ error: "Server error" });
  }
};

// Update security settings
export const updateSecuritySettings = async (req, res) => {
  try {
    const userId = req.params.userId || req.user?.id;
    const securityUpdates = req.body;

    const settings = await UserSettings.findOneAndUpdate(
      { user_id: userId },
      {
        $set: {
          security: securityUpdates,
        },
      },
      {
        new: true,
        upsert: true,
        runValidators: true,
      }
    );

    res.status(200).json(settings);
  } catch (error) {
    console.error("Update security settings error:", error);

    if (error.name === "ValidationError") {
      return res.status(400).json({ error: error.message });
    }

    res.status(500).json({ error: "Server error" });
  }
};

// Toggle specific setting
export const toggleSetting = async (req, res) => {
  try {
    const userId = req.params.userId || req.user?.id;
    const { category, setting } = req.body;

    if (!category || !setting) {
      return res
        .status(400)
        .json({ error: "Category and setting are required" });
    }

    const validCategories = ["notifications", "security"];
    if (!validCategories.includes(category)) {
      return res.status(400).json({ error: "Invalid category" });
    }

    const settings = await UserSettings.findOne({ user_id: userId });

    if (!settings) {
      return res.status(404).json({ error: "Settings not found" });
    }

    // Toggle the setting
    const currentValue = settings[category][setting];
    settings[category][setting] = !currentValue;

    await settings.save();

    res.status(200).json(settings);
  } catch (error) {
    console.error("Toggle setting error:", error);
    res.status(500).json({ error: "Server error" });
  }
};
