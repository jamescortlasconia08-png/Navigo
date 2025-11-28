import React, { useState } from "react";
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
  HelpCircle,
  LogOut,
  ArrowRight,
  Star,
  Users,
  Globe,
  DollarSign,
  Calendar,
  Check,
  LineChart,
  CreditCard,
  Share2,
  Plane,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import logo from "../../assets/NaviGo_Logo.png";

// Mock Data
const recentAdventures = [
  {
    title: "Mountain Adventure in Colorado",
    description:
      "Experience the breathtaking beauty of Colorado mountains with guided hiking trips and camping.",
    price: "$1,200",
    duration: "5 days",
    distance: "300mi",
    tags: ["Hiking", "Camping", "Photography"],
    borderColor: "border-green-500",
  },
  {
    title: "Beach Paradise in Maldives",
    description:
      "Dive into crystal clear waters, explore vibrant coral reefs, and relax in overwater bungalows.",
    price: "$2,500",
    duration: "7 days",
    distance: "8500mi",
    tags: ["Swimming", "Snorkeling", "Island Hopping"],
    borderColor: "border-blue-500",
  },
];

const upcomingTrips = [
  {
    destination: "Tokyo, Japan",
    dates: "Oct 15-22, 2025",
    travelers: "2 travelers",
    budget: "₱2,800",
    spent: "₱1,200",
    status: "Confirmed",
    progress: 43,
    imageClass:
      "bg-[url('https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=800&q=60')]",
  },
  {
    destination: "Paris, France",
    dates: "Nov 10-17, 2025",
    travelers: "1 traveler",
    budget: "₱3,200",
    spent: "₱0",
    status: "Planning",
    progress: 15,
    imageClass:
      "bg-[url('https://images.unsplash.com/photo-1502602898657-3e91760c0341?auto=format&fit=crop&w=800&q=60')]",
  },
];

const statsCards = [
  {
    icon: Briefcase,
    number: "23",
    label: "Total Trips",
    change: "+2 from last month",
    color: "text-cyan-500",
  },
  {
    icon: DollarSign,
    number: "₱12,450",
    label: "This Year Spent",
    change: "+15% from last year",
    color: "text-green-500",
  },
  {
    icon: Globe,
    number: "12",
    label: "Countries Visited",
    change: "3 new this year",
    color: "text-purple-500",
  },
  {
    icon: LineChart,
    number: "₱2,100",
    label: "Savings",
    change: "Through bulk discounts",
    color: "text-orange-500",
  },
];

