import React, { useContext, useState } from "react";

const ThemeContext = React.createContext();
const ThemeUpdaterContext = React.createContext();

export const useTheme = () => useContext(ThemeContext);

export const useThemeUpdate = () => useContext(ThemeUpdaterContext);

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("dark-theme");
  function toggleTheme() {
    setTheme(theme === "dark-theme" ? "light-theme" : "dark-theme");
  }

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeUpdaterContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdaterContext.Provider>
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
