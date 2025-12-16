import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Ensure user objects always include a role for route selection
  const normalizeUser = (payload) =>
    payload ? { ...payload, role: payload.role || "traveler" } : null;

  // Load user from session storage on component mount
  useEffect(() => {
    const storedUser = sessionStorage.getItem("navigo_user");
    if (storedUser) {
      setUser(normalizeUser(JSON.parse(storedUser)));
    }
  }, []);

  // Update session storage whenever user changes
  useEffect(() => {
    if (user) {
      sessionStorage.setItem("navigo_user", JSON.stringify(user));
    } else {
      sessionStorage.removeItem("navigo_user");
    }
  }, [user]);

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem("navigo_user");
  };

  // Expose a setter that always normalizes the user object
  const setUserNormalized = (payload) => setUser(normalizeUser(payload));

  const value = {
    user,
    setUser: setUserNormalized,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
