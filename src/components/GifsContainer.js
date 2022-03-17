import Gif from "./Gif";
import "./GifsContainer.css";

export default function GifsContainer({ gifsState }) {
  return (
    <div className="main">
      <div className="gifs-container">
        {gifsState.gifs.map(({ title, import_datetime, url, id }) => (
          <Gif
            key={id}
            title={title}
            url={url}
            date={import_datetime}
            id={id}
          />
        ))}
      </div>
      <div>
        <h2>Popular Gifs</h2>
      </div>
    </div>
  );
}
