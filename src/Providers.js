import React from "react";
import { ThemeContextProvider } from "context/ThemeContext";
import { DrawerContextProvider } from "context/DrawerContext";

export const Providers = ({ children }) => (
  <React.StrictMode>
    <ThemeContextProvider>
      <DrawerContextProvider>{children}</DrawerContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
