import Gif from "./Gif";
import "./GifsContainer.css";

export default function GifsContainer({ gifsState }) {
  let gifsArray = gifsState.gifs;
  const ids = gifsArray.map((o) => o.id);
  const gifsFiltered = gifsArray.filter(
    ({ id }, index) => !ids.includes(id, index + 1)
  );

  const gifs = gifsFiltered;

  return (
    <div className="gifs-container">
      {gifs.map(({ title, import_datetime, url, id }) => (
        <Gif key={id} title={title} url={url} date={import_datetime} id={id} />
      ))}
    </div>
  );
}
