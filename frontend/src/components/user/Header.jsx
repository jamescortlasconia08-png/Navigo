import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Briefcase,
  Compass,
  Clock,
  MapPin,
  Moon,
  Bell,
  ChevronDown,
  User,
  Crown,
  Settings,
  LogOut,
} from "lucide-react";

import logo from "../../assets/NaviGo_Logo.png";
import { AuthContext } from "../../context/AuthContext";

const Header = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const { logout } = useContext(AuthContext);
  const location = useLocation();

  // Helper function to check if current path matches
  const isActive = (path) => {
    // Exact match or starts with path (for nested routes)
    return (
      location.pathname === path || location.pathname.startsWith(`${path}/`)
    );
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50 flex items-center justify-between px-6 py-3">
      <div className="flex items-center space-x-6">
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="NaviGo Logo" className="h-10" />
          <span className="font-bold text-xl text-cyan-600">Dashboard</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-4">
          <Link
            to="/my-trips"
            className={`flex items-center space-x-2 transition-colors ${
              isActive("/my-trips")
                ? "text-cyan-600 font-semibold"
                : "text-gray-500 hover:text-cyan-600"
            }`}
          >
            <Briefcase size={20} />
            <span>My Trips</span>
          </Link>
          <Link
            to="/explore"
            className={`flex items-center space-x-2 transition-colors ${
              isActive("/explore")
                ? "text-cyan-600 font-semibold"
                : "text-gray-500 hover:text-cyan-600"
            }`}
          >
            <Compass size={20} />
            <span>Explore</span>
          </Link>
          <Link
            to="/history"
            className={`flex items-center space-x-2 transition-colors ${
              isActive("/history")
                ? "text-cyan-600 font-semibold"
                : "text-gray-500 hover:text-cyan-600"
            }`}
          >
            <Clock size={20} />
            <span>History</span>
          </Link>
          <Link
            to="/plan"
            className={`flex items-center space-x-2 transition-colors ${
              isActive("/plan")
                ? "text-cyan-600 font-semibold"
                : "text-gray-500 hover:text-cyan-600"
            }`}
          >
            <MapPin size={20} />
            <span>Plan</span>
          </Link>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-gray-500 hover:text-cyan-600">
          <Moon size={22} />
        </button>
        <button className="text-gray-500 hover:text-cyan-600 relative">
          <Bell size={22} />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="relative">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => setProfileOpen(!profileOpen)}
          >
            <img
              src={logo}
              alt="Profile"
              className="h-9 w-9 rounded-full border-2 border-cyan-500"
            />
            <span className="hidden text-cyan-100 sm:block font-semibold">
              User Name
            </span>
            <ChevronDown
              size={16}
              className={`transition-transform ${
                profileOpen ? "rotate-180" : ""
              }`}
            />
          </div>
          {profileOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-xl py-2 z-50">
              <Link
                to="/profile"
                className={`flex items-center px-4 py-2 text-sm transition-colors ${
                  isActive("/profile")
                    ? "text-cyan-600 font-semibold bg-cyan-50 dark:bg-cyan-900/20"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
                onClick={() => setProfileOpen(false)}
              >
                <User size={16} className="mr-3" />
                View Profile
              </Link>
              <Link
                to="/plan"
                className={`flex items-center px-4 py-2 text-sm transition-colors ${
                  isActive("/plan")
                    ? "text-cyan-600 font-semibold bg-cyan-50 dark:bg-cyan-900/20"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
                onClick={() => setProfileOpen(false)}
              >
                <Crown size={16} className="mr-3" />
                Trips & Plans
              </Link>
              <Link
                to="/subscription"
                className={`flex items-center px-4 py-2 text-sm transition-colors ${
                  isActive("/plan")
                    ? "text-cyan-600 font-semibold bg-cyan-50 dark:bg-cyan-900/20"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
                onClick={() => setProfileOpen(false)}
              >
                <Crown size={16} className="mr-3" />
                Subscription & Billing
              </Link>
              <Link
                to="/account-settings"
                className={`flex items-center px-4 py-2 text-sm transition-colors ${
                  isActive("/account-settings")
                    ? "text-cyan-600 font-semibold bg-cyan-50 dark:bg-cyan-900/20"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
                onClick={() => setProfileOpen(false)}
              >
                <Settings size={16} className="mr-3" />
                Account Settings
              </Link>
              <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>
              <button
                onClick={() => {
                  logout();
                  setProfileOpen(false);
                }}
                className="flex items-center px-4 py-2 text-sm text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left"
              >
                <LogOut size={16} className="mr-3" />
                End Journey
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
