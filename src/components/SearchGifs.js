import React, { useState } from "react";
import "./SearchGifs.css";
import { Link } from "wouter";

export default function SearchGifs() {
  const [query, setQuery] = useState("");

  // let onOnclickHandler = (e) => {
  //   setKeyword(query);
  //   return query;
  // };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search any GIF here!"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Link className="link-button" to={`/gif/${query}`}>
        {"Magic Button"}
      </Link>
    </div>
  );
}
