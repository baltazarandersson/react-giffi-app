import React, { useEffect, useRef, useCallback } from "react";
import Loading from "./Loading";
import useGifs from "../hooks/useGifs";
import GifsContainer from "./GifsContainer";
import "./ListOfGifs.css";
import useNearScreen from "hooks/useNearScreen";
import debounce from "just-debounce-it";

export default function ListOfGifs({ params }) {
  const { keyword } = params;
  const { gifsState, setPage } = useGifs({ keyword });
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: gifsState.loading ? null : externalRef,
    once: false,
  });

  const debounceHandleNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 200),
    []
  );

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage();
  }, [isNearScreen, debounceHandleNextPage]);

  if (gifsState.loading) return <Loading />;

  return (
    <div className="list-of-gifs">
      <GifsContainer gifsState={gifsState} />
      <div className="visor" ref={externalRef}></div>
    </div>
  );
}
