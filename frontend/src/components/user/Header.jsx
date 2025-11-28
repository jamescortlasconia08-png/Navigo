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
                        className={`transition-transform ${profileOpen ? "rotate-180" : ""
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