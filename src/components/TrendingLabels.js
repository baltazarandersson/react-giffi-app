import { useEffect, useState } from "react";
import { Link } from "wouter";
import getTrendingLabels from "../services/getTrendingLabels";
import "./TrendingLabels.css";

export default function TrendingLabels() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendingLabels().then(setTrends);
  }, []);

  console.log(trends);

  return (
    <div>
      {trends.map((trend) => {
        return (
          <Link className="trending-tag" to={`/gif/${trend}`} key={`${trend}`}>
            {trend}
          </Link>
        );
      })}
    </div>
  );
}
