import classNames from "classnames";
import React, { useRef, useState } from "react";
import { Redirect } from "wouter";
import { AiOutlineFullscreen, AiOutlineFullscreenExit } from "react-icons/ai";
import useSingleGif from "hooks/useSingleGif";
import Spinner from "components/Spinner";
import "./index.css";

export default function GifDetail({ params }) {
  const { id } = params;
  const { gif, isLoading, isError } = useSingleGif(id);
  const videoRef = useRef();
  const [isFullscreen, setIsFullscreen] = useState(false);

  if (isLoading) return <Spinner />;
  if (isError) return <Redirect to="/404" />;
  if (!gif) return null;

  const { title, date, bitly_url, mp4_url } = gif;

  function toggleFullscreen() {
    setIsFullscreen(!isFullscreen);

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      videoRef.current.requestFullscreen();
    }
  }

  return (
    <div className="details-container">
      <div className="details-container__player" ref={videoRef}>
        <video
          className="details-container__player__video"
          muted
          loop
          autoPlay="autoplay"
          src={mp4_url}
          alt="gif-movie"
        />
        <button
          className="details-container__player__button"
          onClick={() => toggleFullscreen()}
        >
          {!isFullscreen ? (
            <AiOutlineFullscreen className="fullscreen-icon" />
          ) : (
            <AiOutlineFullscreenExit className="fullscreen-icon" />
          )}
        </button>
      </div>
      <div className="details-container__info">
        <h2 className="details-container__info__h2">{title}</h2>
        <p className="details-container__info__p">{date}</p>
        <a className="details-container__info__a" href={bitly_url}>
          source
        </a>
      </div>
    </div>
  );
}
