import React from "react";
import Gif from "./Gif";
import Loading from "./Loading";
import useGifs from "../hooks/useGifs";

export default function ListOfGifs({ params }) {
  const { keyword } = params;

  const { gifsState } = useGifs({ keyword });

  if (gifsState.loading) return <Loading />;

  return (
    <div className="gifs-container">
      {gifsState.gifs.map(({ title, import_datetime, url, id }) => (
        <Gif key={id} title={title} url={url} date={import_datetime} id={id} />
      ))}
    </div>
  );
}
