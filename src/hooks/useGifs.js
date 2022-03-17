import { useEffect, useState } from "react";
import getGifs from "../services/getGifs";
import "../components/Loading.css";

export default function useGifs({ keyword }) {
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
