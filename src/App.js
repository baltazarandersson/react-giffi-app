import "./App.css";
import React, { useState } from "react";
import ListOfGifs from "./components/ListOfGifs";
import SearchGifs from "./components/SearchGifs";
import { Route } from "wouter";

function App() {
  // const [keyword, setKeyword] = useState();

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
