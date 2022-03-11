import "./App.css";
import React from "react";
import ListOfGifs from "./components/ListOfGifs";
import SearchGifs from "./components/SearchGifs";
import { Route } from "wouter";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <SearchGifs />
        <Route path="/gif/:keyword" component={ListOfGifs} />
      </section>
    </div>
  );
}

export default App;
