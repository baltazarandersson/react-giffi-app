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
    <div className="gif-detail-container">
      <div className="gif-detail-player" ref={videoRef}>
        <video muted loop autoPlay="autoplay" src={mp4_url} alt="gif-movie" />
        <button onClick={() => toggleFullscreen()}>
          <AiOutlineFullscreen
            className={classNames("fullscreen-icon", {
              "fullscreen-icon-visible": !isFullscreen,
            })}
          />
          <AiOutlineFullscreenExit
            className={classNames("fullscreen-icon", {
              "fullscreen-icon-visible": isFullscreen,
            })}
          />
        </button>
      </div>
      <div className="gif-detail-info">
        <h1>{title}</h1>
        <p>{date}</p>
        <a href={bitly_url}>source</a>
      </div>
    </div>
  );
}