// Main Component
const UserLandingPage = () => {
  const [view, setView] = useState("landing"); // 'landing' or 'dashboard'
  const [profileOpen, setProfileOpen] = useState(false);

  // Header Component
  const Header = () => (
    <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50 flex items-center justify-between px-6 py-3">
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="NaviGo Logo" className="h-10" />
          <span className="font-bold text-xl text-cyan-600">Dashboard</span>
        </div>
        <nav className="hidden md:flex items-center space-x-4">
          <a
            href="#"
            className="flex items-center space-x-2 text-gray-500 hover:text-cyan-600"
          >
            <Briefcase size={20} />
            <span>My Trips</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 text-gray-500 hover:text-cyan-600"
          >
            <Compass size={20} />
            <span>Explore</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 text-gray-500 hover:text-cyan-600"
          >
            <Clock size={20} />
            <span>History</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 text-gray-500 hover:text-cyan-600"
          >
            <MapPin size={20} />
            <span>Plan</span>
          </a>
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
              src="/Assets/Images/NaviGo_Logo.png"
              alt="Profile"
              className="h-9 w-9 rounded-full border-2 border-cyan-500"
            />
            <span className="hidden sm:block font-semibold">User Name</span>
            <ChevronDown
              size={16}
              className={`transition-transform ${
                profileOpen ? "rotate-180" : ""
              }`}
            />
          </div>
          {profileOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-xl py-2 z-50">
              <a
                href="#"
                className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <User size={16} className="mr-3" />
                View Profile
              </a>
              <a
                href="#"
                className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <Crown size={16} className="mr-3" />
                Plans & Billing
              </a>
              <a
                href="#"
                className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <Settings size={16} className="mr-3" />
                Account Settings
              </a>
              <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>
              <a
                href="#"
                className="flex items-center px-4 py-2 text-sm text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <LogOut size={16} className="mr-3" />
                End Journey
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );

  const LandingPageContent = () => (
    <div>
      <section className="text-center py-20 px-6 bg-gray-50 dark:bg-gray-900">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Discover Your Next
          <br />
          <span className="text-cyan-500">Epic</span>{" "}
          <span className="text-orange-400">Adventure</span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300 mb-8">
          Unlock intelligent travel planning with AI-powered recommendations,
          seamless collaboration, and cost optimization. Turn your wanderlust
          into unforgettable journeys.
        </p>
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          <button className="bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-cyan-700 transition flex items-center gap-2">
            <Plane size={18} />
            Start Your Journey <ArrowRight size={18} />
          </button>
          <button className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition flex items-center gap-2">
            <MapPin size={18} />
            Explore Features
          </button>
        </div>
        <div className="flex justify-center gap-8 text-gray-600 dark:text-gray-300 flex-wrap">
          <div className="flex items-center gap-2">
            <Star size={18} className="text-yellow-400" />
            <span>4.9/5 Rating</span>
          </div>
          <div className="flex items-center gap-2">
            <Users size={18} className="text-green-400" />
            <span>50K+ Travelers</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe size={18} className="text-blue-400" />
            <span>190+ Countries</span>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 max-w-7xl mx-auto">
        <section className="lg:col-span-2 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-2 flex items-center">
            <Star size={22} className="text-yellow-400 mr-2" />
            Plan Your Dream Journey
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Share your travel dreams, and we'll craft the perfect adventure
            tailored for you!
          </p>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Destination"
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
              />
              <input
                type="text"
                placeholder="Travel Dates"
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
              />
            </div>
            <textarea
              placeholder="Tell us about your dream adventure..."
              rows={4}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition flex items-center justify-center gap-2"
            >
              <Star size={20} />
              Begin My Adventure
            </button>
          </form>
        </section>
        <aside>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <MapPin size={20} className="text-cyan-500 mr-2" />
              Recent Adventures
            </h3>
            <div className="space-y-4">
              {recentAdventures.map((adv, index) => (
                <div
                  key={index}
                  className={`border-l-4 ${adv.borderColor} pl-4`}
                >
                  <h4 className="font-bold">{adv.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {adv.description}
                  </p>
                  <div className="flex justify-between text-xs font-semibold text-gray-600 dark:text-gray-300">
                    <span>{adv.price}</span>
                    <span>{adv.duration}</span>
                    <span>{adv.distance}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );

  const DashboardContent = () => (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Travel Dashboard</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-8">
        Manage your trips, bookings, and travel preferences in one place.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statsCards.map((card, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md flex items-center gap-5"
          >
            <div className={`text-3xl ${card.color}`}>
              {React.createElement(card.icon, { size: 32 })}
            </div>
            <div>
              <div className="text-2xl font-bold">{card.number}</div>
              <div className="text-gray-500 dark:text-gray-400">
                {card.label}
              </div>
              <div className="text-xs text-green-500 font-semibold">
                {card.change}
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-6">Upcoming Trips</h2>
      <div className="space-y-6">
        {upcomingTrips.map((trip, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden"
          >
            <div
              className={`w-full md:w-1/3 h-48 md:h-auto bg-cover bg-center ${trip.imageClass}`}
            ></div>
            <div className="flex-1 p-6">
              <h3 className="text-xl font-bold">{trip.destination}</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                {trip.dates}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm mb-4">
                <div className="flex items-center gap-2">
                  <Users size={16} />
                  <span>{trip.travelers}</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign size={16} />
                  <span>Budget: {trip.budget}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CreditCard size={16} />
                  <span>Spent: {trip.spent}</span>
                </div>
              </div>
              <div className="mb-2 text-sm">
                Trip Planning Progress {trip.progress}%
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-4">
                <div
                  className="bg-cyan-600 h-2.5 rounded-full"
                  style={{ width: `${trip.progress}%` }}
                ></div>
              </div>
              <div className="flex gap-4 flex-wrap">
                <button className="bg-cyan-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-cyan-700 transition">
                  View Journey
                </button>
                <button className="bg-gray-200 dark:bg-gray-700 font-semibold py-2 px-4 rounded-lg flex items-center gap-2">
                  <Share2 size={16} />
                  Share Trip
                </button>
              </div>
            </div>
            <div
              className={`p-4 flex items-center justify-center font-bold ${
                trip.status === "Confirmed"
                  ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                  : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
              }`}
            >
              {trip.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const Footer = () => (
    <footer className="bg-gray-800 text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">NaviGo</h3>
            <p className="text-sm">
              Your trusted partner for unforgettable travel experiences around
              the world.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-white">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-4 border-t border-gray-700 text-sm">
        © 2025 NaviGo Adventure Travels. All rights reserved.
      </div>
    </footer>
  );

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen font-sans">
      <Header />
      <div className="flex justify-center my-6">
        <div className="bg-gray-200 dark:bg-gray-700 p-1 rounded-lg flex">
          <button
            onClick={() => setView("landing")}
            className={`px-6 py-2 rounded-md font-semibold ${
              view === "landing" ? "bg-white dark:bg-gray-800 shadow" : ""
            }`}
          >
            Landing Page
          </button>
          <button
            onClick={() => setView("dashboard")}
            className={`px-6 py-2 rounded-md font-semibold ${
              view === "dashboard" ? "bg-white dark:bg-gray-800 shadow" : ""
            }`}
          >
            Dashboard
          </button>
        </div>
      </div>
      <main>
        {view === "landing" ? <LandingPageContent /> : <DashboardContent />}
      </main>
      <Footer />
    </div>
  );
};

export default UserLandingPage;
