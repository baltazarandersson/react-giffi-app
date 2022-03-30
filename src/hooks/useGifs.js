import { useEffect, useState } from "react";
import getGifs from "services/getGifs";
import { useGifsContext } from "context/GifsContext";
// import "components/Spinner/index.css";

let INITIAL_PAGE = 0;

export default function useGifs({ keyword }) {
  const [page, setPage] = useState(INITIAL_PAGE);
  const [loading, setLoading] = useState(false);
  const { gifs, setGifs } = useGifsContext();
  const lastKeyword = localStorage.getItem("lastKeyword");

  useEffect(() => {
    if (lastKeyword === keyword) {
      return gifs;
    } else {
      setLoading(true);
      getGifs({ keyword }).then((gifs) => {
        setLoading(false);
        setGifs(gifs);
        localStorage.setItem("lastKeyword", keyword);
      });
    }
  }, [keyword, setGifs, gifs, lastKeyword]);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;
    getGifs({ keyword, page }).then((nextGifs) => {
      setGifs((prevState) => prevState.concat(nextGifs));
    });
  }, [keyword, page, setGifs]);

  return { loading, gifs, setPage };
}
