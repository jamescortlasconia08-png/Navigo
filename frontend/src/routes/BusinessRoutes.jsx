import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import BusinessDashboard from "../components/business/BusinessDashboard";

const BusinessRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/business/dashboard" />} />
        <Route path="/business/dashboard" element={<BusinessDashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default BusinessRoutes;
