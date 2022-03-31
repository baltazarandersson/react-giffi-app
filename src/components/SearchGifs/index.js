import React, { useState } from "react";
import "./index.css";
import { Link, useLocation } from "wouter";
import { useCallback } from "react";

const RATINGS = ["g", "pg", "pg-13", "r"];

function SearchGifs() {
  const [query, setQuery] = useState("");
  const [rating, setRating] = useState(RATINGS[0]);
  const [path, pushLocation] = useLocation();

  const inputRef = React.createRef();

  const onSumbit = useCallback(() => {
    pushLocation(`/search/${query}`);
  }, [query, pushLocation]);

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
        {/* <select>
          <option disabled>Choose a Rating</option>
          {RATINGS.map((rating) => {
            return <option key={rating}>{rating}</option>;
          })}
        </select> */}
      </form>
    </div>
  );
}

export default React.memo(SearchGifs);
