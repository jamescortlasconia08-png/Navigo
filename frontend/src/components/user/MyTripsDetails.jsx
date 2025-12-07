import React, { useState } from "react";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Users,
  DollarSign,
  Star,
  Share2,
  Download,
  Edit,
  MoreVertical,
  Clock,
  Plane,
  Home,
  Utensils,
  Camera,
  ShoppingBag,
  Car,
  Wifi,
  Heart,
  CheckCircle,
  XCircle,
  AlertCircle,
  ChevronRight,
  Phone,
  Mail,
  Globe,
  Navigation,
} from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";

// Mock trip details data
const tripDetails = {
  1: {
    id: 1,
    destination: "Tokyo, Japan",
    country: "Japan",
    dates: "Oct 15-22, 2025",
    duration: "8 days",
    travelers: 2,
    budget: "$2,800",
    spent: "$1,200",
    progress: 85,
    status: "Confirmed",
    rating: "4.8",
    reviews: "1240",
    image:
      "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=800&q=60",
    highlights: ["Cherry Blossom", "Temples", "Cuisine"],
    description:
      "Experience the perfect blend of traditional culture and modern innovation in Tokyo. From ancient temples to futuristic skyscrapers, this trip offers an unforgettable journey through Japan's vibrant capital.",

    itinerary: [
      {
        day: 1,
        title: "Arrival & Shinjuku Exploration",
        description:
          "Arrive at Narita Airport, check into hotel, explore Shinjuku district",
        activities: [
          "Airport Transfer",
          "Hotel Check-in",
          "Shinjuku Gyoen Garden",
          "Tokyo Metropolitan Building",
        ],
        time: "All Day",
        icon: Plane,
      },
      {
        day: 2,
        title: "Historic Asakusa & Skytree",
        description:
          "Visit historic temples and enjoy panoramic views from Tokyo Skytree",
        activities: [
          "Senso-ji Temple",
          "Nakamise Shopping Street",
          "Tokyo Skytree",
          "Sumida River Cruise",
        ],
        time: "9:00 AM - 8:00 PM",
        icon: Camera,
      },
      {
        day: 3,
        title: "Shibuya & Harajuku Culture",
        description: "Experience youth culture and famous crossing in Shibuya",
        activities: [
          "Shibuya Crossing",
          "Meiji Shrine",
          "Takeshita Street",
          "Omotesando Hills",
        ],
        time: "10:00 AM - 7:00 PM",
        icon: ShoppingBag,
      },
    ],

    accommodations: [
      {
        name: "Park Hotel Tokyo",
        type: "4-Star Hotel",
        nights: 7,
        amenities: ["Free WiFi", "City View", "Restaurant", "Fitness Center"],
        rating: 4.5,
        price: "$180/night",
      },
    ],

    flights: [
      {
        airline: "Japan Airlines",
        flightNo: "JL 001",
        departure: "LAX → NRT",
        time: "10:00 AM - 2:00 PM",
        duration: "11h",
        class: "Economy",
      },
    ],

    expenses: [
      { category: "Flights", amount: "$850", percentage: 42 },
      { category: "Accommodation", amount: "$1,260", percentage: 63 },
      { category: "Food & Dining", amount: "$320", percentage: 16 },
      { category: "Transportation", amount: "$180", percentage: 9 },
      { category: "Activities", amount: "$390", percentage: 19 },
    ],

    notes: [
      "Try authentic ramen at Ichiran Shibuya",
      "Visit teamLab Borderless digital art museum",
      "Purchase Suica card for easy transportation",
      "Reserve tickets for Ghibli Museum in advance",
    ],

    documents: [
      { name: "Flight Itinerary.pdf", size: "2.4 MB", date: "Oct 1, 2025" },
      { name: "Hotel Reservation.pdf", size: "1.8 MB", date: "Oct 1, 2025" },
      { name: "Travel Insurance.pdf", size: "3.2 MB", date: "Oct 2, 2025" },
    ],

    contacts: [
      {
        name: "Hotel Reception",
        phone: "+81-3-1234-5678",
        email: "info@parkhoteltokyo.com",
      },
      {
        name: "Tour Guide - Yuki",
        phone: "+81-90-1234-5678",
        email: "yuki@tokyotours.jp",
      },
      {
        name: "Emergency Contact",
        phone: "+1-555-0123",
        email: "emergency@travel.com",
      },
    ],
  },

  2: {
    id: 2,
    destination: "Paris, France",
    country: "France",
    dates: "Nov 10-17, 2025",
    duration: "7 days",
    travelers: 1,
    budget: "$3,200",
    spent: "$450",
    progress: 35,
    status: "Planning",
    rating: "4.9",
    reviews: "2150",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760c0341?auto=format&fit=crop&w=800&q=60",
    highlights: ["Art Museums", "Fine Dining", "Architecture"],
    description:
      "A romantic journey through the City of Light, exploring world-class art, exquisite cuisine, and iconic landmarks along the Seine River.",

    itinerary: [
      {
        day: 1,
        title: "Arrival & Eiffel Tower",
        description:
          "Arrive at CDG Airport, check into hotel, visit Eiffel Tower",
        activities: [
          "Airport Transfer",
          "Hotel Check-in",
          "Eiffel Tower Visit",
          "Seine River Walk",
        ],
        time: "All Day",
        icon: Plane,
      },
      {
        day: 2,
        title: "Louvre Museum & Champs-Élysées",
        description: "Explore world's largest art museum and famous avenue",
        activities: [
          "Louvre Museum",
          "Tuileries Garden",
          "Champs-Élysées",
          "Arc de Triomphe",
        ],
        time: "9:00 AM - 7:00 PM",
        icon: Camera,
      },
    ],

    accommodations: [
      {
        name: "Hotel Le Burgundy",
        type: "5-Star Hotel",
        nights: 6,
        amenities: [
          "Luxury Spa",
          "Fine Dining",
          "Butler Service",
          "Private Terrace",
        ],
        rating: 4.8,
        price: "$350/night",
      },
    ],

    flights: [],

    expenses: [
      { category: "Accommodation", amount: "$2,100", percentage: 66 },
      { category: "Food & Dining", amount: "$600", percentage: 19 },
      { category: "Museums & Tours", amount: "$300", percentage: 9 },
    ],

    notes: [
      "Book Louvre tickets online to skip lines",
      "Try macarons from Ladurée",
      "Evening Seine River cruise recommended",
      "Visit Montmartre for authentic Parisian vibe",
    ],

    documents: [],

    contacts: [],
  },
};

