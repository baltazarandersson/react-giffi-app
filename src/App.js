import React from "react";
import { Route } from "wouter";
import "App.css";
import Header from "components/Header";
import HomePage from "pages/Home/HomePage";
import SearchResult from "pages/SearchResult/SearchResult";
import Detials from "pages/Details/Details";

function App() {
  return (
    <div className="App">
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
