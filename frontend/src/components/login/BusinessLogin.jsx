
import React, { useState } from 'react';

const BusinessLogin = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center font-sans text-gray-900 dark:text-gray-100">
      <div className="container mx-auto p-4 flex justify-center">
        <div className="flex flex-col lg:flex-row w-full max-w-6xl bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 p-8 lg:p-12 bg-purple-600 text-white">
            <button className="text-white mb-8" onClick={() => window.history.back()}>
              <i className="fas fa-arrow-left"></i> Back
            </button>
            <div className="mb-8">
              <img src="/Assets/Images/NaviGo_Logo.png" alt="NaviGo Logo" className="h-12" />
            </div>
            <h1 className="text-4xl font-bold mb-3">
              <span className="block">Your Partnership</span>
              <span className="block">Starts Here</span>
            </h1>
            <h2 className="text-2xl mb-6">Welcome to NaviGo</h2>
            <p className="mb-8 leading-relaxed">
              Join NaviGo's trusted partner network and unlock new opportunities to grow your business and reach millions of travelers worldwide.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start">
                <i className="fas fa-chart-line text-2xl text-purple-300 mr-4 mt-1"></i>
                <div>
                  <h4 className="font-semibold">Grow Your Business</h4>
                  <p className="text-sm text-purple-200">Access new customer segments</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-shield-alt text-2xl text-purple-300 mr-4 mt-1"></i>
                <div>
                  <h4 className="font-semibold">Bank-Grade Security</h4>
                  <p className="text-sm text-purple-200">Enterprise-level protection</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-chart-bar text-2xl text-purple-300 mr-4 mt-1"></i>
                <div>
                  <h4 className="font-semibold">Analytics Dashboard</h4>
                  <p className="text-sm text-purple-200">Detailed business insights</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-code text-2xl text-purple-300 mr-4 mt-1"></i>
                <div>
                  <h4 className="font-semibold">Seamless API Access</h4>
                  <p className="text-sm text-purple-200">Easy integration and setup</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Login Panel */}
          <div className="w-full lg:w-1/2 p-8 lg:p-12">
            <div className="text-right mb-6">
              <h3 className="text-sm font-semibold text-gray-500">PARTNER ACCESS</h3>
              <h4 className="text-lg font-bold">Business Portal</h4>
            </div>

            <div className="mb-6">
              <div className="flex border border-gray-300 dark:border-gray-600 rounded-lg p-1">
                <button
                  className={`w-1/2 py-2 rounded-md font-semibold transition ${!isRegister ? 'bg-purple-600 text-white' : 'text-gray-500'}`}
                  onClick={() => setIsRegister(false)}
                >
                  Sign In
                </button>
                <button
                  className={`w-1/2 py-2 rounded-md font-semibold transition ${isRegister ? 'bg-purple-600 text-white' : 'text-gray-500'}`}
                  onClick={() => setIsRegister(true)}
                >
                  Register
                </button>
              </div>
            </div>

            {/* Sign In Form */}
            <form className={`${isRegister ? 'hidden' : 'block'}`}>
              <h5 className="text-xl font-bold mb-1">Partner Access</h5>
              <p className="text-gray-500 mb-6">Sign in to your business portal</p>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2" htmlFor="email">
                  <i className="fas fa-briefcase mr-2"></i>Business Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="your-business@company.com"
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2" htmlFor="password">
                  <i className="fas fa-lock mr-2"></i>Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-purple-700 transition flex items-center justify-center"
              >
                <i className="fas fa-handshake mr-2"></i> Begin Partnership
              </button>
            </form>

            {/* Register Form */}
            <form className={`${!isRegister ? 'hidden' : 'block'}`}>
               <h5 className="text-xl font-bold mb-1">Partner Registration</h5>
               <p className="text-gray-500 mb-6">Connect with millions of travelers</p>
               <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                    <label className="block text-sm font-semibold mb-2" htmlFor="business_name">Business Name</label>
                    <input type="text" id="business_name" placeholder="Your Business Name" className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"/>
                </div>
                 <div className="col-span-2">
                    <label className="block text-sm font-semibold mb-2" htmlFor="business_type">Business Type</label>
                    <select id="business_type" className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500">
                        <option value="">Select business type</option>
                        <option value="Airlines">Airlines</option>
                        <option value="Hotels">Hotels</option>
                        <option value="transport">Transportation</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                 <div>
                    <label className="block text-sm font-semibold mb-2" htmlFor="first_name">Contact First Name</label>
                    <input type="text" id="first_name" placeholder="John" className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"/>
                </div>
                 <div>
                    <label className="block text-sm font-semibold mb-2" htmlFor="last_name">Contact Last Name</label>
                    <input type="text" id="last_name" placeholder="Doe" className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"/>
                </div>
                 <div className="col-span-2">
                    <label className="block text-sm font-semibold mb-2" htmlFor="reg_email"><i className="fas fa-envelope mr-2"></i>Business Email</label>
                    <input type="email" id="reg_email" placeholder="contact@yourbusiness.com" className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"/>
                </div>
                <div className="col-span-2">
                    <label className="block text-sm font-semibold mb-2" htmlFor="reg_password"><i className="fas fa-lock mr-2"></i>Password</label>
                    <input type="password" id="reg_password" placeholder="Create a strong password" className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"/>
                </div>
               </div>
               <button
                type="submit"
                className="w-full mt-6 bg-purple-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-purple-700 transition flex items-center justify-center"
              >
                <i className="fas fa-rocket mr-2"></i> Launch Partnership
              </button>
            </form>
            
            <div className="mt-6 text-center">
                <a href="#" className="text-sm text-purple-600 hover:underline">Forgot your password?</a>
            </div>
            
            <div className="mt-6">
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white dark:bg-gray-800 text-gray-500">QUICK ACCESS</span>
                    </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                    <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
                        <i className="fab fa-google mr-2"></i> Google
                    </button>
                    <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
                        <i className="fab fa-microsoft mr-2"></i> Microsoft
                    </button>
                </div>
            </div>

            <div className="mt-6 text-xs text-gray-500 text-center">
                By registering, you agree to our <a href="#" className="underline">Partner Terms</a> and <a href="#" className="underline">Privacy Policy</a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessLogin;
