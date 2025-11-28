import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import UserRoutes from "./UserRoutes";
import AuthRoutes from "./AuthRoutes";

const Role = () => {
  const { user } = useContext(AuthContext);

  if (user) return <UserRoutes />;
  if (!user) return <AuthRoutes />;
  return null;
};

export default Role;
