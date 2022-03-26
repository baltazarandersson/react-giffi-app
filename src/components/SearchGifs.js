import React, { useState } from "react";
import "./SearchGifs.css";
import { Link, useLocation } from "wouter";

export default function SearchGifs() {
  const [query, setQuery] = useState("");
  const [path, pushLocation] = useLocation();

  const inputRef = React.createRef();

  return (
    <div className="search-bar">
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          inputRef.current.value = "";
          pushLocation(`/gif/${query}`);
        }}
      >
        <input
          type="text"
          placeholder="Search any GIF here!"
          onChange={(e) => setQuery(e.target.value)}
          ref={inputRef}
        />
        <Link className="link-button" to={`/gif/${query}`}>
          {"Search"}
        </Link>
      </form>
    </div>
  );
}
