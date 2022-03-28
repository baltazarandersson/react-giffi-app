import React, { useState } from "react";
import "./SearchGifs.css";
import { Link, useLocation } from "wouter";

function SearchGifs({ onSumbit }) {
  const [query, setQuery] = useState("");

  const inputRef = React.createRef();

  return (
    <div className="search-bar">
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          onSumbit(query);
          inputRef.current.value = "";
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

export default React.memo(SearchGifs);
