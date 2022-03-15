import React from "react";
import Gif from "./Gif";
import { useEffect, useState } from "react";
import getGifs from "../services/getGifs";
import "./Loading.css";
import "./ListOfGifs.css";
import Loading from "./Loading";

export default function ListOfGifs({ params }) {
  // const [loading, setLoading] = useState(false);
  // const [gifs, setGifs] = useState([]);
  const [gifsState, setGifsState] = useState({ loading: false, gifs: [] });
  const { keyword } = params;

  useEffect(() => {
    setGifsState((prevState) => {
      return { ...prevState, loading: true };
    });
    getGifs({ keyword }).then((gifs) => {
      setGifsState({ loading: false, gifs: gifs });
    });
  }, [keyword]);

  if (gifsState.loading) return <Loading />;

  return (
    <div className="gifs-container">
      {gifsState.gifs.map(({ title, import_datetime, url, id }) => (
        <Gif key={id} title={title} url={url} date={import_datetime} id={id} />
      ))}
    </div>
  );
}
