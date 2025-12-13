// models/UserPreferences.js
import mongoose from "mongoose";

const userPreferencesSchema = new mongoose.Schema({
  user_id: mongoose.Schema.Types.ObjectId,

  travel_style: String,
  travel_type: String,
  activity_level: String,

  preferred_class: String,
  seat_preference: String,
  meal_preference: String,

  accommodation_preference: String,
  star_rating: String,
  room_type: String,
  budget_range: String,

  activity_interests: [String],
  dietary_restrictions: [String],
  accessibility_needs: [String],
  language_preferences: [String],
});

const UserPreferences = mongoose.model(
  "UserPreferences",
  userPreferencesSchema
);
export default UserPreferences;
