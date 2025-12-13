// models/UserStats.js
import mongoose from "mongoose";

const userStatsSchema = new mongoose.Schema({
  user_id: mongoose.Schema.Types.ObjectId,

  total_trips: Number,
  countries_visited: Number,
  total_spent: Number,
  total_miles: Number,

  favorite_destination: String,
  next_trip_destination: String,
  last_trip_date: String,

  recent_trips: [
    {
      destination: String,
      date: String,
      cost: Number,
    },
  ],
});

const UserStats = mongoose.model("UserStats", userStatsSchema);
export default UserStats;
