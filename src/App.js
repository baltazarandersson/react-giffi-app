import React from "react";
import { Route } from "wouter";
import "App.css";
import Header from "components/Header";
import HomePage from "pages/Home/HomePage";
import SearchResult from "pages/SearchResult/SearchResult";
import Detials from "pages/Details/Details";
import { useTheme } from "context/ThemeContext";
import classNames from "classnames";
import { Login } from "pages/Login";
import { Register } from "pages/Register";
import { useAlertContext } from "context/AlertContext";
import { Alert } from "components/Alert";

function App() {
  const { theme } = useTheme();
  const { showAlert } = useAlertContext();

  console.log(showAlert);
  return (
    <div className={classNames("app", { "app--lightmode": !theme })}>
      <Header />
      <Route path="/" component={HomePage} />
      <Route path="/search/:keyword/:rating?" component={SearchResult} />
      <Route path="/gif/id/:id" component={Detials} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route
        path="/404"
        component={() => (
          <h1
            style={{
              color: "#FFBABA",
              backgroundColor: "#D8000C",
              width: "20rem",
            }}
          >
            {"Error 404: Not Found"}
          </h1>
        )}
      />
      {showAlert.show ? (
        <Alert type={showAlert.type} message={showAlert.message} />
      ) : null}
    </div>
  );
}

export default App;
