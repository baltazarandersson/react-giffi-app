import ListOfGifs from "components/ListOfGifs";
import TrendingBox from "components/TrendingBox";

export default function SearchResult({ params }) {
  return (
    <div className="main">
      <ListOfGifs params={params}></ListOfGifs>
      <TrendingBox></TrendingBox>
    </div>
  );
}
