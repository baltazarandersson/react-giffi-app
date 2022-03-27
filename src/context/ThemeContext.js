import React, { useContext, useState } from "react";

const ThemeContext = React.createContext();

export const useTheme = () => useContext(ThemeContext);

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "false" ? false : true
  );

  function toggleTheme() {
    localStorage.setItem("theme", !theme);
    setTheme(!theme);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
