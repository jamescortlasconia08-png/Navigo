// models/Trip.js
import mongoose from "mongoose";

const tripSchema = new mongoose.Schema({
  user_id: mongoose.Schema.Types.ObjectId,
  destination: String,
  country: String,
  dates: String,
  duration: String,
  travelers: Number,
  budget: Number,
  spent: Number,
  progress: Number,
  status: String,
  rating: String,
  reviews: Number,
  image: String,
  highlights: [String],
});

const Trips = mongoose.model("Trips", tripSchema);
export default Trips;
