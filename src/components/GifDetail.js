import useSingleGif from "hooks/useSingleGif";
import { useState, useEffect } from "react";
import "./GifDetail.css";
import Loading from "./Loading";

export default function GifDetail({ params }) {
  const { id } = params;
  const { gif, loading } = useSingleGif(id);

  if (loading) return <Loading />;
  if (!gif) return null;

  const { title, date, bitly_url, mp4_url } = gif;

  return (
    <div className="gif-detail">
      <video controls loop autoPlay="autoplay" src={mp4_url} alt="gif-movie" />
      <div>
        <h1>{title}</h1>
        <p>{date}</p>
        <a href={bitly_url}>source</a>
      </div>
    </div>
  );
}
