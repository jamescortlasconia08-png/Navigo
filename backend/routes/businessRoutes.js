// routes/businessRoutes.js
import express from "express";
import {
  registerBusiness,
  loginBusiness,
  getBusinessProfile,
  updateBusinessProfile,
  getAllBusinesses,
} from "../controller/businessController.js";

const businessRouter = express.Router();

// Register new business
businessRouter.post("/register", registerBusiness);

// Login business
businessRouter.post("/login", loginBusiness);

// Get business profile
businessRouter.get("/profile/:id", getBusinessProfile);

// Update business profile
businessRouter.put("/profile/:id", updateBusinessProfile);

// Get all businesses (admin)
businessRouter.get("/all", getAllBusinesses);

export default businessRouter;
