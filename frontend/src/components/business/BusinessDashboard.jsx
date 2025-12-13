import React from "react";

const BusinessDashboard = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen font-sans">
      {/* Top Navigation Bar */}
      <nav className="bg-white dark:bg-gray-800 shadow-md flex items-center justify-between px-6 py-3">
        <div className="flex items-center space-x-4">
          <img
            src="/Assets/Images/NaviGo_Logo.png"
            alt="NaviGo Logo"
            className="h-10"
          />
          <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
            Partner Portal
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-2 text-xl">
          <i className="fas fa-chart-bar text-gray-600 dark:text-gray-400"></i>
          <span className="font-semibold">Dashboard</span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 dark:text-gray-400 hover:text-blue-500">
            <i className="fas fa-moon"></i>
          </button>
          <button className="text-gray-600 dark:text-gray-400 hover:text-blue-500">
            <i className="fas fa-cog"></i>
          </button>
          <button className="relative text-gray-600 dark:text-gray-400 hover:text-blue-500">
            <i className="fas fa-bell"></i>
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="relative">
            <div className="flex items-center space-x-2 cursor-pointer">
              <div className="bg-gray-200 dark:bg-gray-700 rounded-full p-2">
                <i className="fas fa-building text-gray-600 dark:text-gray-300"></i>
              </div>
              <div>
                <div className="font-semibold text-sm">Business Name</div>
                <div className="text-xs text-green-500">Free Partner</div>
              </div>
              <i className="fas fa-chevron-down text-xs"></i>
            </div>
            {/* Dropdown can be implemented here */}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="p-6">
        {/* Business Header Card */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex justify-between items-center mb-6">
          <div className="flex items-center">
            <img
              src="/Assets/Images/NaviGo_Logo.png"
              alt="Profile Logo"
              className="h-16 w-16 rounded-lg mr-6"
            />
            <div>
              <h1 className="text-2xl font-bold">Business Name</h1>
              <p className="text-gray-500 dark:text-gray-400">
                <i className="fas fa-suitcase mr-2"></i> Travel Services •
                Partner since 2025
              </p>
            </div>
          </div>
          <div className="flex space-x-3">
            <button className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
              <i className="fas fa-plus mr-2"></i> Add Services
            </button>
            <button className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 flex items-center">
              <i className="fas fa-eye mr-2"></i> View Listings
            </button>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {/* Card 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="flex justify-between items-start mb-4">
              <i className="fas fa-chart-bar text-2xl text-blue-500"></i>
              <i className="fas fa-arrow-up-right text-gray-400"></i>
            </div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400">
              TOTAL REQUESTS
            </h3>
            <p className="text-3xl font-bold">4</p>
            <p className="text-green-500 text-sm mt-2">
              <i className="fas fa-arrow-up"></i> +15% this week
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="flex justify-between items-start mb-4">
              <i className="fas fa-clock text-2xl text-yellow-500"></i>
              <i className="fas fa-arrow-up-right text-gray-400"></i>
            </div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400">
              PENDING
            </h3>
            <p className="text-3xl font-bold">2</p>
            <p className="text-gray-500 text-sm mt-2">Avg response: 1.2h</p>
          </div>
          {/* Card 3 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="flex justify-between items-start mb-4">
              <i className="fas fa-user-check text-2xl text-green-500"></i>
              <i className="fas fa-arrow-up-right text-gray-400"></i>
            </div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400">
              ACCEPTED
            </h3>
            <p className="text-3xl font-bold">1</p>
            <p className="text-green-500 text-sm mt-2">92% acceptance rate</p>
          </div>
          {/* Card 4 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="flex justify-between items-start mb-4">
              <i className="fas fa-dollar-sign text-2xl text-purple-500"></i>
              <i className="fas fa-arrow-up-right text-gray-400"></i>
            </div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400">
              REVENUE (MTD)
            </h3>
            <p className="text-3xl font-bold">₱248,650</p>
            <p className="text-green-500 text-sm mt-2">
              <i className="fas fa-arrow-up"></i> +24% vs last month
            </p>
          </div>
        </div>

        {/* Content Tabs */}
        <div className="flex space-x-2 border-b border-gray-200 dark:border-gray-700 mb-6">
          <button className="px-4 py-2 text-blue-600 border-b-2 border-blue-600 font-semibold flex items-center space-x-2">
            <i className="fas fa-chart-bar"></i>
            <span>Requests</span>
          </button>
          <button className="px-4 py-2 text-gray-500 hover:text-blue-600 flex items-center space-x-2">
            <i className="fas fa-clock"></i>
            <span>Analytics</span>
          </button>
          <button className="px-4 py-2 text-gray-500 hover:text-blue-600 flex items-center space-x-2">
            <i className="fas fa-cog"></i>
            <span>Settings</span>
          </button>
        </div>

        {/* Search and Filter */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex-grow max-w-lg">
            <div className="relative">
              <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
              <input
                type="text"
                placeholder="Search customers, booking IDs, or routes..."
                className="bg-white dark:bg-gray-800 w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 cursor-pointer">
            <i className="fas fa-filter text-gray-500"></i>
            <span className="font-semibold">All Requests</span>
            <i className="fas fa-chevron-down text-xs"></i>
          </div>
        </div>

        {/* Request Card */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5">
          {/* Request Header */}
          <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-3 mb-4">
            <div className="flex items-center space-x-3">
              <i className="fas fa-plane text-blue-500"></i>
              <span className="font-bold text-gray-800 dark:text-gray-200">
                Request #BR-001
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="bg-red-100 text-red-800 text-xs font-bold px-2 py-1 rounded-full">
                HIGH
              </span>
              <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded-full">
                PENDING
              </span>
              <span className="text-sm text-gray-500 flex items-center">
                <i className="fas fa-clock mr-1"></i> 2h left
              </span>
            </div>
          </div>

          {/* Request Body */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            {/* Customer Info */}
            <div className="flex items-center">
              <div className="bg-blue-200 text-blue-800 font-bold rounded-full h-12 w-12 flex items-center justify-center mr-4">
                AMR
              </div>
              <div>
                <div className="font-bold flex items-center">
                  Anna Mae Regis{" "}
                  <span className="ml-2 bg-yellow-400 text-white text-xs px-2 py-1 rounded-full flex items-center">
                    <i className="fas fa-star mr-1"></i> VIP
                  </span>
                </div>
                <p className="text-sm text-gray-500">anna.regis@email.com</p>
              </div>
            </div>
            {/* Flight Details */}
            <div>
              <p>
                <strong>ROUTE:</strong> New York (JFK) → Paris (CDG)
              </p>
              <p>
                <strong>DETAILS:</strong> 2 passengers • Business
              </p>
              <p>
                <strong>REQUESTED PRICE:</strong>{" "}
                <span className="font-bold text-lg text-green-600">₱2,400</span>{" "}
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                  15% below market
                </span>
              </p>
            </div>
          </div>

          {/* Request Actions */}
          <div className="flex justify-end space-x-3 border-t border-gray-200 dark:border-gray-700 pt-4">
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold flex items-center hover:bg-red-600">
              <i className="fas fa-times mr-2"></i>Decline
            </button>
            <button className="bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-lg font-semibold flex items-center hover:bg-gray-300 dark:hover:bg-gray-500">
              <i className="fas fa-comments mr-2"></i>Negotiate
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold flex items-center hover:bg-green-600">
              <i className="fas fa-check mr-2"></i>Accept Request
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BusinessDashboard;
