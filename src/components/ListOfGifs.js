import React from "react";
import Gif from "./Gif";
import { useEffect, useState } from "react";
import getGifs from "../services/getGifs";

export default function ListOfGifs({ params }) {
  const { keyword } = params;
  const [gifs, setGifs] = useState([]);
  useEffect(() => {
    getGifs({ keyword }).then((gifs) => setGifs(gifs));
  }, [keyword]);

  return (
    <div>
      {gifs.map(({ title, url, import_datetime }) => (
        <Gif
          key={url}
          title={title}
          url={url}
          import_datetime={import_datetime}
        />
      ))}
    </div>
  );
}
