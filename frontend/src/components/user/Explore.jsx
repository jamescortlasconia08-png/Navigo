import React, { useState, useEffect, useContext } from "react";
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
  Umbrella,
  Building,
  Mountain,
  Heart,
  Star,
  Leaf,
  TrendingUp,
  Share2,
} from "lucide-react";
import {
  getAllDestinations,
  searchDestinations,
} from "../../services/exploreService";
import { createTrip } from "../../services/tripService";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthContext";

// Destination Card Component
const DestinationCard = ({ destination, onCreateTrip }) => {
  const [isLiked, setIsLiked] = useState(false);
  const { user } = useContext(AuthContext);

  const handlePlanTrip = async () => {
    // Check if user is logged in
    if (!user?.id) {
      Swal.fire({
        title: "Login Required",
        text: "Please log in to create a trip.",
        icon: "warning",
        confirmButtonText: "OK",
        confirmButtonColor: "#06b6d4",
      });
      return;
    }

    // Show confirmation dialog
    const result = await Swal.fire({
      title: "Plan This Trip?",
      text: `Do you want to create a trip to ${destination.name}, ${destination.country}?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, Plan Trip",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#06b6d4",
      cancelButtonColor: "#6b7280",
    });

    if (result.isConfirmed) {
      try {
        // Create trip data from destination
        const tripData = {
          user_id: user.id,
          destination: destination.name,
          country: destination.country,
          dates: "Select dates",
          duration: destination.duration,
          travelers: 1,
          budget: parseInt(destination.budget?.replace(/[^0-9]/g, "")) || 1000,
          spent: 0,
          progress: 0,
          status: "Planning",
          rating: destination.rating,
          reviews: destination.reviews,
          image: destination.image,
          highlights: destination.highlights || [],
        };

        // Create trip
        const newTrip = await createTrip(tripData);

        // Show success message
        await Swal.fire({
          title: "Trip Created!",
          text: `Your trip to ${destination.name} has been added to "My Trips".`,
          icon: "success",
          confirmButtonText: "View My Trips",
          confirmButtonColor: "#06b6d4",
        });

        // Call callback if provided
        if (onCreateTrip) {
          onCreateTrip(newTrip);
        }
      } catch (error) {
        console.error("Error creating trip:", error);
        Swal.fire({
          title: "Error",
          text: "Failed to create trip. Please try again.",
          icon: "error",
          confirmButtonText: "OK",
          confirmButtonColor: "#06b6d4",
        });
      }
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
      <div className="relative">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 left-3 bg-white text-gray-800 text-sm font-bold px-3 py-1 rounded-full">
          {destination.price_indicator}
        </div>
        <div className="absolute top-3 right-3 flex space-x-2">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition ${
              isLiked
                ? "bg-red-500 text-white"
                : "bg-white/80 backdrop-blur-sm text-gray-700"
            }`}
          >
            <Heart size={20} fill={isLiked ? "currentColor" : "none"} />
          </button>
          <button className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700">
            <Share2 size={20} />
          </button>
        </div>
        <div className="absolute bottom-3 left-3 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-md">
          Trending
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold truncate">{destination.name}</h3>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
          <MapPin size={14} className="mr-1" /> {destination.country}
        </div>
        <div className="flex justify-between items-center mb-3 text-sm">
          <div className="flex items-center font-semibold">
            <Star
              size={16}
              className="text-yellow-400 mr-1"
              fill="currentColor"
            />
            {destination.rating}{" "}
            <span className="text-gray-500 font-normal ml-1">
              ({destination.reviews})
            </span>
          </div>
          <div className="text-gray-500 font-medium">
            {destination.duration}
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {(destination.highlights || []).slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 dark:bg-gray-700 text-xs font-medium px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
          {destination.highlights && destination.highlights.length > 2 && (
            <span className="bg-gray-100 dark:bg-gray-700 text-xs font-medium px-2 py-1 rounded-full">
              +{destination.highlights.length - 2} more
            </span>
          )}
        </div>
        <div className="flex justify-between text-xs text-center text-gray-600 dark:text-gray-300 mb-4">
          <div className="flex-1">
            <p className="font-semibold">Best Time</p>
            <p className="text-gray-500 dark:text-gray-400">
              {destination.best_time}
            </p>
          </div>
          <div className="flex-1 border-l border-gray-200 dark:border-gray-700">
            <p className="font-semibold">Budget/day</p>
            <p className="text-gray-500 dark:text-gray-400">
              {destination.budget}
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handlePlanTrip}
            className="w-full bg-cyan-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-cyan-700 transition"
          >
            Plan Trip
          </button>
          <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold py-2 px-4 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Explore Component
const Explore = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [destinations, setDestinations] = useState([]);
  const [filteredDestinations, setFilteredDestinations] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(AuthContext);

  const categories = [
    { id: "all", name: "All", icon: Compass },
    { id: "beach", name: "Beach", icon: Umbrella },
    { id: "culture", name: "Culture", icon: Building },
    { id: "adventure", name: "Adventure", icon: Mountain },
    { id: "romantic", name: "Romantic", icon: Heart },
    { id: "luxury", name: "Luxury", icon: Star },
    { id: "nature", name: "Nature", icon: Leaf },
  ];

  // Fetch destinations from API
  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        setIsLoading(true);
        const data = await getAllDestinations();
        setDestinations(data);
        setFilteredDestinations(data);
      } catch (error) {
        console.error("Error fetching destinations:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  // Filter destinations by category
  useEffect(() => {
    const filterByCategory = () => {
      if (activeCategory === "all") {
        setFilteredDestinations(destinations);
      } else {
        const filtered = destinations.filter((dest) =>
          dest.highlights?.some((highlight) =>
            highlight.toLowerCase().includes(activeCategory)
          )
        );
        setFilteredDestinations(filtered);
      }
    };

    filterByCategory();
  }, [activeCategory, destinations]);

  // Handle search
  const handleSearch = async (query) => {
    setSearchQuery(query);

    if (!query.trim()) {
      setFilteredDestinations(destinations);
      return;
    }

    try {
      const results = await searchDestinations(query);
      setFilteredDestinations(results);
    } catch (error) {
      console.error("Search error:", error);
    }
  };

  // Handle trip creation callback
  const handleTripCreated = (newTrip) => {
    // You could show a notification or update state here
    console.log("New trip created:", newTrip);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen font-sans transition-colors duration-200">
      {/* Main Content */}
      <main className="p-6 lg:p-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold">Explore Destinations</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Discover amazing places around the world. Get personalized
              recommendations based on your preferences and travel style.
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="relative flex-grow">
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search destinations, countries, or activities..."
                  className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </div>
              <div className="flex gap-4">
                <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl font-semibold">
                  <span>All Budgets</span> <ChevronDown size={16} />
                </button>
                <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl font-semibold">
                  <SlidersHorizontal size={16} /> <span>More Filters</span>
                </button>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 transition ${
                      isActive
                        ? "bg-cyan-600 text-white"
                        : "bg-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                    }`}
                  >
                    <Icon size={16} /> <span>{cat.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content Tabs */}
          <div className="flex border-b border-gray-200 dark:border-gray-700 mb-8">
            <button className="px-4 py-2 font-semibold text-cyan-600 border-b-2 border-cyan-600">
              Destinations
            </button>
            <button className="px-4 py-2 font-semibold text-gray-500 hover:text-cyan-600">
              Experiences
            </button>
            <button className="px-4 py-2 font-semibold text-gray-500 hover:text-cyan-600">
              Inspiration
            </button>
          </div>

          {/* Loading State */}
          {isLoading ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-semibold">
                Loading destinations...
              </h3>
              <p className="text-gray-500">
                Discovering amazing places for you.
              </p>
            </div>
          ) : (
            <>
              {/* Destinations Section */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold flex items-center mb-6">
                  <TrendingUp size={24} className="text-cyan-500 mr-3" />
                  Discover Destinations
                </h2>

                {filteredDestinations.length === 0 ? (
                  <div className="text-center py-20">
                    <h3 className="text-2xl font-semibold">
                      No destinations found
                    </h3>
                    <p className="text-gray-500">
                      Try a different search or filter.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredDestinations.map((dest) => (
                      <DestinationCard
                        key={dest._id}
                        destination={dest}
                        onCreateTrip={handleTripCreated}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Stats */}
              {destinations.length > 0 && (
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-8">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold">
                        {destinations.length}
                      </div>
                      <div className="text-gray-500">Destinations</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">
                        {
                          [...new Set(destinations.map((d) => d.country))]
                            .length
                        }
                      </div>
                      <div className="text-gray-500">Countries</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">
                        {Math.round(
                          (destinations.reduce(
                            (sum, d) => sum + (d.rating || 0),
                            0
                          ) /
                            destinations.length) *
                            10
                        ) / 10 || 0}
                      </div>
                      <div className="text-gray-500">Avg Rating</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">
                        {destinations
                          .reduce((sum, d) => sum + (d.reviews || 0), 0)
                          .toLocaleString()}
                      </div>
                      <div className="text-gray-500">Total Reviews</div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Explore;
