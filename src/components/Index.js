
import React from 'react';

const Index = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <button className="fixed top-4 right-4 z-50 p-2 rounded-full bg-gray-200 dark:bg-gray-800">
        <i className="fas fa-moon"></i>
      </button>
      <div className="container mx-auto px-4">
        <header className="text-center py-16">
          <div className="flex justify-center mb-8">
            <img src="Assets/Images/NaviGo_Logo.png" alt="NaviGo Logo" className="h-24"/>
          </div>
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-purple-600">Ready for Adventure?</span>
          </h1>
          <h2 className="text-3xl mb-4">Welcome to NaviGo</h2>
          <p className="max-w-2xl mx-auto">
            Your journey begins here. Choose your travel companion and unlock a world of intelligent planning, seamless experiences, and unforgettable adventures.
          </p>
        </header>

        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 cursor-pointer">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <div className="p-3 bg-purple-200 text-purple-600 rounded-full mr-4">
                    <i className="fa-solid fa-suitcase"></i>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Travel Pass</div>
                    <div className="font-bold">Personal Explorer</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Type</div>
                  <div className="font-bold">INDIVIDUAL</div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">Personal Account</h3>
              <p className="mb-4">
                Your personal gateway to intelligent travel planning and unforgettable adventures
              </p>
              <ul className="mb-4">
                <li>AI-powered recommendations</li>
                <li>Secure itinerary storage</li>
                <li>Group collaboration</li>
                <li>Cost optimization</li>
                <li>Cross-platform sync</li>
              </ul>
              <div className="flex justify-between items-center">
                <div>
                  <span className="block font-bold">Start Your Journey</span>
                  <span className="text-sm text-gray-500">Free plan available</span>
                </div>
                <span className="text-2xl">→</span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 cursor-pointer">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <div className="p-3 bg-indigo-200 text-indigo-600 rounded-full mr-4">
                    <i className="fas fa-building"></i>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Partner Access</div>
                    <div className="font-bold">Business Elite</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Type</div>
                  <div className="font-bold">ENTERPRISE</div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">Business Partner</h3>
              <p className="mb-4">
                Connect with travelers worldwide and grow your business through our premium network
              </p>
              <ul className="mb-4">
                <li>Booking & inventory management</li>
                <li>Advanced analytics dashboard</li>
                <li>System integrations</li>
                <li>Bulk discount controls</li>
                <li>Enterprise security</li>
              </ul>
              <div className="flex justify-between items-center">
                <div>
                  <span className="block font-bold">Join Our Network</span>
                  <span className="text-sm text-gray-500">Custom enterprise pricing</span>
                </div>
                <span className="text-2xl">→</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center py-8">
          <div className="inline-block bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <p className="mr-4">Already have an account?</p>
            <button className="font-bold">
              Sign in to Your Journey <span>→</span>
            </button>
          </div>
        </div>

        <div className="text-center py-16">
          <p className="text-lg italic">
            "The world is a book, and those who do not travel read only one page." -Saint Augustine
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
