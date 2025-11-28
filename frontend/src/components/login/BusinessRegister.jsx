import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Building, Mail, User, Phone, Lock, Eye, EyeOff } from "lucide-react";
import logo from "../../assets/NaviGo_Logo.png";

const BusinessRegister = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 space-y-6">
        <div className="text-center">
          <img src={logo} alt="NaviGo Logo" className="w-24 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Create Business Account
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Join NaviGo to manage your business travel.
          </p>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
          <div className="md:col-span-2">
            <label className="font-semibold">Business Name</label>
            <div className="relative mt-1">
              <Building
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Your Company, Inc."
                className="w-full pl-10 pr-3 py-2.5 bg-gray-100 dark:bg-gray-700 rounded-lg"
              />
            </div>
          </div>
          <div>
            <label className="font-semibold">Your First Name</label>
            <div className="relative mt-1">
              <User
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="John"
                className="w-full pl-10 pr-3 py-2.5 bg-gray-100 dark:bg-gray-700 rounded-lg"
              />
            </div>
          </div>
          <div>
            <label className="font-semibold">Your Last Name</label>
            <div className="relative mt-1">
              <User
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Doe"
                className="w-full pl-10 pr-3 py-2.5 bg-gray-100 dark:bg-gray-700 rounded-lg"
              />
            </div>
          </div>
          <div className="md:col-span-2">
            <label className="font-semibold">Business Email</label>
            <div className="relative mt-1">
              <Mail
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full pl-10 pr-3 py-2.5 bg-gray-100 dark:bg-gray-700 rounded-lg"
              />
            </div>
          </div>
          <div className="md:col-span-2">
            <label className="font-semibold">Business Phone</label>
            <div className="relative mt-1">
              <Phone
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="tel"
                placeholder="+1 (555) 000-0000"
                className="w-full pl-10 pr-3 py-2.5 bg-gray-100 dark:bg-gray-700 rounded-lg"
              />
            </div>
          </div>
          <div>
            <label className="font-semibold">Password</label>
            <div className="relative mt-1">
              <Lock
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full pl-10 pr-10 py-2.5 bg-gray-100 dark:bg-gray-700 rounded-lg"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          <div>
            <label className="font-semibold">Confirm Password</label>
            <div className="relative mt-1">
              <Lock
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                className="w-full pl-10 pr-10 py-2.5 bg-gray-100 dark:bg-gray-700 rounded-lg"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="md:col-span-2 pt-4">
            <button
              type="submit"
              className="w-full bg-cyan-600 text-white font-bold py-3 rounded-lg hover:bg-cyan-700 transition shadow-lg"
            >
              Create Account
            </button>
          </div>
        </form>

        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login/business"
            className="font-semibold text-cyan-600 hover:underline"
          >
            Sign in here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BusinessRegister;
