import "./App.css";
import React from "react";
import ListOfGifs from "./components/ListOfGifs";
import SearchGifs from "./components/SearchGifs";
import GifDetail from "./components/GifDetail";
import { Route } from "wouter";
import HomeGifs from "./components/HomeGifs";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <SearchGifs />
        <Route path="/" component={HomeGifs} />
        <Route path="/gif/:keyword" component={ListOfGifs} />
        <Route path="/gif/id/:id" component={GifDetail} />
      </section>
    </div>
  );
}

export default App;
