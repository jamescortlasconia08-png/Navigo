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
  Search,
  SlidersHorizontal,
  Star,
  Eye,
  Plane,
  Building,
  Camera,
  Car,
  Share2,
  Download,
} from "lucide-react";
import { Link } from "react-router-dom";

const tripHistoryData = [
  {
    id: 1,
    destination: "Tokyo, Japan",
    country: "Japan",
    dates: "Oct 15-22, 2025",
    duration: "8 days",
    type: "Leisure",
    image:
      "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=800&q=60",
    rating: 5,
    isFavorite: true,
    activities: { flights: 2, hotels: 3, activities: 8, transport: 5 },
    highlights: ["Cherry Blossoms", "Temples", "Sushi"],
    description:
      "Amazing cultural experience. The food was incredible and the temples were breathtaking.",
    totalCost: 2800,
  },
  {
    id: 2,
    destination: "Paris, France",
    country: "France",
    dates: "Oct 5-12, 2025",
    duration: "7 days",
    type: "Leisure",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760c0341?auto=format&fit=crop&w=800&q=60",
    rating: 4,
    isFavorite: false,
    activities: { flights: 2, hotels: 2, activities: 6, transport: 3 },
    highlights: ["Eiffel Tower", "Louvre", "Seine River"],
    description:
      "Romantic getaway with amazing art and architecture. The Seine river cruise was magical.",
    totalCost: 3200,
  },
  {
    id: 3,
    destination: "New York, USA",
    country: "USA",
    dates: "Sep 10-14, 2025",
    duration: "5 days",
    type: "Business",
    image:
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=800&q=60",
    rating: 4,
    isFavorite: false,
    activities: { flights: 2, hotels: 1, activities: 2, transport: 4 },
    highlights: ["Business Conference", "Central Park", "Broadway"],
    description:
      "Productive business trip with some leisure time. Caught a great Broadway show.",
    totalCost: 1800,
  },
];

const TripCard = ({ trip }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
      <div className="relative">
        <img
          src={trip.image}
          alt={trip.destination}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 left-3 bg-cyan-600 text-white text-xs font-bold px-2 py-1 rounded-full">
          {trip.type}
        </div>
        <div className="absolute top-3 right-3 flex space-x-2">
          {trip.isFavorite && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                alert("This trip is marked as favorite!");
              }}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-yellow-400/80 backdrop-blur-sm text-white hover:bg-yellow-500 transition min-w-[44px] min-h-[44px]"
              aria-label="Favorite trip"
            >
              <Star size={18} fill="currentColor" />
            </button>
          )}
          <button
            onClick={(e) => {
              e.stopPropagation();
              alert(`Viewing details for ${trip.destination}`);
            }}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white transition min-w-[44px] min-h-[44px]"
            aria-label="View trip"
          >
            <Eye size={18} />
          </button>
        </div>
        <div className="absolute bottom-3 left-3 flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < trip.rating ? "text-yellow-400" : "text-gray-300"}
              fill="currentColor"
            />
          ))}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold truncate">{trip.destination}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          {trip.dates}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300 italic mb-4 h-10">
          "{trip.description}"
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {trip.highlights.map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 dark:bg-gray-700 text-xs font-medium px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex justify-around items-center text-center text-xs text-gray-500 dark:text-gray-400 py-3 border-t border-b border-gray-200 dark:border-gray-700 mb-4">
          <div className="flex items-center gap-1">
            <Plane size={14} />
            <span>{trip.activities.flights}</span>
          </div>
          <div className="flex items-center gap-1">
            <Building size={14} />
            <span>{trip.activities.hotels}</span>
          </div>
          <div className="flex items-center gap-1">
            <Camera size={14} />
            <span>{trip.activities.activities}</span>
          </div>
          <div className="flex items-center gap-1">
            <Car size={14} />
            <span>{trip.activities.transport}</span>
          </div>
        </div>

        <div className="flex justify-between items-center text-lg font-bold mb-4">
          <div>
            <p className="text-xs font-normal text-gray-500">Total Cost</p>
            <span>${trip.totalCost.toLocaleString()}</span>
          </div>
          <div className="text-right">
            <p className="text-xs font-normal text-gray-500">Rating</p>
            <span>{trip.rating}/5</span>
          </div>
        </div>

        <div className="flex gap-2">
          <Link
            to={`/my-trips/${trip.id}`}
            className="w-full bg-cyan-600 text-white font-semibold py-2 px-3 rounded-lg hover:bg-cyan-700 transition text-sm"
          >
            View Details
          </Link>
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: `Trip to ${trip.destination}`,
                  text: `Check out my trip to ${trip.destination} - ${trip.dates}`,
                }).catch((err) => console.log("Error sharing:", err));
              } else {
                navigator.clipboard.writeText(
                  `Trip to ${trip.destination} - ${trip.dates}`
                );
                alert("Trip link copied to clipboard!");
              }
            }}
            className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Share trip"
          >
            <Share2 size={16} />
          </button>
          <button
            onClick={() => {
              alert(`Downloading trip details for ${trip.destination}...`);
            }}
            className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Download trip"
          >
            <Download size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

const History = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTrips = tripHistoryData.filter(
    (trip) =>
      trip.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trip.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trip.highlights.some((h) =>
        h.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen font-sans transition-colors duration-200">
      {/* Main Content */}
      <main className="p-6 lg:p-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold">Travel History</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Your complete travel journey with memories, expenses, and
              insights.
            </p>
          </div>

          <div className="mb-8 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search destinations, highlights..."
                  className="w-full pl-12 pr-4 py-3 bg-gray-100 dark:bg-gray-700 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    alert("Year filter coming soon!");
                  }}
                  className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg font-semibold text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition min-h-[44px]"
                >
                  <ChevronDown size={16} />
                  <span>All Years</span>
                </button>
                <button
                  onClick={() => {
                    alert("Type filter coming soon!");
                  }}
                  className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg font-semibold text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition min-h-[44px]"
                >
                  <ChevronDown size={16} />
                  <span>All Types</span>
                </button>
                <button
                  onClick={() => {
                    alert("More filters coming soon!");
                  }}
                  className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg font-semibold text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition min-h-[44px]"
                >
                  <SlidersHorizontal size={16} />
                  <span>More</span>
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTrips.map((trip) => (
              <TripCard key={trip.id} trip={trip} />
            ))}
          </div>
          {filteredTrips.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-semibold">No Trips Found</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Try adjusting your search or filters.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default History;
