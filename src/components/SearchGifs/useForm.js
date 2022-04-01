import { useReducer } from "react";

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

export function useForm({ initialKeyword, initialRating }) {
  const [state, dispatch] = useReducer(reducer, {
    query: decodeURI(initialKeyword),
    rating: initialRating,
  });

  const { query, rating } = state;

  return {
    query,
    rating,
    updateRating: (keyword) =>
      dispatch({ type: ACTIONS.SET_RATING, payload: keyword }),
    updateKeyword: (keyword) =>
      dispatch({ type: ACTIONS.SET_QUERY, payload: keyword }),
  };
}
