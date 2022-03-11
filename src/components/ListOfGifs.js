import React from "react";
import Gif from "./Gif";
import { useEffect, useState } from "react";
import getGifs from "../services/getGifs";
import "./Loading.css";

export default function ListOfGifs({ params }) {
  const [loading, setLoading] = useState(true);

  const { keyword } = params;
  const [gifs, setGifs] = useState([]);
  useEffect(() => {
    setLoading(true);
    getGifs({ keyword }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
    });
  }, [keyword]);

  if (loading) {
    return (
      <div>
        <div className="fulfilling-square-spinner">
          <div className="spinner-inner"></div>
        </div>
      </div>
    );
  }

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
