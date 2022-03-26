import React from "react";
import { Route } from "wouter";
import "App.css";
import Header from "components/Header";
import HomePage from "pages/Home/HomePage";
import SearchResult from "pages/SearchResult/SearchResult";
import Detials from "pages/Details/Details";
import { useTheme } from "context/ThemeContext";
import classNames from "classnames";

function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames("App", { "light-mode": !theme })}>
      <section className="App-content">
        <Header />
        <Route path="/" component={HomePage} />
        <Route path="/gif/:keyword" component={SearchResult} />
        <Route path="/gif/id/:id" component={Detials} />
      </section>
    </div>
  );
}

export default App;
