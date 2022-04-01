import { useEffect, useState } from "react";
import getGifs from "services/getGifs";
import { useGifsContext } from "context/GifsContext";
import { useRoute } from "wouter";
// import "components/Spinner/index.css";

let INITIAL_PAGE = 0;

export default function useGifs({ keyword, rating }) {
  const [page, setPage] = useState(INITIAL_PAGE);
  const [loading, setLoading] = useState(false);
  const { gifs, setGifs } = useGifsContext();
  const lastKeyword = localStorage.getItem("lastKeyword");
  const [home, params] = useRoute("/");

  useEffect(() => {
    if (lastKeyword === keyword && home) {
      return;
    } else {
      setLoading(true);
      getGifs({ keyword, rating }).then((gifs) => {
        setLoading(false);
        setGifs(gifs);
        localStorage.setItem("lastKeyword", keyword);
      });
    }
  }, [keyword, setGifs, lastKeyword, rating, home]);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;
    getGifs({ keyword, rating, page }).then((nextGifs) => {
      setGifs((prevState) => prevState.concat(nextGifs));
    });
  }, [keyword, page, setGifs, rating]);

  return { loading, gifs, setPage };
}
