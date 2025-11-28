import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLandingPage from "../components/user/UserLandingPage";
import Explore from "../components/user/Explore";
import History from "../components/user/History";
import MyTrips from "../components/user/MyTrips";
import Plan from "../components/user/Plan";
import Profile from "../components/user/menu/Profile";
import AccountSettings from "../components/user/menu/AccountSettings";

const UserRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLandingPage />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/history" element={<History />} />
        <Route path="/my-trips" element={<MyTrips />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/account-settings" element={<AccountSettings />} />
      </Routes>
    </BrowserRouter>
  );
};

export default UserRoutes;
