import mongoose from "mongoose";

const exploreSchema = new mongoose.Schema({
  name: String,
  country: String,
  image: String,
  price_indicator: String,
  rating: Number,
  reviews: Number,
  duration: String,
  highlights: [String],
  best_time: String,
  budget: String,
});

const Explore = mongoose.model("Explore", exploreSchema);
export default Explore;
