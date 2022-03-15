import { useEffect, useState } from "react";
import getGifs from "../services/getGifs";
import "../components/Loading.css";
import "../components/ListOfGifs.css";

export default function useGifs({ keyword } = { keyword: null }) {
  const [gifsState, setGifsState] = useState({ loading: false, gifs: [] });

  useEffect(() => {
    setGifsState((prevState) => {
      return { ...prevState, loading: true };
    });
    getGifs({ keyword }).then((gifs) => {
      setGifsState({ loading: false, gifs: gifs });
    });
  }, [keyword]);

  return { gifsState };
}
