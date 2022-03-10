import React from "react";
import "./Gif.css";

export default function Gif({ title, url, import_datetime }) {
  return (
    <div className="Gif">
      <img src={url} key={url} alt="gif" />
      <h1>{title}</h1>
      <p>{import_datetime}</p>
    </div>
  );
}
