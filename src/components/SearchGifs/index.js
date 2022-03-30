import React, { useState } from "react";
import { Link } from "wouter";
import "./index.css";

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
          window.scrollTo(0, 0);
        }}
      >
        <input
          type="text"
          placeholder="Search any GIF here!"
          onChange={(e) => setQuery(e.target.value)}
          ref={inputRef}
        />
        <Link
          className="link-button"
          to={`/gif/${query}`}
          onClick={() => window.scrollTo(0, 0)}
        >
          {"Search"}
        </Link>
      </form>
    </div>
  );
}

export default React.memo(SearchGifs);
