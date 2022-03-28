import React, { useEffect, useRef, useCallback } from "react";
import Loading from "./Loading";
import useGifs from "../hooks/useGifs";
import GifsContainer from "./GifsContainer";
import "./ListOfGifs.css";
import useNearScreen from "hooks/useNearScreen";
import debounce from "just-debounce-it";

export default function ListOfGifs({ params }) {
  const { keyword } = params;
  const { gifs, loading, setPage } = useGifs({ keyword });
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });

  const debounceHandleNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 300),
    [setPage]
  );

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage();
  }, [isNearScreen, debounceHandleNextPage]);

  if (loading) return <Loading />;

  return (
    <div className="list-of-gifs">
      <h2>{params.title}</h2>
      <GifsContainer gifsState={gifs} />
      <div className="visor" ref={externalRef}></div>
    </div>
  );
}
