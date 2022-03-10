import React, { useState } from "react";
import "./SearchGifs.css";

export default function SearchGifs({ setKeyword }) {
  const [query, setQuery] = useState("");

  let onOnclickHandler = () => {
    setKeyword(query);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search any GIF here!"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={onOnclickHandler}>Magic Button</button>
    </div>
  );
}
