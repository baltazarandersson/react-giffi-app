import React, { useReducer, useState } from "react";
import { useCallback } from "react";
import { useLocation } from "wouter";
import { useRoute } from "wouter";
import "./index.css";

const RATINGS = ["g", "pg", "pg-13", "r"];
const ACTIONS = {
  SET_RATING: "set-rating",
  SET_QUERY: "set-query",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_RATING:
      return {
        ...state,
        rating: action.payload,
      };
    case ACTIONS.SET_QUERY:
      return {
        ...state,
        query: action.payload,
      };

    default:
      return state;
  }
};

function SearchGifs() {
  const [path, pushLocation] = useLocation();
  const [isSearch, params] = useRoute("/search/:initialKeyword/:initialRating");
  const { initialKeyword, initialRating } = isSearch
    ? params
    : { initialKeyword: "", initialRating: "r" };

  const inputRef = React.createRef();

  const [state, dispatch] = useReducer(reducer, {
    query: decodeURI(initialKeyword),
    rating: initialRating,
  });
  const { query, rating } = state;

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
    dispatch({ type: ACTIONS.SET_RATING, payload: evt.target.value });
  };

  return (
    <div className=".header__div--2 search-bar">
      <form className="search-bar__form" onSubmit={handleSumbit}>
        <input
          className="search-bar__input"
          type="text"
          placeholder="Search any GIF here!"
          onChange={(e) =>
            dispatch({ type: ACTIONS.SET_QUERY, payload: e.target.value })
          }
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
