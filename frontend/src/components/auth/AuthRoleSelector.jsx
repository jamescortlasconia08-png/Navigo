import React from "react";
import { useNavigate } from "react-router-dom";
import { X, Plane, Building2 } from "lucide-react";

const AuthRoleSelector = ({ isOpen, onClose, mode = "login" }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleRoleSelect = (role) => {
    if (mode === "login") {
      if (role === "traveler") {
        navigate("/login/user");
      } else {
        navigate("/login/business");
      }
    } else {
      // mode === "register"
      if (role === "traveler") {
        navigate("/register/user");
      } else {
        navigate("/register/business");
      }
    }
    onClose();
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full mx-4 p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {mode === "login" ? "Login to Your Account" : "Get Started"}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {mode === "login"
              ? "Choose your account type to continue"
              : "Select your account type to begin your journey"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Traveler Card */}
          <div
            onClick={() => handleRoleSelect("traveler")}
            className="group cursor-pointer bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-xl border-2 border-gray-200 dark:border-gray-600 hover:border-cyan-500 dark:hover:border-cyan-500 transition-all duration-300 p-6 hover:shadow-xl"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center">
                <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 rounded-full mr-4">
                  <Plane size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Travel Pass
                  </div>
                  <div className="font-bold text-gray-900 dark:text-white">
                    Personal Explorer
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Type
                </div>
                <div className="font-bold text-gray-900 dark:text-white">
                  INDIVIDUAL
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
              Personal Account
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Your personal gateway to intelligent travel planning and
              unforgettable adventures
            </p>
            <ul className="space-y-2 mb-4 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-center">
                <span className="mr-2">✓</span> AI-powered recommendations
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span> Secure itinerary storage
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span> Group collaboration
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span> Cost optimization
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span> Cross-platform sync
              </li>
            </ul>
            <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-600">
              <div>
                <span className="block font-bold text-gray-900 dark:text-white">
                  {mode === "login"
                    ? "Login as Traveler"
                    : "Get Started as Traveler"}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Free plan available
                </span>
              </div>
              <span className="text-2xl text-cyan-600 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </div>
          </div>

          {/* Business Partner Card */}
          <div
            onClick={() => handleRoleSelect("business")}
            className="group cursor-pointer bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-xl border-2 border-gray-200 dark:border-gray-600 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300 p-6 hover:shadow-xl"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full mr-4">
                  <Building2 size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Partner Access
                  </div>
                  <div className="font-bold text-gray-900 dark:text-white">
                    Business Elite
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Type
                </div>
                <div className="font-bold text-gray-900 dark:text-white">
                  ENTERPRISE
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
              Business Partner
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Connect with travelers worldwide and grow your business through
              our premium network
            </p>
            <ul className="space-y-2 mb-4 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-center">
                <span className="mr-2">✓</span> Booking & inventory management
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span> Advanced analytics dashboard
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span> System integrations
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span> Bulk discount controls
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span> Enterprise security
              </li>
            </ul>
            <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-600">
              <div>
                <span className="block font-bold text-gray-900 dark:text-white">
                  {mode === "login"
                    ? "Login as Business Partner"
                    : "Get Started as Business Partner"}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Custom enterprise pricing
                </span>
              </div>
              <span className="text-2xl text-purple-600 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthRoleSelector;

