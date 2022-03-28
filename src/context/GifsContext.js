import React, { useContext, useState } from "react";

const GifsContext = React.createContext();

export const useGifsContext = () => useContext(GifsContext);

export function GifsContextProvider({ children }) {
  const [gifs, setGifs] = useState([]);

  return (
    <GifsContext.Provider value={{ gifs, setGifs }}>
      {children}
    </GifsContext.Provider>
  );
}
