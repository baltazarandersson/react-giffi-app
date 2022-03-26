import React, { useContext, useState } from "react";

const ThemeContext = React.createContext();

export const useTheme = () => useContext(ThemeContext);

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(true);
  function toggleTheme() {
    setTheme(theme === true ? false : true);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
