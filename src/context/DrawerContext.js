import React, { useContext, useState, useEffect } from "react";

const DrawerContext = React.createContext();

export const useDrawer = () => useContext(DrawerContext);

export function DrawerContextProvider({ children }) {
  const [drawerState, drawerStateUpdate] = useState(false);

  useEffect(() => {
    if (drawerState) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "visible";
  }, [drawerState]);

  function toggleDrawer() {
    drawerStateUpdate((drawerState) => !drawerState);
  }

  return (
    <DrawerContext.Provider value={{ drawerState, toggleDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
}