const statusColors = {
  Confirmed:
    "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  Planning:
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  Business:
    "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
};

const MyTripDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  const trip = tripDetails[id] || tripDetails[1];

  if (!trip) {
    return (
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <XCircle className="mx-auto text-red-500" size={64} />
          <h2 className="text-2xl font-bold mt-4">Trip Not Found</h2>
          <p className="text-gray-500 mt-2">
            The trip you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate("/trips")}
            className="mt-4 px-6 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700"
          >
            Back to Trips
          </button>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "itinerary", label: "Itinerary" },
    { id: "expenses", label: "Expenses" },
    { id: "documents", label: "Documents" },
    { id: "notes", label: "Notes" },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen font-sans">
      {/* Back Button */}
      <div className="p-6 lg:p-10">
        <button
          onClick={() => navigate("/trips")}
          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-6"
        >
          <ArrowLeft size={20} />
          Back to Trips
        </button>

        {/* Trip Header */}
        <div className="relative mb-8">
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
            <img
              src={trip.image}
              alt={trip.destination}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex flex-col md:flex-row md:items-end justify-between">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {trip.destination}
                  </h1>
                  <div className="flex items-center gap-4 text-white/90">
                    <div className="flex items-center gap-1">
                      <MapPin size={18} />
                      <span>{trip.country}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={18} />
                      <span>{trip.dates}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={18} />
                      <span>
                        {trip.travelers} traveler{trip.travelers > 1 ? "s" : ""}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className={`mt-4 md:mt-0 text-sm font-bold px-3 py-1 rounded-full ${
                    statusColors[trip.status]
                  }`}
                >
                  {trip.status}
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="absolute -bottom-4 right-6 flex gap-2">
            <button className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700">
              <Share2 size={20} />
            </button>
            <button className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700">
              <Edit size={20} />
            </button>
            <button className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700">
              <MoreVertical size={20} />
            </button>
          </div>
        </div>

        {/* Trip Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-lg">
                <DollarSign size={24} />
              </div>
              <div>
                <h3 className="font-semibold">Budget & Spending</h3>
                <p className="text-sm text-gray-500">
                  Total budget: {trip.budget}
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Budget</span>
                <span className="font-semibold">{trip.budget}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Spent</span>
                <span className="font-semibold">{trip.spent}</span>
              </div>
              <div className="pt-2">
                <div className="flex justify-between text-sm mb-1">
                  <span>Progress</span>
                  <span>{trip.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-cyan-600 h-2 rounded-full"
                    style={{ width: `${trip.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-lg">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="font-semibold">Trip Duration</h3>
                <p className="text-sm text-gray-500">{trip.duration}</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">
                  Start Date
                </span>
                <span className="font-semibold">
                  {trip.dates.split(" - ")[0]}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">
                  End Date
                </span>
                <span className="font-semibold">
                  {trip.dates.split(" - ")[1]}
                </span>
              </div>
              <div className="pt-2">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Calendar size={16} />
                  <span>{trip.daysRemaining} days remaining</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-lg">
                <Star size={24} />
              </div>
              <div>
                <h3 className="font-semibold">Destination Rating</h3>
                <p className="text-sm text-gray-500">
                  Based on {trip.reviews} reviews
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Star className="text-yellow-400 fill-current" size={24} />
                <span className="text-2xl font-bold">{trip.rating}</span>
                <span className="text-gray-500">/ 5.0</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {trip.highlights.map((highlight, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded-full"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="flex gap-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-3 px-4 rounded-md text-sm font-semibold transition-colors ${
                  activeTab === tab.id
                    ? "bg-white dark:bg-gray-700 shadow"
                    : "hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-4">Trip Description</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {trip.description}
                </p>
              </div>

              {trip.accommodations.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold mb-4">Accommodation</h3>
                  {trip.accommodations.map((acc, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-bold">{acc.name}</h4>
                          <p className="text-gray-500 text-sm">
                            {acc.type} • {acc.nights} nights
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Star
                            className="text-yellow-400 fill-current"
                            size={16}
                          />
                          <span className="font-semibold">{acc.rating}</span>
                          <span className="text-gray-500">/5</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {acc.amenities.map((amenity, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded-full"
                          >
                            {amenity}
                          </span>
                        ))}
                      </div>
                      <div className="text-right font-bold">{acc.price}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === "itinerary" && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold mb-6">Daily Itinerary</h3>
              {trip.itinerary.map((day) => (
                <div
                  key={day.day}
                  className="border border-gray-200 dark:border-gray-700 rounded-xl p-5"
                >
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900 text-cyan-600 dark:text-cyan-300 rounded-xl flex items-center justify-center font-bold">
                        Day {day.day}
                      </div>
                      <div className="flex-grow w-0.5 bg-gray-200 dark:bg-gray-700 my-2"></div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-bold text-lg">{day.title}</h4>
                          <p className="text-gray-600 dark:text-gray-400">
                            {day.description}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500">
                          <Clock size={16} />
                          <span className="text-sm">{day.time}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {day.activities.map((activity, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-900 rounded-lg"
                          >
                            <day.icon size={16} className="text-gray-500" />
                            <span className="text-sm">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "expenses" && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold mb-6">Expense Breakdown</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  {trip.expenses.map((expense, index) => (
                    <div key={index} className="mb-4">
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{expense.category}</span>
                        <span className="font-bold">{expense.amount}</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-cyan-600 h-2 rounded-full"
                          style={{ width: `${expense.percentage}%` }}
                        ></div>
                      </div>
                      <div className="text-right text-sm text-gray-500 mt-1">
                        {expense.percentage}% of total
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl">
                  <h4 className="font-bold mb-4">Budget Summary</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Total Budget</span>
                      <span className="font-bold">{trip.budget}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Amount Spent</span>
                      <span className="font-bold">{trip.spent}</span>
                    </div>
                    <div className="border-t border-gray-300 dark:border-gray-700 pt-3">
                      <div className="flex justify-between font-bold">
                        <span>Remaining</span>
                        <span className="text-green-600">
                          $
                          {parseFloat(trip.budget.replace("$", "")) -
                            parseFloat(trip.spent.replace("$", ""))}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "documents" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Travel Documents</h3>
                <button className="flex items-center gap-2 px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700">
                  <Download size={18} />
                  Download All
                </button>
              </div>
              {trip.documents.length > 0 ? (
                <div className="space-y-3">
                  {trip.documents.map((doc, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-xl"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-gray-200 dark:bg-gray-800 rounded-lg">
                          <Download size={20} />
                        </div>
                        <div>
                          <h4 className="font-medium">{doc.name}</h4>
                          <p className="text-sm text-gray-500">
                            {doc.size} • {doc.date}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg">
                          <Download size={18} />
                        </button>
                        <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg">
                          <Share2 size={18} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <AlertCircle
                    className="mx-auto text-gray-400 mb-4"
                    size={48}
                  />
                  <h4 className="text-lg font-semibold mb-2">
                    No Documents Added
                  </h4>
                  <p className="text-gray-500">
                    Upload your travel documents to keep them organized.
                  </p>
                  <button className="mt-4 px-6 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600">
                    Upload Documents
                  </button>
                </div>
              )}
            </div>
          )}

          {activeTab === "notes" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Travel Notes & Tips</h3>
                <button className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700">
                  + Add Note
                </button>
              </div>
              {trip.notes.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {trip.notes.map((note, index) => (
                    <div
                      key={index}
                      className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl"
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle
                          className="text-green-500 mt-1"
                          size={20}
                        />
                        <p className="text-gray-700 dark:text-gray-300">
                          {note}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <AlertCircle
                    className="mx-auto text-gray-400 mb-4"
                    size={48}
                  />
                  <h4 className="text-lg font-semibold mb-2">No Notes Added</h4>
                  <p className="text-gray-500">
                    Add notes and tips for your trip.
                  </p>
                </div>
              )}

              {trip.contacts.length > 0 && (
                <div>
                  <h4 className="text-lg font-bold mb-4">Important Contacts</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {trip.contacts.map((contact, index) => (
                      <div
                        key={index}
                        className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl"
                      >
                        <h5 className="font-bold mb-2">{contact.name}</h5>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <Phone size={14} />
                            <span>{contact.phone}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Mail size={14} />
                            <span>{contact.email}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyTripDetails;
