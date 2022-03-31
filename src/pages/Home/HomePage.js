import ListOfGifs from "components/ListOfGifs";
import TrendingBox from "components/TrendingBox";
import { useSEO } from "hooks/useSEO";
export default function HomePage() {
  useSEO({ title: "Home" });

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
