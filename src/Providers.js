import React from "react";
import { ThemeContextProvider } from "context/ThemeContext";
import { DrawerContextProvider } from "context/DrawerContext";
import { GifsContextProvider } from "context/GifsContext";

export const Providers = ({ children }) => (
  <React.StrictMode>
    <ThemeContextProvider>
      <DrawerContextProvider>
        <GifsContextProvider>{children}</GifsContextProvider>
      </DrawerContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
