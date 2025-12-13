// models/UserSettings.js
import mongoose from "mongoose";

const userSettingsSchema = new mongoose.Schema({
  user_id: mongoose.Schema.Types.ObjectId,

  booking_confirmations: Boolean,
  price_alerts: Boolean,
  travel_reminders: Boolean,
  weekly_digest: Boolean,
  push_notifications: Boolean,
  sms_alerts: Boolean,
  marketing_emails: Boolean,

  two_factor_enabled: Boolean,
  login_alerts: Boolean,
  data_sharing: Boolean,
  profile_visibility: String,
});

const UserSettings = mongoose.model("UserSettings", userSettingsSchema);
export default UserSettings;
