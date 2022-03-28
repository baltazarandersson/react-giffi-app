import Gif from "./Gif";
import "./GifsContainer.css";
import Masonry from "react-masonry-css";
import getRandomColor from "./getRandomColor";

export default function GifsContainer({ gifs }) {
  const ids = gifs.map((o) => o.id);
  const gifsFiltered = gifs.filter(
    ({ id }, index) => !ids.includes(id, index + 1)
  );

  return (
    <Masonry
      breakpointCols={{
        default: 3,
        480: 2,
      }}
      className="gifs-container"
      columnClassName="gifs-container-grid_column"
    >
      {gifsFiltered.map(({ title, import_datetime, url, id }) => (
        <Gif
          key={id}
          title={title}
          url={url}
          date={import_datetime}
          id={id}
          color={getRandomColor()}
        />
      ))}
    </Masonry>
  );
}
