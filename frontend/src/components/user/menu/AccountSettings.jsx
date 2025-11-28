import React, { useState } from "react";
import {
  Shield,
  Globe,
  Laptop,
  Bell,
  Key,
  Lock,
  Clock,
  Eye,
  EyeOff,
  User,
  Crown,
  Settings,
  HelpCircle,
  LogOut,
  Briefcase,
  Compass,
  MapPin,
  ChevronDown,
  Moon,
} from "lucide-react";

const AccountSettingsPage = () => {
  const [activeTab, setActiveTab] = useState("security");
  const [profileOpen, setProfileOpen] = useState(false);

  const NavTab = ({ tabId, currentTab, onClick, icon, children }) => (
    <button
      onClick={() => onClick(tabId)}
      className={`flex items-center gap-3 px-4 py-2.5 font-semibold rounded-lg transition-colors duration-200 text-sm ${
        currentTab === tabId
          ? "bg-cyan-600 text-white shadow-md"
          : "text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700"
      }`}
    >
      {icon}
      {children}
    </button>
  );

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen font-sans text-gray-900 dark:text-gray-100">
      <div className="max-w-7xl mx-auto p-6 lg:p-10">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">Account Settings</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Manage your account security, privacy, and notification preferences.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <aside className="md:w-1/4 lg:w-1/5">
            <div className="flex flex-row md:flex-col gap-2 bg-gray-200 dark:bg-gray-800 p-2 rounded-xl">
              <NavTab
                tabId="security"
                currentTab={activeTab}
                onClick={setActiveTab}
                icon={<Shield size={18} />}
              >
                Security
              </NavTab>
              <NavTab
                tabId="privacy"
                currentTab={activeTab}
                onClick={setActiveTab}
                icon={<Globe size={18} />}
              >
                Privacy
              </NavTab>
              <NavTab
                tabId="sessions"
                currentTab={activeTab}
                onClick={setActiveTab}
                icon={<Laptop size={18} />}
              >
                Sessions
              </NavTab>
              <NavTab
                tabId="notifications"
                currentTab={activeTab}
                onClick={setActiveTab}
                icon={<Bell size={18} />}
              >
                Notifications
              </NavTab>
            </div>
          </aside>

          <main className="flex-1">
            {activeTab === "security" && <SecurityTab />}
            {activeTab === "privacy" && <PrivacyTab />}
            {activeTab === "sessions" && <SessionsTab />}
            {activeTab === "notifications" && <NotificationsTab />}
          </main>
        </div>
      </div>
    </div>
  );
};

const SettingsCard = ({ title, icon, children }) => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
    <div className="p-5 border-b border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-bold flex items-center gap-3">
        {icon}
        {title}
      </h3>
    </div>
    <div className="p-5 space-y-6">{children}</div>
  </div>
);

const Toggle = ({ id, label, description, checked, onChange }) => (
  <div className="flex items-center justify-between">
    <div>
      <h4 className="font-semibold">{label}</h4>
      <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
    </div>
    <button
      onClick={onChange}
      className={`w-12 h-6 rounded-full p-1 transition-colors ${
        checked ? "bg-cyan-600" : "bg-gray-300 dark:bg-gray-600"
      }`}
    >
      <div
        className={`w-4 h-4 rounded-full bg-white transform transition-transform ${
          checked ? "translate-x-6" : "translate-x-0"
        }`}
      ></div>
    </button>
  </div>
);

const SecurityTab = () => {
  const [showPass, setShowPass] = useState(false);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-8">
        <SettingsCard title="Password Settings" icon={<Key size={20} />}>
          {/* Password form fields */}
        </SettingsCard>
        <SettingsCard title="Security Preferences" icon={<Lock size={20} />}>
          <Toggle
            id="login_alerts"
            label="Login Alerts"
            description="Get notified of new device logins"
            checked={true}
          />
          <Toggle
            id="password_expiry"
            label="Password Expiry"
            description="Require password change every 90 days"
          />
        </SettingsCard>
      </div>
      <div className="space-y-8">
        <SettingsCard
          title="Two-Factor Authentication"
          icon={<Shield size={20} />}
        >
          {/* 2FA content */}
        </SettingsCard>
        <SettingsCard title="Session Timeout" icon={<Clock size={20} />}>
          {/* Session timeout dropdown */}
        </SettingsCard>
      </div>
    </div>
  );
};

const PrivacyTab = () => (
  <SettingsCard title="Privacy Settings" icon={<Globe size={20} />}>
    {/* Privacy toggles and buttons */}
  </SettingsCard>
);

const SessionsTab = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    <SettingsCard title="Active Sessions" icon={<Laptop size={20} />}>
      {/* Active sessions list */}
    </SettingsCard>
    <SettingsCard title="Login History" icon={<Clock size={20} />}>
      {/* Login history list */}
    </SettingsCard>
  </div>
);

const NotificationsTab = () => (
  <SettingsCard title="Account Notifications" icon={<Bell size={20} />}>
    {/* Notification toggles */}
  </SettingsCard>
);

export default AccountSettingsPage;
