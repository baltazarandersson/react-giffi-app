import React, { useEffect, useRef, useCallback } from "react";
import debounce from "just-debounce-it";
import Spinner from "components/Spinner/index";
import GifsContainer from "components/GifsContainer";
import useGifs from "hooks/useGifs";
import useNearScreen from "hooks/useNearScreen";
import "./index.css";

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

  if (loading) return <Spinner />;

  return (
    <div className="list-of-gifs">
      <h2>{params.title}</h2>
      <GifsContainer gifs={gifs} />
      <div className="visor" ref={externalRef}></div>
    </div>
  );
}
