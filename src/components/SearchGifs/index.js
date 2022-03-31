import React, { useState } from "react";
import { Link } from "wouter";
import "./index.css";

function SearchGifs({ onSumbit }) {
  const [query, setQuery] = useState("");

  const inputRef = React.createRef();

  return (
    <div className=".header__div--2 search-bar">
      <form
        className="search-bar__form"
        onSubmit={(evt) => {
          evt.preventDefault();
          onSumbit(query);
          inputRef.current.value = "";
          window.scrollTo(0, 0);
        }}
      >
        <input
          className="search-bar__input"
          type="text"
          placeholder="Search any GIF here!"
          onChange={(e) => setQuery(e.target.value)}
          ref={inputRef}
        />
        <Link
          className="search-bar__button"
          to={`/search/${query}`}
          onClick={() => window.scrollTo(0, 0)}
        >
          {"Search"}
        </Link>
      </form>
    </div>
  );
}

export default React.memo(SearchGifs);
