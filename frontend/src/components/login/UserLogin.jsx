import React, { useContext, useState } from "react";
import {
  ArrowLeft,
  Moon,
  Zap,
  Shield,
  Users,
  MapPin,
  Globe,
  Plane,
  Compass,
  Mail,
  Lock,
} from "lucide-react";
import logo from "../../assets/NaviGo_Logo.png";
import { AuthContext } from "../../context/AuthContext";
import { login, register } from "../../services/authentication/userAuthService";

const UserLogin = () => {
  const [isRegister, setIsRegister] = useState(false);
  const { setUser } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Form state for login
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // Form state for register
  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (!loginData.email || !loginData.password) {
      setError("Please fill in all fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(loginData.email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Password validation
    if (loginData.password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    try {
      setIsLoading(true);

      // Call the login service
      const response = await login(loginData);

      // Set user in context
      setUser(response.user);

      // Reset form
      setLoginData({
        email: "",
        password: "",
      });

      // Show success message
      alert("Login successful! Welcome back!");
    } catch (err) {
      // Handle error from service
      const errorMessage =
        err.response?.data?.error || "Login failed. Please try again.";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (
      !registerData.firstName ||
      !registerData.lastName ||
      !registerData.email ||
      !registerData.password ||
      !registerData.confirmPassword
    ) {
      setError("Please fill in all fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(registerData.email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Password validation
    if (registerData.password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    // Password confirmation
    if (registerData.password !== registerData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setIsLoading(true);

      // Call register service
      const response = await register({
        first_name: registerData.firstName,
        last_name: registerData.lastName,
        email: registerData.email,
        password: registerData.password,
        confirm_password: registerData.confirmPassword,
      });

      // Set user in context from response
      setUser(response.user);

      // Reset form
      setRegisterData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      alert(response.message || "Registration successful! Welcome to NaviGo!");
    } catch (err) {
      const errorMessage =
        err.response?.data?.error || "Registration failed. Please try again.";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  // Update login form data
  const handleLoginChange = (e) => {
    const { id, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [id]: value,
    }));
    setError(""); // Clear error when user types
  };

  // Update register form data
  const handleRegisterChange = (e) => {
    const { id, value } = e.target;
    setRegisterData((prev) => ({
      ...prev,
      [id]: value,
    }));
    setError(""); // Clear error when user types
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center font-sans text-gray-900 dark:text-gray-100">
      <div className="container mx-auto p-4 flex justify-center">
        <div className="flex flex-col lg:flex-row w-full max-w-6xl bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 p-8 lg:p-12 bg-cyan-600 text-white hidden md:block">
            <button
              className="text-white mb-8 flex items-center"
              onClick={() => window.history.back()}
            >
              <ArrowLeft size={16} className="mr-2" /> Back
            </button>
            <div className="mb-8">
              <img src={logo} alt="NaviGo Logo" className="h-12" />
            </div>
            <h1 className="text-4xl font-bold mb-3">
              <span className="block">Your Journey</span>
              <span className="block">Starts Here</span>
            </h1>
            <h2 className="text-2xl mb-6">Welcome to NaviGo</h2>
            <p className="mb-8 leading-relaxed">
              Your intelligent travel companion for seamless trip planning, cost
              optimization, and collaborative group adventures that create
              lasting memories.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start">
                <Zap size={24} className="text-cyan-300 mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold">AI-Powered Planning</h4>
                  <p className="text-sm text-cyan-200">
                    Smart recommendations for you
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Shield size={24} className="text-cyan-300 mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold">Secure & Synced</h4>
                  <p className="text-sm text-cyan-200">
                    All your adventures in one place
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Users size={24} className="text-cyan-300 mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold">Group Adventures</h4>
                  <p className="text-sm text-cyan-200">
                    Collaborate and explore together
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin size={24} className="text-cyan-300 mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold">Smart Savings</h4>
                  <p className="text-sm text-cyan-200">
                    Optimize costs on every journey
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Login Panel */}
          <div className="w-full lg:w-1/2 p-8 lg:p-12">
            <div className="text-right mb-6">
              <h3 className="text-sm font-semibold text-gray-500">
                NAVIGO ACCESS
              </h3>
              <h4 className="text-lg font-bold">Your Travel Portal</h4>
            </div>

            <div className="mb-6">
              <div className="flex border border-gray-300 dark:border-gray-600 rounded-lg p-1">
                <button
                  className={`w-1/2 py-2 rounded-md font-semibold transition ${
                    !isRegister ? "bg-cyan-600 text-white" : "text-gray-500"
                  }`}
                  onClick={() => setIsRegister(false)}
                >
                  Sign In
                </button>
                <button
                  className={`w-1/2 py-2 rounded-md font-semibold transition ${
                    isRegister ? "bg-cyan-600 text-white" : "text-gray-500"
                  }`}
                  onClick={() => setIsRegister(true)}
                >
                  New Journey
                </button>
              </div>
            </div>

            {/* Error message */}
            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
                {error}
              </div>
            )}

            {/* Sign In Form */}
            <form
              onSubmit={handleLoginSubmit}
              className={`${isRegister ? "hidden" : "block"}`}
            >
              <h5 className="text-xl font-bold mb-1">Access Your Journey</h5>
              <p className="text-gray-500 mb-6">
                Sign in to continue your travel story
              </p>
              <div className="mb-4">
                <label
                  className="block text-sm font-semibold mb-2 flex items-center"
                  htmlFor="email"
                >
                  <MapPin size={14} className="mr-2" />
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={loginData.email}
                  onChange={handleLoginChange}
                  placeholder="traveler@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  disabled={isLoading}
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-sm font-semibold mb-2 flex items-center"
                  htmlFor="password"
                >
                  <Shield size={14} className="mr-2" />
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  placeholder="Your secure password"
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  disabled={isLoading}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-cyan-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-cyan-700 transition flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading}
              >
                {isLoading ? (
                  "Signing in..."
                ) : (
                  <>
                    <Plane size={16} className="mr-2" /> Begin Journey
                  </>
                )}
              </button>
            </form>

            {/* Register Form */}
            <form
              onSubmit={handleRegisterSubmit}
              className={`${!isRegister ? "hidden" : "block"}`}
            >
              <h5 className="text-xl font-bold mb-1">Create Your Account</h5>
              <p className="text-gray-500 mb-6">
                Start your adventure with NaviGo
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-sm font-semibold mb-2"
                    htmlFor="firstName"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={registerData.firstName}
                    onChange={handleRegisterChange}
                    placeholder="Explorer"
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    disabled={isLoading}
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-semibold mb-2"
                    htmlFor="lastName"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={registerData.lastName}
                    onChange={handleRegisterChange}
                    placeholder="Adventurer"
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    disabled={isLoading}
                  />
                </div>
                <div className="col-span-2">
                  <label
                    className="block text-sm font-semibold mb-2 flex items-center"
                    htmlFor="email"
                  >
                    <Globe size={14} className="mr-2" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={registerData.email}
                    onChange={handleRegisterChange}
                    placeholder="explorer@wanderlust.com"
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    disabled={isLoading}
                  />
                </div>
                <div className="col-span-2">
                  <label
                    className="block text-sm font-semibold mb-2 flex items-center"
                    htmlFor="password"
                  >
                    <Lock size={14} className="mr-2" />
                    Secure Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={registerData.password}
                    onChange={handleRegisterChange}
                    placeholder="Create your travel key"
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    disabled={isLoading}
                  />
                </div>
                <div className="col-span-2">
                  <label
                    className="block text-sm font-semibold mb-2 flex items-center"
                    htmlFor="confirmPassword"
                  >
                    <Lock size={14} className="mr-2" />
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    value={registerData.confirmPassword}
                    onChange={handleRegisterChange}
                    placeholder="Repeat your travel key"
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    disabled={isLoading}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full mt-6 bg-cyan-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-cyan-700 transition flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading}
              >
                <Compass size={16} className="mr-2" /> Start Adventure
              </button>
            </form>

            <div className="mt-6 text-center">
              <a href="#" className="text-sm text-cyan-600 hover:underline">
                Lost your travel pass?
              </a>
            </div>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white dark:bg-gray-800 text-gray-500">
                    QUICK ACCESS
                  </span>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
                  <Mail size={16} className="mr-2" /> Google
                </button>
                <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
                  <Mail size={16} className="mr-2" /> Microsoft
                </button>
              </div>
            </div>

            <div className="mt-6 text-xs text-gray-500 text-center">
              By continuing, you agree to our{" "}
              <a href="#" className="underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
