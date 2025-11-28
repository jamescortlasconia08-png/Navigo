import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLandingPage from "../components/user/UserLandingPage";
import Explore from "../components/user/Explore";
import History from "../components/user/History";
import MyTrips from "../components/user/MyTrips";
import Plan from "../components/user/Plan";
import Profile from "../components/user/menu/Profile";
import AccountSettings from "../components/user/menu/AccountSettings";
import UserLayout from "../layout/UserLayout";

const UserRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout><UserLandingPage /></UserLayout>} />
        <Route path="/explore" element={<UserLayout><Explore /></UserLayout>} />
        <Route path="/history" element={<UserLayout><History /></UserLayout>} />
        <Route path="/my-trips" element={<UserLayout><MyTrips /></UserLayout>} />
        <Route path="/plan" element={<UserLayout><Plan /></UserLayout>} />
        <Route path="/profile" element={<UserLayout><Profile /></UserLayout>} />
        <Route path="/account-settings" element={<UserLayout><AccountSettings /></UserLayout>} />
      </Routes>
    </BrowserRouter>
  );
};

export default UserRoutes;
