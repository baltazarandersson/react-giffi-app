import React from "react";
import { Link } from "wouter";
import "./Gif.css";

export default function Gif({ title, url, id }) {
  return (
    <div className="Gif">
      <Link to={`/gif/id/${id}`}>
        <div className="gif-title">
          <p>{title}</p>
        </div>
        <img src={url} key={url} alt="gif" />
      </Link>
    </div>
  );
}
