import React from "react";
import ListOfGifs from "./ListOfGifs";
import GifDetail from "./GifDetail";
import { Route } from "wouter";
import HomeGifs from "./HomeGifs";
import "./Body.css";

export default function Body() {
  return (
    <div className="body">
      <Route path="/" component={HomeGifs} />
      <Route path="/gif/:keyword" component={ListOfGifs} />
      <Route path="/gif/id/:id" component={GifDetail} />
    </div>
  );
}
