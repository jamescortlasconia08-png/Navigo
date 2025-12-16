import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Initialize theme immediately to prevent flash
  const getInitialTheme = () => {
    // Check localStorage first
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("navigo_theme");
      if (stored === "dark" || stored === "light") {
        return stored;
      }
      // Check system preference
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
      }
    }
    return "light";
  };

  const [theme, setTheme] = useState(getInitialTheme);

  // Apply theme immediately on mount and whenever it changes
  useEffect(() => {
    if (typeof window === "undefined") return;

    const root = document.documentElement;
    
    // Tailwind dark mode works by checking for 'dark' class on html element
    // Remove 'dark' class for light mode, add it for dark mode
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    
    // Also set data attribute for additional compatibility
    root.setAttribute("data-theme", theme);
    
    // Persist to localStorage
    localStorage.setItem("navigo_theme", theme);
    
    console.log("Theme applied:", theme, "Dark class present:", root.classList.contains("dark"));
  }, [theme]);

  // Ensure theme is applied on mount (syncs with script in index.html)
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const root = document.documentElement;
    const currentTheme = root.classList.contains("dark") ? "dark" : "light";
    
    // If the HTML already has a theme applied (from the script), sync React state
    if (currentTheme !== theme) {
      setTheme(currentTheme);
    } else {
      // Otherwise, ensure our React state is applied
      if (theme === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
      root.setAttribute("data-theme", theme);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "light" ? "dark" : "light";
      console.log("Toggling theme from", prev, "to", newTheme);
      return newTheme;
    });
  };

  const value = {
    theme,
    setTheme,
    toggleTheme,
    isDark: theme === "dark",
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

