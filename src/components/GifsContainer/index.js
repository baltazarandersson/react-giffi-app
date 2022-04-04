import Masonry from "react-masonry-css";
import Gif from "components/Gif";
import getRandomColor from "services/getRandomColor";
import "./index.css";

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
      className="gifs-wrapper"
      columnClassName="gifs-wrapper--grid_column"
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
