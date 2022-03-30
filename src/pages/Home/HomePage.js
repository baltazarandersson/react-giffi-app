import ListOfGifs from "components/ListOfGifs";
import TrendingBox from "components/TrendingBox";
export default function HomePage() {
  return (
    <div className="app-content">
      <ListOfGifs
        params={{
          keyword: localStorage.getItem("lastKeyword") || "wellcome",
          title: "Last search",
        }}
      ></ListOfGifs>
      <TrendingBox></TrendingBox>
    </div>
  );
}
