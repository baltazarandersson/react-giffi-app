import React from "react";
import { Link } from "wouter";
import "./Gif.css";

export default function Gif({ title, date, url, id }) {
  return (
    <div className="Gif">
      <Link to={`/gif/id/${id}`}>
        <img src={url} key={url} alt="gif" />
      </Link>
      <h1>{title}</h1>
      <p>{date}</p>
    </div>
  );
}
