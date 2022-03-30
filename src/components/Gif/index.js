import React, { useState } from "react";
import { Link } from "wouter";
import "./index.css";

function Gif({ title, url, id, color }) {
  const [isHover, isHoverUpdate] = useState(false);

  return (
    <div
      className="Gif"
      onMouseEnter={() => isHoverUpdate(!isHover)}
      onMouseLeave={() => isHoverUpdate(!isHover)}
      style={isHover ? { boxShadow: `0px 0px 0px 6px ${color}` } : null}
    >
      <Link to={`/gif/id/${id}`}>
        <div className="gif-title">
          <p style={{ background: color }}>
            {title.length <= 3 ? "Untitled GIF" : title}
          </p>
        </div>
        <img src={url} key={id} alt="gif" />
      </Link>
    </div>
  );
}

export default React.memo(Gif, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id;
});
