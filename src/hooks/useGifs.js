import { useEffect, useState } from "react";
import getGifs from "services/getGifs";
import "components/Loading.css";

let INITIAL_PAGE = 0;

export default function useGifs({ keyword }) {
  const [gifsState, setGifsState] = useState({ loading: false, gifs: [] });
  const [page, setPage] = useState(INITIAL_PAGE);

  useEffect(() => {
    setGifsState((prevState) => {
      return { ...prevState, loading: true };
    });
    getGifs({ keyword }).then((gifs) => {
      setGifsState({ loading: false, gifs: gifs });
      localStorage.setItem("lastKeyword", keyword);
    });
  }, [keyword]);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;
    getGifs({ keyword, page }).then((nextGifs) => {
      setGifsState((prevState) => {
        let oldGifs = prevState.gifs;
        return { ...prevState, gifs: oldGifs.concat(nextGifs) };
      });
    });
  }, [keyword, page]);

  return { gifsState, setPage };
}
