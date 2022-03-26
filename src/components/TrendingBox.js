import TrendingLabels from "./TrendingLabels";
import useNearScreen from "hooks/useNearScreen";
import "./TrendingBox.css";
function TrendingBox() {
  return (
    <div className="trending-box">
      <h2>Trending Categories</h2>
      <TrendingLabels></TrendingLabels>
    </div>
  );
}

export default function LazyLoadTrends() {
  const { isNearScreen, fromRef } = useNearScreen();
  return (
    <div id="lazytrend" ref={fromRef}>
      {isNearScreen ? <TrendingBox /> : null}
    </div>
  );
}
