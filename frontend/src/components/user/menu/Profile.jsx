import React, { useContext, useState } from "react";
import {
  Edit,
  Save,
  MapPin,
  Globe,
  Calendar,
  DollarSign,
  TrendingUp,
  Award,
  Check,
  Plane,
  Star,
  Bed,
  Mail,
  MessageSquare,
  BellRing,
  ToggleLeft,
  ToggleRight,
  CreditCard,
  Plus,
} from "lucide-react";
import { AuthContext } from "../../../context/AuthContext";
import { updateUserData } from "../../../services/user_services/userService";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const { user, setUser } = useContext(AuthContext);

  // Get user data from context
  const userData = user || {
    id: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    date_of_birth: "",
    bio: "",
    location: "",
    timezone: "America/New_York",
    date_format: "MM/DD/YYYY",
    currency: "USD",
    profile_picture: "",
    subscription_plan: "",
    subscription_status: "",
    auto_renew: false,
  };

  // Handle save profile
  const handleSaveProfile = async () => {
    if (!userData.id) {
      alert("User not logged in!");
      return;
    }

    try {
      setIsSaving(true);

      // Get form values
      const updatedData = {
        first_name:
          document.getElementById("first_name")?.value || userData.first_name,
        last_name:
          document.getElementById("last_name")?.value || userData.last_name,
        email: document.getElementById("email")?.value || userData.email,
        phone: document.getElementById("phone")?.value || userData.phone,
        date_of_birth:
          document.getElementById("date_of_birth")?.value ||
          userData.date_of_birth,
        bio: document.getElementById("bio")?.value || userData.bio,
        location:
          document.getElementById("location")?.value || userData.location,
        timezone:
          document.getElementById("timezone")?.value || userData.timezone,
        date_format:
          document.getElementById("date_format")?.value || userData.date_format,
        currency:
          document.getElementById("currency")?.value || userData.currency,
      };

      // Call update service
      const updatedUser = await updateUserData(userData.id, updatedData);

      // Update user in context (real-time update)
      if (setUser && updatedUser) {
        setUser({
          ...user,
          ...updatedUser,
        });
      }

      setIsEditing(false);
      alert("Profile updated!");
    } catch (err) {
      alert("Failed to update profile");
      console.error("Save error:", err);
    } finally {
      setIsSaving(false);
    }
  };

  // Navigation tabs
  const NavTab = ({ tabId, currentTab, onClick, children }) => (
    <button
      onClick={() => onClick(tabId)}
      className={`px-4 py-2 font-semibold rounded-lg transition-colors duration-200 ${
        currentTab === tabId
          ? "bg-cyan-600 text-white shadow-md"
          : "text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700"
      }`}
    >
      {children}
    </button>
  );

  // Profile tab content
  const ProfileContent = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-8">
        {/* Personal Info Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Personal Information</h2>
            <button
              onClick={() => {
                if (isEditing) {
                  handleSaveProfile();
                } else {
                  setIsEditing(true);
                }
              }}
              disabled={isSaving}
              className="flex items-center gap-2 text-sm font-semibold text-cyan-600 hover:text-cyan-700 disabled:opacity-50"
            >
              {isSaving ? (
                "Saving..."
              ) : isEditing ? (
                <>
                  <Save size={16} /> Save Changes
                </>
              ) : (
                <>
                  <Edit size={16} /> Edit Profile
                </>
              )}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-2">
                First Name
              </label>
              <input
                type="text"
                id="first_name"
                defaultValue={userData.first_name}
                disabled={!isEditing}
                className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="last_name"
                defaultValue={userData.last_name}
                disabled={!isEditing}
                className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                id="email"
                defaultValue={userData.email}
                disabled={!isEditing}
                className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Phone</label>
              <input
                type="tel"
                id="phone"
                defaultValue={userData.phone}
                disabled={!isEditing}
                className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">
                Date of Birth
              </label>
              <input
                type="date"
                id="date_of_birth"
                defaultValue={userData.date_of_birth}
                disabled={!isEditing}
                className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold mb-2">Bio</label>
              <textarea
                id="bio"
                defaultValue={userData.bio}
                disabled={!isEditing}
                rows={3}
                className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600"
              />
            </div>
          </div>
        </div>

        {/* Regional Settings Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold mb-6">Regional Settings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-2 flex items-center">
                <MapPin size={16} className="mr-2" />
                Location
              </label>
              <input
                type="text"
                id="location"
                defaultValue={userData.location}
                disabled={!isEditing}
                className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 flex items-center">
                <Globe size={16} className="mr-2" />
                Timezone
              </label>
              <select
                id="timezone"
                defaultValue={userData.timezone}
                disabled={!isEditing}
                className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600"
              >
                <option value="America/New_York">Eastern Time (ET)</option>
                <option value="America/Chicago">Central Time (CT)</option>
                <option value="America/Denver">Mountain Time (MT)</option>
                <option value="America/Los_Angeles">Pacific Time (PT)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 flex items-center">
                <Calendar size={16} className="mr-2" />
                Date Format
              </label>
              <select
                id="date_format"
                defaultValue={userData.date_format}
                disabled={!isEditing}
                className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600"
              >
                <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                <option value="YYYY-MM-DD">YYYY-MM-DD</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 flex items-center">
                <DollarSign size={16} className="mr-2" />
                Currency
              </label>
              <select
                id="currency"
                defaultValue={userData.currency}
                disabled={!isEditing}
                className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600"
              >
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
                <option value="GBP">GBP (£)</option>
                <option value="JPY">JPY (¥)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        {/* Stats Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold mb-6 flex items-center">
            <TrendingUp size={20} className="mr-2" />
            User Stats
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">
                Subscription Plan
              </span>
              <span className="font-bold text-lg">
                {userData.subscription_plan || "Free"}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">Status</span>
              <span className="font-bold text-lg">
                {userData.subscription_status || "Active"}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">
                Auto Renew
              </span>
              <span className="font-bold text-lg">
                {userData.auto_renew ? "Yes" : "No"}
              </span>
            </div>
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                Member Since
              </div>
              <div className="font-semibold">
                {userData.createdAt
                  ? new Date(userData.createdAt).toLocaleDateString()
                  : "Recently"}
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold mb-6 flex items-center">
            <Award size={20} className="mr-2" />
            Coming Soon
          </h2>
          <div className="space-y-4">
            <div className="p-3 rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800/50">
              <div className="flex items-center">
                <span className="text-2xl mr-3">🏆</span>
                <div>
                  <div className="font-semibold">Travel Achievements</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Coming in future updates
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Travel Preferences Content
  const TravelPrefsContent = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
        <div className="flex items-center gap-4 mb-4">
          <Plane size={24} className="text-blue-500" />
          <h3 className="text-lg font-bold">Travel Preferences</h3>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Feature
            </span>
            <span className="font-semibold text-sm">Coming Soon</span>
          </div>
        </div>
        <button className="w-full mt-4 py-2 text-sm text-cyan-600 hover:text-cyan-700 font-semibold flex items-center justify-center gap-2">
          <Edit size={14} />
          Edit Preferences
        </button>
      </div>
    </div>
  );

  // Notifications Content
  const NotificationsContent = () => (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-bold flex items-center gap-3 mb-6">
          <Mail size={22} />
          Notifications
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-medium">Email Notifications</span>
            <button className="p-1 rounded-full bg-green-500">
              <ToggleRight size={32} className="text-white" />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">Push Notifications</span>
            <button className="p-1 rounded-full bg-gray-300 dark:bg-gray-600">
              <ToggleLeft size={32} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Billing Content
  const BillingContent = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-8">
        {/* Current Plan Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Current Plan</h2>
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-6 rounded-xl mb-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  {userData.subscription_plan || "Free Plan"}
                </h3>
                <p className="opacity-90">Basic travel features included</p>
              </div>
              <span className="bg-white text-cyan-600 px-3 py-1 rounded-full text-sm font-bold">
                {userData.subscription_status || "Active"}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Auto Renew
              </div>
              <div className="font-semibold">
                {userData.auto_renew ? "Enabled" : "Disabled"}
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Currency
              </div>
              <div className="font-semibold">{userData.currency || "USD"}</div>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="flex-1 bg-cyan-600 text-white py-2 px-4 rounded-lg hover:bg-cyan-700 transition font-semibold">
              Upgrade Plan
            </button>
            <button className="flex-1 bg-gray-200 dark:bg-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition font-semibold">
              Cancel Plan
            </button>
          </div>
        </div>
      </div>
      <div>
        {/* Payment Methods Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Payment Methods</h2>
          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex items-center gap-3">
                <CreditCard size={20} className="text-gray-400" />
                <div>
                  <div className="font-semibold">Add Payment Method</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Click below to add your first card
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="w-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition">
            <Plus size={16} />
            Add Payment Method
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen font-sans text-gray-900 dark:text-gray-100">
      <main className="p-6 lg:p-10 max-w-screen-2xl mx-auto">
        <div className="flex justify-center mb-8 bg-gray-200 dark:bg-gray-800 p-1.5 rounded-xl shadow-inner">
          <NavTab tabId="profile" currentTab={activeTab} onClick={setActiveTab}>
            Profile
          </NavTab>
          <NavTab tabId="travel" currentTab={activeTab} onClick={setActiveTab}>
            Travel
          </NavTab>
          <NavTab
            tabId="notifications"
            currentTab={activeTab}
            onClick={setActiveTab}
          >
            Notifications
          </NavTab>
          <NavTab tabId="billing" currentTab={activeTab} onClick={setActiveTab}>
            Billing
          </NavTab>
        </div>

        <div>
          {activeTab === "profile" && <ProfileContent />}
          {activeTab === "travel" && <TravelPrefsContent />}
          {activeTab === "notifications" && <NotificationsContent />}
          {activeTab === "billing" && <BillingContent />}
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
