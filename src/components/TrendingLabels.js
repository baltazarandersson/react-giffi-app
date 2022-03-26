import { useEffect, useState, useMemo } from "react";
import { Link } from "wouter";
import getTrendingLabels from "../services/getTrendingLabels";
import "./TrendingLabels.css";

function getRandomColor() {
  const randomNumber = () => Math.floor(Math.random() * (240 - 80 + 1) + 80);
  const color = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
  return color;
}

export default function TrendingLabels() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendingLabels().then(setTrends);
  }, []);

  const linkStyles = useMemo(() => {
    return trends.map(() => ({
      background: getRandomColor(),
    }));
  }, [trends]);

  return (
    <div>
      {trends.map((trend, idx) => {
        return (
          <Link
            style={linkStyles[idx]}
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
