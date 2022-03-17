import React from "react";
import Loading from "./Loading";
import useGifs from "../hooks/useGifs";
import GifsContainer from "./GifsContainer";

export default function ListOfGifs({ params }) {
  const { keyword } = params;

  const { gifsState } = useGifs({ keyword });

  if (gifsState.loading) return <Loading />;

  return <GifsContainer gifsState={gifsState} />;
}
