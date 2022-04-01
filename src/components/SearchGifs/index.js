import React, { useReducer, useState } from "react";
import { useCallback } from "react";
import { useLocation } from "wouter";
import { useRoute } from "wouter";
import "./index.css";
import { useForm } from "./useForm";

const RATINGS = ["g", "pg", "pg-13", "r"];

function SearchGifs() {
  const [path, pushLocation] = useLocation();
  const [isSearch, params] = useRoute("/search/:initialKeyword/:initialRating");
  const { initialKeyword, initialRating } = isSearch
    ? params
    : { initialKeyword: "", initialRating: "r" };

  const inputRef = React.createRef();

  const { query, rating, updateKeyword, updateRating } = useForm({
    initialKeyword,
    initialRating,
  });

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
    updateRating(evt.target.value);
  };

  const handleChangeInput = (evt) => {
    updateKeyword(evt.target.value);
  };

  return (
    <div className=".header__div--2 search-bar">
      <form className="search-bar__form" onSubmit={handleSumbit}>
        <input
          className="search-bar__input"
          type="text"
          placeholder="Search any GIF here!"
          onChange={handleChangeInput}
          ref={inputRef}
          value={query}
        />
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
        <button className="search-bar__button" onClick={handleSumbit}>
          {"Search"}
        </button>
      </form>
    </div>
  );
}

export default React.memo(SearchGifs);
