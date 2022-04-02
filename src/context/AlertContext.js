import React, { useContext, useState, useEffect } from "react";

const AlertContext = React.createContext();

export const useAlertContext = () => useContext(AlertContext);

export function AlertContextProvider({ children }) {
  const [showAlert, setShowAlert] = useState({
    show: false,
    type: "",
    message: "",
  });

  useEffect(() => {
    if (showAlert.show === true) {
      setTimeout(() => {
        setShowAlert((showAlert) => ({
          ...showAlert,
          show: false,
        }));
      }, 5000);
    }
  }, [showAlert]);

  return (
    <AlertContext.Provider value={{ showAlert, setShowAlert }}>
      {children}
    </AlertContext.Provider>
  );
}
