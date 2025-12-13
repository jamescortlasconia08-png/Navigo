// routes/userRoutes.js
import express from "express";
import {
  getUserProfile,
  updateUserProfile,
  deleteUserAccount,
  searchUsers,
} from "../controller/user_controller/userController.js";

import {
  getUserPreferences,
  updateUserPreferences,
  resetPreferences,
} from "../controller/user_controller/preferencesController.js";

import {
  getUserStats,
  updateUserStats,
  addTrip,
  updateDestinations,
} from "../controller/user_controller/statsController.js";

import {
  getUserSettings,
  updateNotificationSettings,
  updateSecuritySettings,
  toggleSetting,
} from "../controller/user_controller/settingsController.js";

import {
  getCompleteProfile,
  updateCompleteProfile,
} from "../controller/user_controller/profileController.js";

const userRouter = express.Router();

// User routes
userRouter.get("/profile/:id", getUserProfile);
userRouter.put("/profile/:id", updateUserProfile);
userRouter.delete("/profile/:id", deleteUserAccount);
userRouter.get("/search", searchUsers);

// Preferences routes
userRouter.get("/preferences/:userId", getUserPreferences);
userRouter.put("/preferences/:userId", updateUserPreferences);
userRouter.post("/preferences/reset/:userId", resetPreferences);

// Stats routes
userRouter.get("/stats/:userId", getUserStats);
userRouter.put("/stats/update/:userId", updateUserStats);
userRouter.post("/stats/trip/:userId", addTrip);
userRouter.put("/stats/destinations/:userId", updateDestinations);

// Settings routes
userRouter.get("/settings/:userId", getUserSettings);
userRouter.put(
  "/settings/notifications/:userId",

  updateNotificationSettings
);
userRouter.put("/settings/security/:userId", updateSecuritySettings);
userRouter.post("/settings/toggle/:userId", toggleSetting);

// Combined profile routes
userRouter.get("/complete/:userId", getCompleteProfile);
userRouter.put("/complete/:userId", updateCompleteProfile);

export default userRouter;
