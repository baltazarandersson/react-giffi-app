import React, { useContext, useState } from "react";

const DrawerContext = React.createContext();

export const useDrawer = () => useContext(DrawerContext);

export function DrawerContextProvider({ children }) {
  const [drawerState, drawerStateUpdate] = useState(false);

  return (
    <DrawerContext.Provider value={{ drawerState, drawerStateUpdate }}>
      {children}
    </DrawerContext.Provider>
  );
}
