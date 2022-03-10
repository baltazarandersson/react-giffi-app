import React from "react";
import Gif from "./Gif";
import { useEffect, useState } from "react";
import getGifs from "../services/getGifs";

export default function ListOfGifs({ keyword }) {
  const [gifs, setGifs] = useState([]);
  useEffect(() => {
    getGifs({ keyword }).then((gifs) => setGifs(gifs));
  }, [keyword]);

  return gifs.map(({ title, url, import_datetime }) => (
    <Gif key={url} title={title} url={url} import_datetime={import_datetime} />
  ));
}
