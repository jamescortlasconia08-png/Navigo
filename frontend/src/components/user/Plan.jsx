
import React, { useState, useEffect } from 'react';
import {
    Briefcase, Compass, Clock, MapPin, Moon, Bell, ChevronDown, User, Crown, Settings, HelpCircle, LogOut,
    ArrowLeft, Plane, Building, Car, Calendar, Users, ArrowRight, Search
} from 'lucide-react';

const popularDestinations = [
    'New York', 'Paris', 'Tokyo', 'London', 'Dubai', 'Sydney', 'Barcelona', 'Amsterdam'
];

const Plan = () => {
    const [profileOpen, setProfileOpen] = useState(false);
    const [tripType, setTripType] = useState('round-trip');
    const [destination, setDestination] = useState('');

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const dest = urlParams.get('destination');
        if (dest) {
            setDestination(decodeURIComponent(dest));
        }
    }, []);

    const Header = () => (
        <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50 flex items-center justify-between px-6 py-3">
            <div className="flex items-center space-x-6">
                <img src="/Assets/Images/NaviGo_Logo.png" alt="NaviGo Logo" className="h-10" />
                <nav className="hidden md:flex items-center space-x-4">
                    <a href="#" className="flex items-center space-x-2 text-gray-500 hover:text-cyan-600"><Briefcase size={20} /><span>My Trips</span></a>
                    <a href="#" className="flex items-center space-x-2 text-gray-500 hover:text-cyan-600"><Compass size={20} /><span>Explore</span></a>
                    <a href="#" className="flex items-center space-x-2 text-gray-500 hover:text-cyan-600"><Clock size={20} /><span>History</span></a>
                    <a href="#" className="flex items-center space-x-2 text-cyan-600 font-semibold border-b-2 border-cyan-600 pb-1"><MapPin size={20} /><span>Plan</span></a>
                </nav>
            </div>
            <div className="flex items-center space-x-4">
                <button className="text-gray-500 hover:text-cyan-600"><Moon size={22} /></button>
                <button className="text-gray-500 hover:text-cyan-600"><Bell size={22} /></button>
                <div className="relative">
                    <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setProfileOpen(!profileOpen)}>
                        <img src="/Assets/Images/NaviGo_Logo.png" alt="Profile" className="h-9 w-9 rounded-full" />
                        <span className="hidden sm:block font-semibold">User Name</span>
                        <ChevronDown size={16} />
                    </div>
                    {profileOpen && <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-xl py-2 z-50"></div>}
                </div>
            </div>
        </header>
    );

    const InputGroup = ({ icon, children }) => (
        <div className="relative flex-1 min-w-[180px]">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">{icon}</div>
            {children}
        </div>
    );

    return (
        <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen font-sans">
            <Header />
            <main className="p-6 lg:p-10">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                        <div>
                            <h1 className="text-4xl font-bold">Plan Your Trip</h1>
                            <p className="text-gray-500 dark:text-gray-400 mt-2">Find the best flights, hotels, and activities for your journey.</p>
                        </div>
                        <button className="mt-4 md:mt-0 flex items-center gap-2 text-sm font-semibold text-cyan-600 hover:text-cyan-700 transition">
                            <ArrowLeft size={16}/>Back to Dashboard
                        </button>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-cyan-100 dark:bg-cyan-900/50 text-cyan-600 dark:text-cyan-400 rounded-full"><Plane size={28}/></div>
                            <h2 className="text-2xl font-bold">Flight Search</h2>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-6 bg-gray-100 dark:bg-gray-700/50 p-1.5 rounded-xl">
                            <button onClick={() => setTripType('round-trip')} className={`flex-1 px-4 py-2 text-sm font-semibold rounded-lg transition ${tripType === 'round-trip' ? 'bg-white dark:bg-cyan-600 shadow text-cyan-800 dark:text-white' : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`}>Round Trip</button>
                            <button onClick={() => setTripType('one-way')} className={`flex-1 px-4 py-2 text-sm font-semibold rounded-lg transition ${tripType === 'one-way' ? 'bg-white dark:bg-cyan-600 shadow text-cyan-800 dark:text-white' : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`}>One Way</button>
                            <button onClick={() => setTripType('multi-city')} className={`flex-1 px-4 py-2 text-sm font-semibold rounded-lg transition ${tripType === 'multi-city' ? 'bg-white dark:bg-cyan-600 shadow text-cyan-800 dark:text-white' : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`}>Multi-City</button>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-4 mb-6">
                            <div className="flex flex-wrap md:flex-nowrap gap-4 col-span-1 lg:col-span-2">
                                <InputGroup icon={<MapPin size={18}/>}>
                                    <input type="text" placeholder="Departure city" className="w-full pl-10 pr-3 py-3 bg-gray-100 dark:bg-gray-700 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                                </InputGroup>
                                <InputGroup icon={<MapPin size={18}/>}>
                                    <input type="text" placeholder="Destination city" value={destination} onChange={e => setDestination(e.target.value)} className="w-full pl-10 pr-3 py-3 bg-gray-100 dark:bg-gray-700 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                                </InputGroup>
                            </div>
                            <div className="flex flex-wrap md:flex-nowrap gap-4 col-span-1 lg:col-span-2">
                                <InputGroup icon={<Calendar size={18}/>}>
                                    <input type="text" placeholder="Departure date" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'} className="w-full pl-10 pr-3 py-3 bg-gray-100 dark:bg-gray-700 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                                </InputGroup>
                                <InputGroup icon={<Calendar size={18}/>}>
                                    <input type="text" placeholder="Return date" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'} className={`w-full pl-10 pr-3 py-3 bg-gray-100 dark:bg-gray-700 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 ${tripType !== 'round-trip' && 'opacity-50 cursor-not-allowed'}`} disabled={tripType !== 'round-trip'} />
                                </InputGroup>
                            </div>
                             <div className="flex flex-wrap md:flex-nowrap gap-4 col-span-1 lg:col-span-2">
                                <InputGroup icon={<Users size={18}/>}>
                                    <select className="w-full pl-10 pr-3 py-3 bg-gray-100 dark:bg-gray-700 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 appearance-none">
                                        <option>1 Traveler</option><option>2 Travelers</option><option>3+ Travelers</option>
                                    </select>
                                    <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"/>
                                </InputGroup>
                                <InputGroup icon={<User size={18}/>}>
                                    <select className="w-full pl-10 pr-3 py-3 bg-gray-100 dark:bg-gray-700 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 appearance-none">
                                        <option>Economy</option><option>Business</option><option>First Class</option>
                                    </select>
                                    <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"/>
                                </InputGroup>
                            </div>
                        </div>
                        <button className="w-full flex items-center justify-center gap-3 bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-cyan-700 transition shadow-lg"><Search size={20}/>Search Flights</button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mt-8">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex items-center gap-5">
                           <div className="p-3 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full"><Building size={24}/></div>
                           <div>
                             <h3 className="font-bold text-lg">Hotels & Accommodations</h3>
                             <p className="text-sm text-gray-500 dark:text-gray-400">Find the perfect place to stay.</p>
                           </div>
                           <button className="ml-auto p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600"><ArrowRight size={20}/></button>
                        </div>
                         <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex items-center gap-5">
                           <div className="p-3 bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400 rounded-full"><Car size={24}/></div>
                           <div>
                             <h3 className="font-bold text-lg">Car Rentals</h3>
                             <p className="text-sm text-gray-500 dark:text-gray-400">Get around with ease.</p>
                           </div>
                           <button className="ml-auto p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600"><ArrowRight size={20}/></button>
                        </div>
                    </div>

                    <div className="mt-10">
                        <h2 className="text-xl font-bold mb-4">Popular Destinations</h2>
                        <div className="flex flex-wrap gap-3">
                            {popularDestinations.map(dest => (
                                <button key={dest} onClick={() => setDestination(dest)} className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-full text-sm font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-cyan-500 transition">
                                    {dest}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Plan;
