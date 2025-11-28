
import React from 'react';

const SubscriptionPlan = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 min-h-screen">
      <header className="flex justify-between items-center p-4 bg-white dark:bg-gray-900 shadow-md">
        <div className="flex items-center">
          <img src="Assets/Images/NaviGo_Logo.png" alt="NaviGo Logo" className="h-10" />
          <a href="#" className="ml-4 text-xl font-bold">Dashboard</a>
        </div>
        <nav className="hidden md:flex items-center space-x-4">
          <a href="#" className="hover:text-purple-600"><i className="fas fa-suitcase mr-2"></i>My Trips</a>
          <a href="#" className="hover:text-purple-600"><i className="fas fa-compass mr-2"></i>Explore</a>
          <a href="#" className="hover:text-purple-600"><i className="fas fa-clock mr-2"></i>History</a>
          <a href="#" className="hover:text-purple-600"><i className="fas fa-map-pin mr-2"></i>Plan</a>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
            <i className="fas fa-moon"></i>
          </button>
          <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
            <i className="fas fa-bell"></i>
          </button>
          <div className="relative">
            <div className="flex items-center cursor-pointer">
              <img src="Assets/Images/NaviGo_Logo.png" alt="Profile" className="h-8 w-8 rounded-full" />
              <span className="ml-2">User Name</span>
              <i className="fas fa-chevron-down ml-1"></i>
            </div>
            {/* Dropdown can be added here */}
          </div>
        </div>
      </header>

      <main className="p-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-purple-100 text-purple-600 px-4 py-2 rounded-full mb-4">
            <i className="fas fa-crown mr-2"></i>
            <span>Manage Your Plan</span>
          </div>
          <h1 className="text-4xl font-bold mb-2">Subscription Plans</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Choose the perfect plan for your travel adventures. Upgrade anytime to unlock more features.</p>
          <div className="inline-flex items-center bg-green-100 text-green-600 px-4 py-2 rounded-full">
            <i className="fas fa-star mr-2"></i>
            <span>Current Plan: Free</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Free Plan */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 relative">
            <div className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 rounded-bl-lg rounded-tr-lg">
              <i className="fas fa-check mr-2"></i>
              Current Plan
            </div>
            <div className="text-center mb-6">
              <div className="text-5xl text-purple-600 mb-4"><i className="fas fa-map"></i></div>
              <h3 className="text-2xl font-bold mb-2">Free</h3>
              <div className="text-3xl font-bold">
                ₱0<span className="text-lg font-normal">/month</span>
              </div>
            </div>
            <ul className="space-y-2 mb-6">
              <li><i className="fas fa-check text-green-500 mr-2"></i>Search destinations, flights & hotels</li>
              <li><i className="fas fa-check text-green-500 mr-2"></i>Simple itineraries</li>
              <li><i className="fas fa-check text-green-500 mr-2"></i>Limited travel guides</li>
              <li><i className="fas fa-check text-green-500 mr-2"></i>Last 3 trips</li>
              <li><i className="fas fa-check text-green-500 mr-2"></i>1 calendar</li>
            </ul>
            <button className="w-full bg-gray-300 text-gray-600 py-2 rounded-lg" disabled>Current Plan</button>
          </div>

          {/* Traveler Plan */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
            <div className="text-center mb-6">
              <div className="text-5xl text-blue-600 mb-4"><i className="fas fa-plane"></i></div>
              <h3 className="text-2xl font-bold mb-2">Traveler</h3>
              <div className="text-3xl font-bold">
                ₱250<span className="text-lg font-normal">/month</span>
              </div>
            </div>
            <ul className="space-y-2 mb-6">
              <li><i className="fas fa-check text-green-500 mr-2"></i>AI recommendations</li>
              <li><i className="fas fa-check text-green-500 mr-2"></i>Booking & cloud storage</li>
              <li><i className="fas fa-check text-green-500 mr-2"></i>Multi-calendar</li>
              <li><i className="fas fa-check text-green-500 mr-2"></i>Offline access</li>
              <li><i className="fas fa-check text-green-500 mr-2"></i>Priority support</li>
            </ul>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">Upgrade to Traveler</button>
          </div>

          {/* Premium Plan */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
            <div className="text-center mb-6">
              <div className="text-5xl text-yellow-500 mb-4"><i className="fas fa-crown"></i></div>
              <h3 className="text-2xl font-bold mb-2">Premium</h3>
              <div className="text-3xl font-bold">
                ₱499<span className="text-lg font-normal">/month</span>
              </div>
            </div>
            <ul className="space-y-2 mb-6">
              <li><i className="fas fa-check text-green-500 mr-2"></i>All Traveler features</li>
              <li><i className="fas fa-check text-green-500 mr-2"></i>24/7 concierge service</li>
              <li><i className="fas fa-check text-green-500 mr-2"></i>Group travel (up to 10)</li>
              <li><i className="fas fa-check text-green-500 mr-2"></i>Integrated travel insurance</li>
              <li><i className="fas fa-check text-green-500 mr-2"></i>Priority support</li>
            </ul>
            <button className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600">Upgrade to Premium</button>
          </div>
        </div>

        <div className="mt-12 bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-4">Need help choosing the right plan?</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8">Our travel experts are here to help you find the perfect plan for your adventures. All plans include secure cloud storage, mobile sync, and 30-day money-back guarantee.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-8">
            <div>
              <div className="text-4xl font-bold text-blue-500">99.9%</div>
              <div className="text-gray-600 dark:text-gray-400">Uptime</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-500">24/7</div>
              <div className="text-gray-600 dark:text-gray-400">Support</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-500">30</div>
              <div className="text-gray-600 dark:text-gray-400">Day trial</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500">50K+</div>
              <div className="text-gray-600 dark:text-gray-400">Happy travelers</div>
            </div>
          </div>
          <div className="flex justify-center space-x-4 mb-4">
            <button className="bg-gray-800 text-white px-6 py-2 rounded-lg">Contact Sales Team</button>
            <button className="border border-gray-300 dark:border-gray-600 px-6 py-2 rounded-lg">Compare All Features</button>
          </div>
          <p className="text-center text-sm text-gray-500">No setup fees • Cancel anytime • 30-day money-back guarantee</p>
        </div>
      </main>
    </div>
  );
};

export default SubscriptionPlan;
