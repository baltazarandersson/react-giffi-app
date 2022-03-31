import React, { useState } from "react";
import "./index.css";
import { Link, useLocation } from "wouter";
import { useCallback } from "react";
import { useRoute } from "wouter";

const RATINGS = ["g", "pg", "pg-13", "r"];

function SearchGifs() {
  const [path, pushLocation] = useLocation();
  const [isSearch, params] = useRoute("/search/:initialKeyword/:initialRating");

  const { initialKeyword, initialRating } = isSearch
    ? params
    : { initialKeyword: "", initialRating: "r" };
  console.log(initialKeyword);

  const [query, setQuery] = useState(initialKeyword);
  const [rating, setRating] = useState(initialRating);

  const inputRef = React.createRef();

  const handleSumbit = useCallback(
    (evt) => {
      evt.preventDefault();
      pushLocation(`/search/${query}/${rating}`);
      inputRef.current.value = "";
      window.scrollTo(0, 0);
    },
    [query, rating, pushLocation, inputRef]
  );

  const handleChangeRating = (evt) => {
    setRating(evt.target.value);
  };

  return (
    <div className=".header__div--2 search-bar">
      <form className="search-bar__form" onSubmit={handleSumbit}>
        <input
          className="search-bar__input"
          type="text"
          placeholder="Search any GIF here!"
          onChange={(e) => setQuery(e.target.value)}
          ref={inputRef}
        />
        <button className="search-bar__button" onClick={handleSumbit}>
          {"Search"}
        </button>
        <select
          className="search-bar__select"
          onChange={handleChangeRating}
          value={rating}
        >
          <option disabled>Ratings</option>
          {RATINGS.map((rating) => {
            return <option key={rating}>{rating}</option>;
          })}
        </select>
      </form>
    </div>
  );
}

export default React.memo(SearchGifs);
