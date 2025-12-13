// models/Business.js
import mongoose from "mongoose";

const businessSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: {
    type: String,
    default: "business",
  },
  business_name: String,
  phone: String,
  address: String,
  website: String,
  business_type: String,
  description: String,
  logo: String,
  subscription_plan: String,
  subscription_status: String,
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Business = mongoose.model("Business", businessSchema);
export default Business;
