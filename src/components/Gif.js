import React from "react";
import { Link } from "wouter";
import "./Gif.css";

function Gif({ title, url, id }) {
  return (
    <div className="Gif">
      <Link to={`/gif/id/${id}`}>
        <div className="gif-title">
          <p>{title}</p>
        </div>
        <img src={url} key={id} alt="gif" />
      </Link>
    </div>
  );
}

export default React.memo(Gif);
