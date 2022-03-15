import { React } from "react";
import useGifs from "../hooks/useGifs";
import Gif from "./Gif";
import Loading from "./Loading";
import "./HomeGifs.css";

export default function HomeGifs() {
  const { gifsState } = useGifs();

  if (gifsState.loading) return <Loading />;

  return (
    <>
      <div className="home-nav">
        GIF search engine app made with
        <strong>&nbsp;React&nbsp;</strong>
        powered by
        <strong>&nbsp;GIPHY API</strong>
      </div>
      <div className="gifs-container">
        {gifsState.gifs.map(({ title, import_datetime, url, id }) => (
          <Gif
            key={id}
            title={title}
            url={url}
            date={import_datetime}
            id={id}
          />
        ))}
      </div>
    </>
  );
}
