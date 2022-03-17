import React from "react";
import { Route } from "wouter";
import "./App.css";
import Header from "./components/Header";
import GifDetail from "./components/GifDetail";
import HomePage from "./pages/Home/HomePage";
import SearchResult from "./pages/SearchResult/SearchResult";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Header />
        <div className="body">
          <Route path="/" component={HomePage} />
          <Route path="/gif/:keyword" component={SearchResult} />
          <Route path="/gif/id/:id" component={GifDetail} />
        </div>
      </section>
    </div>
  );
}

export default App;
