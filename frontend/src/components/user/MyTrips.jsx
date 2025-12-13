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
  Plus,
  Search,
  SlidersHorizontal,
  Star,
  Share2,
  MoreVertical,
  Plane,
  DollarSign,
  BarChart,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import CreateTripModal from "./CreateTripModal";
import { getUserTrips } from "../../services/tripService";
import { AuthContext } from "../../context/AuthContext";

const summaryData = [
  {
    icon: Plane,
    title: "Total Trips",
    value: "0",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: DollarSign,
    title: "Total Budget",
    value: "$0",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: MapPin,
    title: "Countries",
    value: "0",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: BarChart,
    title: "Avg Progress",
    value: "0%",
    color: "bg-orange-100 text-orange-600",
  },
];

const statusColors = {
  Confirmed: "bg-green-100 text-green-800",
  Planning: "bg-yellow-100 text-yellow-800",
  Business: "bg-indigo-100 text-indigo-800",
};

const TripCard = ({ trip }) => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
    <div className="relative">
      <img
        src={trip.image}
        alt={trip.destination}
        className="w-full h-48 object-cover"
      />
      <div
        className={`absolute top-3 left-3 text-xs font-bold px-2 py-1 rounded-full ${
          statusColors[trip.status] || "bg-gray-100 text-gray-800"
        }`}
      >
        {trip.status}
      </div>
      <button className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center bg-white/80 backdrop-blur-sm text-gray-700">
        <MoreVertical size={18} />
      </button>
    </div>
    <div className="p-5">
      <h3 className="text-xl font-bold truncate">{trip.destination}</h3>
      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
        <MapPin size={14} className="mr-1" /> {trip.country}
      </div>
      <div className="flex justify-between items-center text-sm mb-3">
        <div className="flex items-center font-semibold">
          <Star
            size={16}
            className="text-yellow-400 mr-1"
            fill="currentColor"
          />
          {trip.rating || "4.0"}{" "}
          <span className="text-gray-500 font-normal ml-1">
            ({trip.reviews || "0"})
          </span>
        </div>
        <div className="text-gray-500 font-medium">{trip.duration}</div>
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-300 space-y-1 mb-4">
        <p>
          <span className="font-semibold">Dates:</span> {trip.dates}
        </p>
        <p>
          <span className="font-semibold">Travelers:</span> {trip.travelers}
        </p>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {(trip.highlights || []).map((tag) => (
          <span
            key={tag}
            className="bg-gray-100 dark:bg-gray-700 text-xs font-medium px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center font-semibold text-gray-700 dark:text-gray-200 mb-4">
        <div>
          <p className="text-xs font-normal text-gray-500">Budget</p>$
          {trip.budget}
        </div>
        <div className="text-right">
          <p className="text-xs font-normal text-gray-500">Spent</p>$
          {trip.spent}
        </div>
      </div>
      <div className="flex gap-2">
        <Link
          to={`/my-trips/${trip._id}`}
          className="w-full bg-cyan-600 text-white font-semibold py-2 px-3 rounded-lg hover:bg-cyan-700 transition text-sm"
        >
          View Details
        </Link>
        <button className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg">
          <Share2 size={16} />
        </button>
      </div>
    </div>
  </div>
);

const MyTrips = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [tripsData, setTripsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(AuthContext);

  // Fetch trips from API
  useEffect(() => {
    const fetchTrips = async () => {
      if (!user?.id) return;

      try {
        setIsLoading(true);
        const trips = await getUserTrips(user.id);
        setTripsData(trips);
      } catch (error) {
        console.error("Error fetching trips:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrips();
  }, [user]);

  // Calculate summary data from real trips
  const calculateSummaryData = () => {
    if (tripsData.length === 0) return summaryData;

    const totalTrips = tripsData.length;
    const totalBudget = tripsData.reduce(
      (sum, trip) => sum + (trip.budget || 0),
      0
    );
    const uniqueCountries = [...new Set(tripsData.map((trip) => trip.country))]
      .length;
    const avgProgress =
      tripsData.reduce((sum, trip) => sum + (trip.progress || 0), 0) /
      totalTrips;

    return [
      {
        ...summaryData[0],
        value: totalTrips.toString(),
      },
      {
        ...summaryData[1],
        value: `$${totalBudget.toLocaleString()}`,
      },
      {
        ...summaryData[2],
        value: uniqueCountries.toString(),
      },
      {
        ...summaryData[3],
        value: `${Math.round(avgProgress)}%`,
      },
    ];
  };

  const filteredTrips = tripsData.filter((trip) => {
    const matchesSearch =
      trip.destination?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (trip.highlights || []).some((h) =>
        h.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesFilter =
      filter === "all" || trip.status?.toLowerCase() === filter;
    return matchesSearch && matchesFilter;
  });

  const currentSummaryData = calculateSummaryData();

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen font-sans">
      <main className="p-6 lg:p-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold">My Trips</h1>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Your smart travel companion for managing all adventures.
              </p>
            </div>
            <button
              onClick={() => setShowCreateModal(true)}
              className="mt-4 md:mt-0 flex items-center gap-2 bg-cyan-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-cyan-700 transition"
            >
              <Plus size={20} />
              Create New Trip
            </button>
          </div>

          <div className="mb-8 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search trips..."
                className="w-full pl-12 pr-4 py-3 bg-gray-100 dark:bg-gray-700 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              className="bg-gray-100 dark:bg-gray-700 border-transparent rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-cyan-500"
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">All Trips</option>
              <option value="confirmed">Confirmed</option>
              <option value="planning">Planning</option>
              <option value="business">Business</option>
            </select>
            <button className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg font-semibold">
              <SlidersHorizontal size={16} />
              More Filters
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {currentSummaryData.map((item) => (
              <div
                key={item.title}
                className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md flex items-center gap-4"
              >
                <div className={`p-3 rounded-full ${item.color}`}>
                  <item.icon size={24} />
                </div>
                <div>
                  <div className="text-gray-500 dark:text-gray-400 text-sm">
                    {item.title}
                  </div>
                  <div className="text-2xl font-bold">{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          {isLoading ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-semibold">Loading trips...</h3>
              <p className="text-gray-500">
                Please wait while we fetch your trips.
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredTrips.map((trip) => (
                  <TripCard key={trip._id} trip={trip} />
                ))}
              </div>
              {filteredTrips.length === 0 && tripsData.length > 0 && (
                <div className="text-center py-20 col-span-full">
                  <h3 className="text-2xl font-semibold">
                    No Matching Trips Found
                  </h3>
                  <p className="text-gray-500">
                    Try a different search or filter.
                  </p>
                </div>
              )}
              {tripsData.length === 0 && !isLoading && (
                <div className="text-center py-20 col-span-full">
                  <h3 className="text-2xl font-semibold">No Trips Yet</h3>
                  <p className="text-gray-500">
                    Create your first trip to get started!
                  </p>
                  <button
                    onClick={() => setShowCreateModal(true)}
                    className="mt-4 flex items-center gap-2 bg-cyan-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-cyan-700 transition mx-auto"
                  >
                    <Plus size={20} />
                    Create First Trip
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </main>

      <CreateTripModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        userId={user?.id}
        onTripCreated={(newTrip) => {
          setTripsData([...tripsData, newTrip]);
        }}
      />
    </div>
  );
};

export default MyTrips;
