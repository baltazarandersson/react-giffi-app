import "./App.css";
import React from "react";
import SearchGifs from "./components/SearchGifs";
import Body from "./components/Body";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <SearchGifs />
        <Body />
      </section>
    </div>
  );
}

export default App;
