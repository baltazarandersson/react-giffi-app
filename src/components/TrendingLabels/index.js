import { useEffect, useState, useMemo } from "react";
import { Link } from "wouter";
import { useDrawer } from "context/DrawerContext";
import getTrendingLabels from "services/getTrendingLabels";
import getRandomColor from "services/getRandomColor";
import "./index.css";

export default function TrendingLabels() {
  const [trends, setTrends] = useState([]);
  const { drawerStateUpdate } = useDrawer();

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
            onClick={() => {
              window.scrollTo(0, 0);
              drawerStateUpdate(false);
            }}
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
