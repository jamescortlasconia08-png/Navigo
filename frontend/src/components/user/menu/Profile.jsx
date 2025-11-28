
import React, { useState } from 'react';
import {
    User, Briefcase, Bell, Moon, ChevronDown, Camera, Edit, Save, MapPin, Globe, Calendar, CreditCard,
    Plane, Star, Bed, Utensils, Shield, BellRing, Mail, MessageSquare, ToggleLeft, ToggleRight, Download, Trash2, Plus
} from 'lucide-react';

const ProfilePage = () => {
    const [activeTab, setActiveTab] = useState('profile');
    const [isEditing, setIsEditing] = useState(false);

    const NavTab = ({ tabId, currentTab, onClick, children }) => (
        <button
            onClick={() => onClick(tabId)}
            className={`px-4 py-2 font-semibold rounded-lg transition-colors duration-200 ${currentTab === tabId
                ? 'bg-cyan-600 text-white shadow-md'
                : 'text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}>
            {children}
        </button>
    );

    const ProfileContent = () => (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
                <InfoCard title="Personal Information" onEditToggle={() => setIsEditing(!isEditing)} isEditing={isEditing} />
                <RegionalSettingsCard isEditing={isEditing} />
            </div>
            <div className="space-y-8">
                <TravelStatsCard />
                <AchievementsCard />
            </div>
        </div>
    );
    
    const InfoCard = ({ title, onEditToggle, isEditing }) => (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">{title}</h2>
                <button onClick={onEditToggle} className="flex items-center gap-2 text-sm font-semibold text-cyan-600 hover:text-cyan-700">
                    {isEditing ? <><Save size={16}/>Save Changes</> : <><Edit size={16}/>Edit Profile</>}
                </button>
            </div>
            {/* Form fields here */}
        </div>
    );

    const RegionalSettingsCard = ({ isEditing }) => (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
             <h2 className="text-xl font-bold mb-6">Regional Settings</h2>
             {/* Form fields here */}
        </div>
    );
    
    const TravelStatsCard = () => (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-6">Travel Stats</h2>
            {/* Stats grid here */}
        </div>
    );

    const AchievementsCard = () => (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
             <h2 className="text-xl font-bold mb-6">Achievements</h2>
             {/* Achievements list here */}
        </div>
    );

    const TravelPrefsContent = () => (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PreferenceCard title="Flight Preferences" icon={<Plane size={24} className="text-blue-500"/>}>
              {/* Flight preference fields */}
          </PreferenceCard>
          <PreferenceCard title="Hotel Preferences" icon={<Bed size={24} className="text-purple-500"/>}>
              {/* Hotel preference fields */}
          </PreferenceCard>
          <PreferenceCard title="Travel Style" icon={<Star size={24} className="text-yellow-500"/>}>
              {/* Travel style fields */}
          </PreferenceCard>
      </div>
    );

    const PreferenceCard = ({ title, icon, children }) => (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-4 mb-4">
                {icon} <h3 className="text-lg font-bold">{title}</h3>
            </div>
            <div className="space-y-4">{children}</div>
        </div>
    );

    const NotificationsContent = () => (
        <div className="max-w-4xl mx-auto space-y-8">
            <NotificationCategory title="Email Notifications" icon={<Mail size={22}/>}/>
            <NotificationCategory title="Mobile Notifications" icon={<MessageSquare size={22}/>}/>
            <NotificationCategory title="Marketing" icon={<BellRing size={22}/>}/>
        </div>
    );

    const NotificationCategory = ({title, icon}) => (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold flex items-center gap-3 mb-4">{icon}{title}</h3>
            {/* Notification toggles here */}
        </div>
    );

    const BillingContent = () => (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
                <CurrentPlanCard />
                <BillingHistoryCard />
            </div>
            <div>
                <PaymentMethodsCard />
            </div>
        </div>
    );

    const CurrentPlanCard = () => (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
             <h2 className="text-xl font-bold mb-4">Current Plan</h2>
             {/* Plan details and buttons */}
        </div>
    );

    const BillingHistoryCard = () => (
         <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
             <h2 className="text-xl font-bold mb-4">Billing History</h2>
             {/* Billing items list */}
        </div>
    );

    const PaymentMethodsCard = () => (
         <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
             <h2 className="text-xl font-bold mb-4">Payment Methods</h2>
             {/* Payment methods list and add button */}
        </div>
    );

    return (
        <div className="bg-gray-100 dark:bg-gray-900 min-h-screen font-sans text-gray-900 dark:text-gray-100">
            {/* Header placeholder */}

            <main className="p-6 lg:p-10 max-w-screen-2xl mx-auto">
                <div className="flex justify-center mb-8 bg-gray-200 dark:bg-gray-800 p-1.5 rounded-xl shadow-inner">
                    <NavTab tabId="profile" currentTab={activeTab} onClick={setActiveTab}>Profile</NavTab>
                    <NavTab tabId="travel" currentTab={activeTab} onClick={setActiveTab}>Travel</NavTab>
                    <NavTab tabId="notifications" currentTab={activeTab} onClick={setActiveTab}>Notifications</NavTab>
                    <NavTab tabId="billing" currentTab={activeTab} onClick={setActiveTab}>Billing</NavTab>
                </div>

                <div className="">
                    {activeTab === 'profile' && <ProfileContent />}
                    {activeTab === 'travel' && <TravelPrefsContent />}
                    {activeTab === 'notifications' && <NotificationsContent />}
                    {activeTab === 'billing' && <BillingContent />}
                </div>
            </main>
        </div>
    );
};

export default ProfilePage;
