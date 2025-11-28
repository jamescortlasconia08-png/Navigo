
import React, { useState } from 'react';
import { Briefcase, Compass, Clock, MapPin, Moon, Bell, ChevronDown, User, Crown, Settings, HelpCircle, LogOut, Search, SlidersHorizontal, Umbrella, Building, Mountain, Heart, Star, Leaf, TrendingUp, Share2 } from 'lucide-react';

// Mock data for destinations
const trendingDestinations = [
  {
    name: 'Santorini, Greece',
    country: 'Greece',
    image: 'https://images.unsplash.com/photo-1570077188660-9787c0a69d96?auto=format&fit=crop&w=1000&q=80',
    priceIndicator: '$$$',
    rating: 4.8,
    reviews: 2420,
    duration: '5-7 days',
    highlights: ['Sunset Views', 'White Architecture'],
    bestTime: 'Apr - Oct',
    budget: '$150-$300',
  },
  {
    name: 'Kyoto, Japan',
    country: 'Japan',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1000&q=80',
    priceIndicator: '$$',
    rating: 4.9,
    reviews: 3150,
    duration: '4-6 days',
    highlights: ['Ancient Temples', 'Cherry Blossoms'],
    bestTime: 'Oct - Dec, Mar - May',
    budget: '$100-$200',
  },
  {
    name: 'Dubai, UAE',
    country: 'UAE',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80',
    priceIndicator: '$$$$',
    rating: 4.6,
    reviews: 1820,
    duration: '4-5 days',
    highlights: ['Modern Architecture', 'Luxury Shopping'],
    bestTime: 'Nov - Mar',
    budget: '$250-$500',
  },
];

// Destination Card Component
const DestinationCard = ({ destination }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
      <div className="relative">
        <img src={destination.image} alt={destination.name} className="w-full h-48 object-cover" />
        <div className="absolute top-3 left-3 bg-white text-gray-800 text-sm font-bold px-3 py-1 rounded-full">{destination.priceIndicator}</div>
        <div className="absolute top-3 right-3 flex space-x-2">
          <button onClick={() => setIsLiked(!isLiked)} className={`w-10 h-10 rounded-full flex items-center justify-center transition ${isLiked ? 'bg-red-500 text-white' : 'bg-white/80 backdrop-blur-sm text-gray-700'}`}>
            <Heart size={20} fill={isLiked ? 'currentColor' : 'none'} />
          </button>
          <button className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700">
            <Share2 size={20} />
          </button>
        </div>
        <div className="absolute bottom-3 left-3 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-md">Trending</div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold truncate">{destination.name}</h3>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
          <MapPin size={14} className="mr-1" /> {destination.country}
        </div>
        <div className="flex justify-between items-center mb-3 text-sm">
          <div className="flex items-center font-semibold">
            <Star size={16} className="text-yellow-400 mr-1" fill="currentColor" />
            {destination.rating} <span className="text-gray-500 font-normal ml-1">({destination.reviews})</span>
          </div>
          <div className="text-gray-500 font-medium">{destination.duration}</div>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {destination.highlights.map(tag => (
            <span key={tag} className="bg-gray-100 dark:bg-gray-700 text-xs font-medium px-2 py-1 rounded-full">{tag}</span>
          ))}
          <span className="bg-gray-100 dark:bg-gray-700 text-xs font-medium px-2 py-1 rounded-full">+1 more</span>
        </div>
        <div className="flex justify-between text-xs text-center text-gray-600 dark:text-gray-300 mb-4">
            <div className="flex-1">
                <p className="font-semibold">Best Time</p>
                <p className="text-gray-500 dark:text-gray-400">{destination.bestTime}</p>
            </div>
            <div className="flex-1 border-l border-gray-200 dark:border-gray-700">
                <p className="font-semibold">Budget/day</p>
                <p className="text-gray-500 dark:text-gray-400">{destination.budget}</p>
            </div>
        </div>
        <div className="flex gap-3">
          <button className="w-full bg-cyan-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-cyan-700 transition">Plan Trip</button>
          <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold py-2 px-4 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition">Learn More</button>
        </div>
      </div>
    </div>
  );
};

