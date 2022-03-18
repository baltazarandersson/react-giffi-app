import React from "react";
import Loading from "./Loading";
import useGifs from "../hooks/useGifs";
import GifsContainer from "./GifsContainer";
import TrendingLabels from "./TrendingLabels";
import "./ListOfGifs.css";

export default function ListOfGifs({ params }) {
  const { keyword } = params;

  const { gifsState } = useGifs({ keyword });

  if (gifsState.loading) return <Loading />;

  return (
    <div className="main">
      <GifsContainer gifsState={gifsState} />
      <div className="trending-box">
        <h2>Trending Categories</h2>
        <TrendingLabels></TrendingLabels>
      </div>
    </div>
  );
}
