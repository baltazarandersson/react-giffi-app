import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import useGifs from "../hooks/useGifs";
import GifsContainer from "./GifsContainer";
import "./ListOfGifs.css";

export default function ListOfGifs({ params }) {
  const { keyword } = params;
  const { gifsState, setPage } = useGifs({ keyword });

  const handleNextPage = () => setPage((prevPage) => prevPage + 1);

  if (gifsState.loading) return <Loading />;

  return (
    <div className="list-of-gifs">
      <GifsContainer gifsState={gifsState} />
      <button onClick={handleNextPage}>Load More GIFs</button>
    </div>
  );
}
