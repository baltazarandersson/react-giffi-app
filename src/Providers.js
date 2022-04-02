import React from "react";
import { ThemeContextProvider } from "context/ThemeContext";
import { DrawerContextProvider } from "context/DrawerContext";
import { GifsContextProvider } from "context/GifsContext";
import { AuthContextProvider } from "context/AuthContext";
import { AlertContextProvider } from "context/AlertContext";
export const Providers = ({ children }) => (
  <React.StrictMode>
    <ThemeContextProvider>
      <DrawerContextProvider>
        <GifsContextProvider>
          <AuthContextProvider>
            <AlertContextProvider>{children}</AlertContextProvider>
          </AuthContextProvider>
        </GifsContextProvider>
      </DrawerContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
