// controllers/businessController.js
import Business from "../model/business.js";

// Register new business
export const registerBusiness = async (req, res) => {
  try {
    const businessData = req.body;

    // Check if business exists
    const businessExists = await Business.findOne({
      email: businessData.email,
    });
    if (businessExists) {
      return res.status(400).json({ error: "Business already exists" });
    }

    // Create business
    const newBusiness = await Business.create(businessData);

    // Don't send password in response
    const businessResponse = newBusiness.toObject();
    delete businessResponse.password;

    res.status(201).json({
      message: "Business registered successfully",
      business: businessResponse,
    });
  } catch (error) {
    console.error("Register business error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Login business
export const loginBusiness = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find business
    const business = await Business.findOne({ email });
    if (!business) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // Check password (simple check for now)
    if (business.password !== password) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // Don't send password in response
    const businessResponse = business.toObject();
    delete businessResponse.password;

    res.status(200).json({
      message: "Login successful",
      business: businessResponse,
    });
  } catch (error) {
    console.error("Login business error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Get business profile
export const getBusinessProfile = async (req, res) => {
  try {
    const businessId = req.params.id;

    const business = await Business.findById(businessId).select("-password");

    if (!business) {
      return res.status(404).json({ error: "Business not found" });
    }

    res.status(200).json(business);
  } catch (error) {
    console.error("Get business profile error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Update business profile
export const updateBusinessProfile = async (req, res) => {
  try {
    const businessId = req.params.id;
    const updateData = req.body;

    // Remove password from update data
    delete updateData.password;
    delete updateData._id;

    const updatedBusiness = await Business.findByIdAndUpdate(
      businessId,
      { $set: updateData },
      { new: true, runValidators: true }
    ).select("-password");

    if (!updatedBusiness) {
      return res.status(404).json({ error: "Business not found" });
    }

    res.status(200).json(updatedBusiness);
  } catch (error) {
    console.error("Update business profile error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Get all businesses (for admin)
export const getAllBusinesses = async (req, res) => {
  try {
    const businesses = await Business.find().select("-password");
    res.status(200).json(businesses);
  } catch (error) {
    console.error("Get all businesses error:", error);
    res.status(500).json({ error: "Server error" });
  }
};
