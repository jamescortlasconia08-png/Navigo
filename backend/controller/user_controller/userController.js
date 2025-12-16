import User from "../../model/user/userModel.js";
import mongoose from "mongoose";

// Get user profile
export const getUserProfile = async (req, res) => {
  try {
    const userId = req.params.id || req.user?.id;

    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }

    const user = await User.findById(userId).select("-password");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Convert _id to id for consistency with frontend
    const userResponse = user.toObject();
    userResponse.id = userResponse._id.toString();

    res.status(200).json(userResponse);
  } catch (error) {
    console.error("Get user profile error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Update user profile
export const updateUserProfile = async (req, res) => {
  try {
    const userId = req.params.id || req.user?.id;
    const updateData = req.body;

    // Remove fields that shouldn't be updated directly
    delete updateData.password;
    delete updateData.password_hash;
    delete updateData._id;
    delete updateData.createdAt;
    // Allow subscription_status and subscription_plan to be updated for subscription management

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: updateData },
      { new: true, runValidators: true }
    ).select("-password");

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    // Convert _id to id for consistency with frontend
    const userResponse = updatedUser.toObject();
    userResponse.id = userResponse._id.toString();

    res.status(200).json(userResponse);
  } catch (error) {
    console.error("Update user profile error:", error);

    if (error.name === "ValidationError") {
      return res.status(400).json({ error: error.message });
    }

    res.status(500).json({ error: "Server error" });
  }
};

// Delete user account
export const deleteUserAccount = async (req, res) => {
  try {
    const userId = req.params.id || req.user?.id;

    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ message: "User account deleted successfully" });
  } catch (error) {
    console.error("Delete user account error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Search users (for admin or friends feature)
export const searchUsers = async (req, res) => {
  try {
    const { name, email, location } = req.query;
    const query = {};

    if (name) {
      query.$or = [
        { first_name: { $regex: name, $options: "i" } },
        { last_name: { $regex: name, $options: "i" } },
      ];
    }

    if (email) {
      query.email = { $regex: email, $options: "i" };
    }

    if (location) {
      query.location = { $regex: location, $options: "i" };
    }

    const users = await User.find(query)
      .select("-password")
      .limit(50)
      .sort({ created_at: -1 });

    res.status(200).json(users);
  } catch (error) {
    console.error("Search users error:", error);
    res.status(500).json({ error: "Server error" });
  }
};
