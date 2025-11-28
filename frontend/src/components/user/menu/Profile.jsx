import React, { useState } from "react";
import {
  User,
  Briefcase,
  Bell,
  Moon,
  ChevronDown,
  Camera,
  Edit,
  Save,
  MapPin,
  Globe,
  Calendar,
  CreditCard,
  Plane,
  Star,
  Bed,
  Utensils,
  Shield,
  BellRing,
  Mail,
  MessageSquare,
  ToggleLeft,
  ToggleRight,
  Download,
  Trash2,
  Plus,
  Check,
  Award,
  TrendingUp,
  Flag,
  Clock,
  DollarSign,
} from "lucide-react";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);

  // Static user data based on your schema
  const userData = {
    _id: "507f1f77bcf86cd799439011",
    firstName: "Alex",
    lastName: "Thompson",
    email: "alex.thompson@example.com",
    phone: "+1 (555) 123-4567",
    dateOfBirth: "1990-05-15",
    profilePicture: "",
    bio: "Passionate traveler exploring the world one destination at a time. Love adventure, culture, and great food!",

    profile: {
      location: "New York, USA",
      timezone: "America/New_York",
      dateFormat: "MM/DD/YYYY",
      currency: "USD",
      profilePhoto: "",
    },

    preferences: {
      travelStyle: "mid_range",
      accommodationPreference: "hotel",
      transportationPreference: "mixed",
      activityInterests: ["hiking", "museums", "food_tours", "photography"],
      dietaryRestrictions: [],
      accessibilityNeeds: [],
      languagePreferences: ["English", "Spanish"],
    },

    travelPreferences: {
      preferredClass: "premium_economy",
      seatPreference: "window",
      mealPreference: "vegetarian",
      starRating: "4",
      roomType: "double",
      budgetRange: "mid_range",
      travelType: "leisure",
      activityLevel: "moderate",
    },

    travelStats: {
      totalTrips: 23,
      countriesVisited: 12,
      totalSpent: 12450,
      totalMiles: 45000,
      favoriteDestination: "Tokyo, Japan",
      nextTripDestination: "Paris, France",
      lastTripDate: "2024-10-22",
    },

    notificationSettings: {
      bookingConfirmations: true,
      priceAlerts: true,
      travelReminders: true,
      weeklyDigest: false,
      pushNotifications: true,
      smsAlerts: false,
      marketingEmails: true,
    },

    securitySettings: {
      twoFactorEnabled: true,
      loginAlerts: true,
      dataSharing: false,
      profileVisibility: "friends",
      lastPasswordChange: "2024-01-15",
    },

    subscription: {
      planName: "Premium",
      planType: "premium",
      status: "active",
      startDate: "2024-01-01",
      endDate: "2024-12-31",
      autoRenew: true,
    },
  };

  // Static achievements data
  const achievements = [
    {
      achievementType: "travel_milestone",
      achievementName: "Globe Trotter",
      description: "Visited 10+ countries",
      icon: "🌍",
      progress: 12,
      target: 10,
      isUnlocked: true,
      unlockedAt: "2024-03-15",
    },
    {
      achievementType: "booking",
      achievementName: "Frequent Flyer",
      description: "Booked 20+ trips",
      icon: "✈️",
      progress: 23,
      target: 20,
      isUnlocked: true,
      unlockedAt: "2024-06-20",
    },
    {
      achievementType: "budget",
      achievementName: "Smart Saver",
      description: "Saved $2,000+ through deals",
      icon: "💰",
      progress: 2100,
      target: 2000,
      isUnlocked: true,
      unlockedAt: "2024-08-10",
    },
    {
      achievementType: "exploration",
      achievementName: "Adventure Seeker",
      description: "Completed 50+ activities",
      icon: "🏔️",
      progress: 35,
      target: 50,
      isUnlocked: false,
      unlockedAt: null,
    },
  ];

  // Static payment methods
  const paymentMethods = [
    {
      _id: "1",
      paymentType: "card",
      cardBrand: "Visa",
      lastFourDigits: "4242",
      expiryMonth: "12",
      expiryYear: "2025",
      cardholderName: "Alex Thompson",
      isPrimary: true,
      isActive: true,
    },
    {
      _id: "2",
      paymentType: "card",
      cardBrand: "Mastercard",
      lastFourDigits: "8888",
      expiryMonth: "08",
      expiryYear: "2026",
      cardholderName: "Alex Thompson",
      isPrimary: false,
      isActive: true,
    },
  ];

  // Static billing history
  const billingHistory = [
    {
      _id: "1",
      invoiceNumber: "INV-2024-001",
      amount: 99.99,
      currency: "USD",
      billingDate: "2024-01-01",
      status: "paid",
      description: "Premium Plan - Annual",
    },
    {
      _id: "2",
      invoiceNumber: "INV-2024-002",
      amount: 149.99,
      currency: "USD",
      billingDate: "2024-02-01",
      status: "paid",
      description: "Additional Services",
    },
    {
      _id: "3",
      invoiceNumber: "INV-2024-003",
      amount: 99.99,
      currency: "USD",
      billingDate: "2024-03-01",
      status: "pending",
      description: "Premium Plan - Annual",
    },
  ];

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

  const ProfileContent = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-8">
        <InfoCard
          title="Personal Information"
          onEditToggle={() => setIsEditing(!isEditing)}
          isEditing={isEditing}
          userData={userData}
        />
        <RegionalSettingsCard isEditing={isEditing} userData={userData} />
      </div>
      <div className="space-y-8">
        <TravelStatsCard userData={userData} />
        <AchievementsCard achievements={achievements} />
      </div>
    </div>
  );

  const InfoCard = ({ title, onEditToggle, isEditing, userData }) => (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">{title}</h2>
        <button
          onClick={onEditToggle}
          className="flex items-center gap-2 text-sm font-semibold text-cyan-600 hover:text-cyan-700"
        >
          {isEditing ? (
            <>
              <Save size={16} />
              Save Changes
            </>
          ) : (
            <>
              <Edit size={16} />
              Edit Profile
            </>
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold mb-2">First Name</label>
          <input
            type="text"
            defaultValue={userData.firstName}
            disabled={!isEditing}
            className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">Last Name</label>
          <input
            type="text"
            defaultValue={userData.lastName}
            disabled={!isEditing}
            className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold mb-2">Email</label>
          <input
            type="email"
            defaultValue={userData.email}
            disabled={!isEditing}
            className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">Phone</label>
          <input
            type="tel"
            defaultValue={userData.phone}
            disabled={!isEditing}
            className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">
            Date of Birth
          </label>
          <input
            type="date"
            defaultValue={userData.dateOfBirth}
            disabled={!isEditing}
            className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold mb-2">Bio</label>
          <textarea
            defaultValue={userData.bio}
            disabled={!isEditing}
            rows={3}
            className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>
      </div>
    </div>
  );

  const RegionalSettingsCard = ({ isEditing, userData }) => (
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
            defaultValue={userData.profile.location}
            disabled={!isEditing}
            className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2 flex items-center">
            <Globe size={16} className="mr-2" />
            Timezone
          </label>
          <select
            defaultValue={userData.profile.timezone}
            disabled={!isEditing}
            className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
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
            defaultValue={userData.profile.dateFormat}
            disabled={!isEditing}
            className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
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
            defaultValue={userData.profile.currency}
            disabled={!isEditing}
            className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            <option value="USD">USD ($)</option>
            <option value="EUR">EUR (€)</option>
            <option value="GBP">GBP (£)</option>
            <option value="JPY">JPY (¥)</option>
          </select>
        </div>
      </div>
    </div>
  );

  const TravelStatsCard = ({ userData }) => (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
      <h2 className="text-xl font-bold mb-6 flex items-center">
        <TrendingUp size={20} className="mr-2" />
        Travel Stats
      </h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600 dark:text-gray-400">Total Trips</span>
          <span className="font-bold text-lg">
            {userData.travelStats.totalTrips}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600 dark:text-gray-400">
            Countries Visited
          </span>
          <span className="font-bold text-lg">
            {userData.travelStats.countriesVisited}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600 dark:text-gray-400">Total Spent</span>
          <span className="font-bold text-lg">
            ${userData.travelStats.totalSpent.toLocaleString()}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600 dark:text-gray-400">
            Miles Traveled
          </span>
          <span className="font-bold text-lg">
            {userData.travelStats.totalMiles.toLocaleString()}
          </span>
        </div>
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
            Favorite Destination
          </div>
          <div className="font-semibold flex items-center">
            <MapPin size={14} className="mr-1" />
            {userData.travelStats.favoriteDestination}
          </div>
        </div>
        <div className="pt-2">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
            Next Trip
          </div>
          <div className="font-semibold flex items-center">
            <Plane size={14} className="mr-1" />
            {userData.travelStats.nextTripDestination}
          </div>
        </div>
      </div>
    </div>
  );

  const AchievementsCard = ({ achievements }) => (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
      <h2 className="text-xl font-bold mb-6 flex items-center">
        <Award size={20} className="mr-2" />
        Achievements
      </h2>
      <div className="space-y-4">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg border ${
              achievement.isUnlocked
                ? "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20"
                : "border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800/50"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <span className="text-2xl mr-3">{achievement.icon}</span>
                <div>
                  <div className="font-semibold">
                    {achievement.achievementName}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    {achievement.description}
                  </div>
                </div>
              </div>
              {achievement.isUnlocked && (
                <Check size={16} className="text-green-500" />
              )}
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${
                  achievement.isUnlocked ? "bg-green-500" : "bg-cyan-500"
                }`}
                style={{
                  width: `${Math.min(
                    100,
                    (achievement.progress / achievement.target) * 100
                  )}%`,
                }}
              ></div>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-right">
              {achievement.progress}/{achievement.target}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const TravelPrefsContent = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <PreferenceCard
        title="Flight Preferences"
        icon={<Plane size={24} className="text-blue-500" />}
        userData={userData}
      />
      <PreferenceCard
        title="Hotel Preferences"
        icon={<Bed size={24} className="text-purple-500" />}
        userData={userData}
      />
      <PreferenceCard
        title="Travel Style"
        icon={<Star size={24} className="text-yellow-500" />}
        userData={userData}
      />
    </div>
  );

  const PreferenceCard = ({ title, icon, userData }) => {
    const getFlightPreferences = () => [
      {
        label: "Preferred Class",
        value: userData.travelPreferences.preferredClass,
      },
      {
        label: "Seat Preference",
        value: userData.travelPreferences.seatPreference,
      },
      {
        label: "Meal Preference",
        value: userData.travelPreferences.mealPreference,
      },
    ];

    const getHotelPreferences = () => [
      {
        label: "Star Rating",
        value: `${userData.travelPreferences.starRating}+ stars`,
      },
      { label: "Room Type", value: userData.travelPreferences.roomType },
      { label: "Budget Range", value: userData.travelPreferences.budgetRange },
    ];

    const getTravelStyle = () => [
      { label: "Travel Type", value: userData.travelPreferences.travelType },
      {
        label: "Activity Level",
        value: userData.travelPreferences.activityLevel,
      },
      { label: "Travel Style", value: userData.preferences.travelStyle },
    ];

    const getPreferences = () => {
      switch (title) {
        case "Flight Preferences":
          return getFlightPreferences();
        case "Hotel Preferences":
          return getHotelPreferences();
        case "Travel Style":
          return getTravelStyle();
        default:
          return [];
      }
    };

    return (
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
        <div className="flex items-center gap-4 mb-4">
          {icon} <h3 className="text-lg font-bold">{title}</h3>
        </div>
        <div className="space-y-3">
          {getPreferences().map((pref, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700"
            >
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {pref.label}
              </span>
              <span className="font-semibold text-sm capitalize">
                {pref.value}
              </span>
            </div>
          ))}
        </div>
        <button className="w-full mt-4 py-2 text-sm text-cyan-600 hover:text-cyan-700 font-semibold flex items-center justify-center gap-2">
          <Edit size={14} />
          Edit Preferences
        </button>
      </div>
    );
  };

  const NotificationsContent = () => (
    <div className="max-w-4xl mx-auto space-y-8">
      <NotificationCategory
        title="Email Notifications"
        icon={<Mail size={22} />}
        settings={userData.notificationSettings}
      />
      <NotificationCategory
        title="Mobile Notifications"
        icon={<MessageSquare size={22} />}
        settings={userData.notificationSettings}
      />
      <NotificationCategory
        title="Marketing"
        icon={<BellRing size={22} />}
        settings={userData.notificationSettings}
      />
    </div>
  );

  const NotificationCategory = ({ title, icon, settings }) => {
    const getNotificationSettings = () => {
      switch (title) {
        case "Email Notifications":
          return [
            { label: "Booking Confirmations", key: "bookingConfirmations" },
            { label: "Price Alerts", key: "priceAlerts" },
            { label: "Travel Reminders", key: "travelReminders" },
            { label: "Weekly Digest", key: "weeklyDigest" },
          ];
        case "Mobile Notifications":
          return [
            { label: "Push Notifications", key: "pushNotifications" },
            { label: "SMS Alerts", key: "smsAlerts" },
          ];
        case "Marketing":
          return [{ label: "Marketing Emails", key: "marketingEmails" }];
        default:
          return [];
      }
    };

    return (
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-bold flex items-center gap-3 mb-6">
          {icon}
          {title}
        </h3>
        <div className="space-y-4">
          {getNotificationSettings().map((setting, index) => (
            <div key={index} className="flex items-center justify-between">
              <span className="font-medium">{setting.label}</span>
              <button
                className={`p-1 rounded-full transition-colors ${
                  settings[setting.key]
                    ? "bg-green-500"
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
              >
                {settings[setting.key] ? (
                  <ToggleRight size={32} className="text-white" />
                ) : (
                  <ToggleLeft size={32} />
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const BillingContent = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-8">
        <CurrentPlanCard userData={userData} />
        <BillingHistoryCard billingHistory={billingHistory} />
      </div>
      <div>
        <PaymentMethodsCard paymentMethods={paymentMethods} />
      </div>
    </div>
  );

  const CurrentPlanCard = ({ userData }) => (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
      <h2 className="text-xl font-bold mb-4">Current Plan</h2>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-6 rounded-xl mb-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-2xl font-bold mb-2">
              {userData.subscription.planName}
            </h3>
            <p className="opacity-90">
              Premium travel experience with exclusive benefits
            </p>
          </div>
          <span className="bg-white text-cyan-600 px-3 py-1 rounded-full text-sm font-bold">
            Active
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Billing Cycle
          </div>
          <div className="font-semibold">Annual</div>
        </div>
        <div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Next Billing
          </div>
          <div className="font-semibold">Jan 1, 2025</div>
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
  );

  const BillingHistoryCard = ({ billingHistory }) => (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
      <h2 className="text-xl font-bold mb-4">Billing History</h2>
      <div className="space-y-4">
        {billingHistory.map((invoice) => (
          <div
            key={invoice._id}
            className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
          >
            <div>
              <div className="font-semibold">{invoice.invoiceNumber}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {invoice.description}
              </div>
            </div>
            <div className="text-right">
              <div className="font-bold">${invoice.amount}</div>
              <div
                className={`text-xs px-2 py-1 rounded-full ${
                  invoice.status === "paid"
                    ? "bg-green-100 text-green-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {invoice.status}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const PaymentMethodsCard = ({ paymentMethods }) => (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
      <h2 className="text-xl font-bold mb-4">Payment Methods</h2>
      <div className="space-y-4 mb-6">
        {paymentMethods.map((method) => (
          <div
            key={method._id}
            className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
          >
            <div className="flex items-center gap-3">
              <CreditCard size={20} className="text-gray-400" />
              <div>
                <div className="font-semibold">
                  {method.cardBrand} •••• {method.lastFourDigits}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Expires {method.expiryMonth}/{method.expiryYear}
                </div>
              </div>
            </div>
            {method.isPrimary && (
              <span className="bg-cyan-100 text-cyan-800 text-xs px-2 py-1 rounded-full">
                Primary
              </span>
            )}
          </div>
        ))}
      </div>
      <button className="w-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition">
        <Plus size={16} />
        Add Payment Method
      </button>
    </div>
  );

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen font-sans text-gray-900 dark:text-gray-100">
      {/* Header placeholder */}

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

        <div className="">
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
