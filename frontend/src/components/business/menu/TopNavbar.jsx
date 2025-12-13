import React, { useContext, useState, useRef, useEffect } from "react";
import {
  Star,
  Bell,
  Settings,
  Moon,
  ChevronDown,
  Building,
  User,
  LogOut,
  HelpCircle,
  Shield,
  CreditCard,
} from "lucide-react";
import { AuthContext } from "../../../context/AuthContext";

const TopNavbar = ({ businessData, userData, getUserInitials }) => {
  const { logout } = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    logout();
    setIsDropdownOpen(false);
  };

  const handleProfileClick = () => {
    // Navigate to profile page or open profile modal
    console.log("Navigate to profile");
    setIsDropdownOpen(false);
  };

  const handleSettingsClick = () => {
    // Navigate to settings page
    console.log("Navigate to settings");
    setIsDropdownOpen(false);
  };

  const handleBillingClick = () => {
    // Navigate to billing page
    console.log("Navigate to billing");
    setIsDropdownOpen(false);
  };

  const handleSupportClick = () => {
    // Navigate to support page
    console.log("Navigate to support");
    setIsDropdownOpen(false);
  };

  const menuItems = [
    {
      label: "Profile",
      icon: <User size={18} />,
      onClick: handleProfileClick,
    },
    {
      label: "Settings",
      icon: <Settings size={18} />,
      onClick: handleSettingsClick,
    },
    {
      label: "Billing",
      icon: <CreditCard size={18} />,
      onClick: handleBillingClick,
      badge: userData?.subscription_plan || "Premium",
    },
    {
      label: "Security",
      icon: <Shield size={18} />,
      onClick: () => {
        console.log("Navigate to security");
        setIsDropdownOpen(false);
      },
    },
    {
      label: "Help & Support",
      icon: <HelpCircle size={18} />,
      onClick: handleSupportClick,
    },
    {
      label: "Logout",
      icon: <LogOut size={18} />,
      onClick: handleLogout,
      isDanger: true,
    },
  ];

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <Building size={28} className="text-cyan-600" />
            <div>
              <h1 className="text-xl font-bold">Partner Portal</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Business Dashboard
              </p>
            </div>
          </div>
          <span className="bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300 text-sm font-semibold px-3 py-1 rounded-full">
            {businessData?.business_type || "Travel Partner"}
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <button
            className="p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            title="Dark mode"
          >
            <Moon size={20} />
          </button>
          <button
            className="p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            title="Settings"
          >
            <Settings size={20} />
          </button>
          <button
            className="relative p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            title="Notifications"
          >
            <Bell size={20} />
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>

          {/* User Profile with Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-3 px-3 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg cursor-pointer transition-colors"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                {getUserInitials()}
              </div>
              <div className="text-left">
                <div className="font-semibold text-sm">
                  {userData
                    ? `${userData.first_name} ${userData.last_name}`
                    : businessData?.business_name || "Business"}
                </div>
                <div className="text-xs text-green-500 flex items-center">
                  <Star size={10} className="mr-1" fill="currentColor" />
                  {userData?.subscription_plan || "Premium"} Partner
                </div>
              </div>
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden z-50">
                {/* User Info Section */}
                <div className="p-4 border-b border-gray-100 dark:border-gray-700">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      {getUserInitials()}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">
                        {userData
                          ? `${userData.first_name} ${userData.last_name}`
                          : businessData?.business_name || "Business"}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {userData?.email || "business@example.com"}
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-cyan-600 dark:text-cyan-400 font-medium">
                    {userData?.role
                      ? `${
                          userData.role.charAt(0).toUpperCase() +
                          userData.role.slice(1)
                        } Account`
                      : "Business Account"}
                  </div>
                </div>

                {/* Menu Items */}
                <div className="py-2">
                  {menuItems.map((item, index) => (
                    <button
                      key={index}
                      onClick={item.onClick}
                      className={`w-full flex items-center justify-between px-4 py-3 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                        item.isDanger
                          ? "text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300"
                          : "text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`${
                            item.isDanger
                              ? "text-red-500"
                              : "text-gray-500 dark:text-gray-400"
                          }`}
                        >
                          {item.icon}
                        </div>
                        <span>{item.label}</span>
                      </div>
                      {item.badge && (
                        <span className="px-2 py-1 text-xs font-semibold bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </button>
                  ))}
                </div>

                {/* Footer */}
                <div className="px-4 py-3 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span>v2.4.1</span>
                    <span>© 2024 Partner Portal</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
