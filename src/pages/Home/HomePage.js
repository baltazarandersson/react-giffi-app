import ListOfGifs from "components/ListOfGifs";
import TrendingBox from "components/TrendingBox";
export default function HomePage() {
  return (
    <div className="main">
      <ListOfGifs params={{ keyword: "windows" }}></ListOfGifs>
      <TrendingBox></TrendingBox>
    </div>
  );
}
