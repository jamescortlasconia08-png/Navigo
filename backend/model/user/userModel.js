// models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  password: String,
  phone: String,
  date_of_birth: String,
  bio: String,

  location: String,
  timezone: String,
  date_format: String,
  currency: String,

  subscription_plan: String,
  subscription_status: String,
  auto_renew: Boolean,
});

const User = mongoose.model("User", userSchema);
export default User;
