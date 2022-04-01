import React, { useState } from "react";
import { Link } from "wouter";
import "./index.css";

function Gif({ title, url, id, color }) {
  const [isHover, isHoverUpdate] = useState(false);

  console.log(color);

  return (
    <div
      className="gifs-wrapper__gif"
      onMouseEnter={() => isHoverUpdate(!isHover)}
      onMouseLeave={() => isHoverUpdate(!isHover)}
      style={isHover ? { boxShadow: `0px 0px 0px 6px ${color}` } : null}
    >
      <Link className="gifs-wrapper__gif__link" to={`/gif/id/${id}`}>
        <div>
          <p className="gifs-wrapper__gif__title" style={{ background: color }}>
            {title.length <= 3 ? "Untitled GIF" : title}
          </p>
        </div>
        <img className="gifs-wrapper__gif__img" src={url} key={id} alt="gif" />
      </Link>
    </div>
  );
}

export default React.memo(Gif, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id;
});
