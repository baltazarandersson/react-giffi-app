import { useEffect, useState } from "react";
import { Link } from "wouter";
import getTrendingLabels from "../services/getTrendingLabels";
import "./TrendingLabels.css";

export default function TrendingLabels() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendingLabels().then(setTrends);
  }, []);

  function getRandomColor() {
    const randomNumber = () => Math.floor(Math.random() * (240 - 60 + 1) + 60);
    const color = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
    return color;
  }

  return (
    <div>
      {trends.map((trend) => {
        return (
          <Link
            style={{ background: `${getRandomColor()}` }}
            className="trending-tag"
            to={`/gif/${trend}`}
            key={`${trend}`}
          >
            {trend}
          </Link>
        );
      })}
    </div>
  );
}
