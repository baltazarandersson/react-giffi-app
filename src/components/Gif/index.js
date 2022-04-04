import { Fav } from "components/Fav";
import React, { useState } from "react";
import { Link } from "wouter";

import "./index.css";

function Gif({ title, url, id, color }) {
  const [isHover, isHoverUpdate] = useState(false);

  return (
    <div
      className="gifs-wrapper__gif"
      onMouseOver={() => isHoverUpdate(true)}
      onMouseLeave={() => isHoverUpdate(false)}
      style={isHover ? { boxShadow: `0px 0px 0px 6px ${color}` } : null}
    >
      <Link className="gifs-wrapper__gif__link" to={`/gif/id/${id}`}>
        <div>
          <p
            className="gifs-wrapper__gif__title"
            style={isHover ? { opacity: 1, background: color } : null}
          >
            {title.length <= 3 ? "Untitled GIF" : title}
          </p>
        </div>
        <img className="gifs-wrapper__gif__img" src={url} key={id} alt="gif" />
      </Link>

      <Fav id={id} gif={{ title, url, id, color }} />
    </div>
  );
}

export default React.memo(Gif, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id;
});