// Main Explore Component
const Explore = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', icon: Compass },
    { id: 'beach', name: 'Beach', icon: Umbrella },
    { id: 'culture', name: 'Culture', icon: Building },
    { id: 'adventure', name: 'Adventure', icon: Mountain },
    { id: 'romantic', name: 'Romantic', icon: Heart },
    { id: 'luxury', name: 'Luxury', icon: Star },
    { id: 'nature', name: 'Nature', icon: Leaf },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen font-sans">
      {/* Header */}
       <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50 flex items-center justify-between px-6 py-3">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <img src="/Assets/Images/NaviGo_Logo.png" alt="NaviGo Logo" className="h-10" />
            <span className="font-bold text-xl text-cyan-600">Dashboard</span>
          </div>
          <nav className="hidden md:flex items-center space-x-4">
            <a href="#" className="flex items-center space-x-2 text-gray-500 hover:text-cyan-600">
              <Briefcase size={20} /><span>My Trips</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-cyan-600 font-semibold border-b-2 border-cyan-600 pb-1">
              <Compass size={20} /><span>Explore</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-gray-500 hover:text-cyan-600">
              <Clock size={20} /><span>History</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-gray-500 hover:text-cyan-600">
              <MapPin size={20} /><span>Plan</span>
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-500 hover:text-cyan-600"><Moon size={22} /></button>
          <button className="text-gray-500 hover:text-cyan-600 relative"><Bell size={22} /><span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span></button>
          <div className="relative">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setProfileOpen(!profileOpen)}>
              <img src="/Assets/Images/NaviGo_Logo.png" alt="Profile" className="h-9 w-9 rounded-full border-2 border-cyan-500" />
              <span className="hidden sm:block font-semibold">User Name</span>
              <ChevronDown size={16} className={`transition-transform ${profileOpen ? 'rotate-180' : ''}`} />
            </div>
            {profileOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-xl py-2">
                <div className="px-4 py-2 flex items-center border-b border-gray-200 dark:border-gray-700">
                    <img src="/Assets/Images/NaviGo_Logo.png" alt="Profile" className="h-12 w-12 rounded-full mr-3" />
                    <div>
                        <div className="font-bold">User Name</div>
                        <div className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full inline-block">Free Plan</div>
                    </div>
                </div>
                 <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"><User size={16} className="mr-3" />View Profile</a>
                <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"><Crown size={16} className="mr-3" />Plans & Billing</a>
                <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"><Settings size={16} className="mr-3" />Account Settings</a>
                <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"><HelpCircle size={16} className="mr-3" />Help & Support</a>
                <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>
                <a href="#" className="flex items-center px-4 py-2 text-sm text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700"><LogOut size={16} className="mr-3" />End Journey</a>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6 lg:p-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold">Explore Destinations</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-2">Discover amazing places around the world. Get personalized recommendations based on your preferences and travel style.</p>
          </div>
          
          {/* Search and Filter Section */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="relative flex-grow">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20}/>
                <input type="text" placeholder="Search destinations, countries, or activities..." className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500" />
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
                {categories.map(cat => {
                  const Icon = cat.icon;
                  const isActive = activeCategory === cat.id;
                  return (
                    <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className={`px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 transition ${isActive ? 'bg-cyan-600 text-white' : 'bg-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'}`}>
                      <Icon size={16} /> <span>{cat.name}</span>
                    </button>
                  )
                })}
            </div>
          </div>
          
          {/* Content Tabs */}
          <div className="flex border-b border-gray-200 dark:border-gray-700 mb-8">
            <button className="px-4 py-2 font-semibold text-cyan-600 border-b-2 border-cyan-600">Destinations</button>
            <button className="px-4 py-2 font-semibold text-gray-500 hover:text-cyan-600">Experiences</button>
            <button className="px-4 py-2 font-semibold text-gray-500 hover:text-cyan-600">Inspiration</button>
          </div>
          
          {/* Trending Now Section */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold flex items-center mb-6"><TrendingUp size={24} className="text-cyan-500 mr-3" />Trending Now</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {trendingDestinations.map(dest => <DestinationCard key={dest.name} destination={dest} />)}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

export default Explore;
