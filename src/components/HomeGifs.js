import { React } from "react";
import useGifs from "../hooks/useGifs";
import Loading from "./Loading";
import GifsContainer from "./GifsContainer";

export default function HomeGifs() {
  const { gifsState } = useGifs();

  if (gifsState.loading) return <Loading />;

  return (
    <>
      <GifsContainer gifsState={gifsState} />
    </>
  );
}
