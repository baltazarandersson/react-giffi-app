import React, { useState } from "react";
import "./SearchGifs.css";
import { Link, useLocation } from "wouter";

export default function SearchGifs() {
  const [query, setQuery] = useState("");
  const [path, pushLocation] = useLocation();

  return (
    <div className="search-bar">
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          pushLocation(`/gif/${query}`);
        }}
      >
        <input
          type="text"
          placeholder="Search any GIF here!"
          onChange={(e) => setQuery(e.target.value)}
        />
        <Link className="link-button" to={`/gif/${query}`}>
          {"Search"}
        </Link>
      </form>
    </div>
  );
}
