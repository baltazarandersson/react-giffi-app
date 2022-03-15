import { useState, useEffect } from "react";
import getGifDetail from "../services/getGifDetail";
import "./GifDetail.css";

export default function GifDetail({ params }) {
  const { id } = params;
  const [gifData, setGifData] = useState({});
  const { title, date, bitly_url, url } = gifData;

  useEffect(() => {
    getGifDetail(id).then(setGifData);
  }, []);

  return (
    <div className="gif-detail">
      <img src={url} alt="gif" />
      <div>
        <h1>{title}</h1>
        <p>{date}</p>
        <a href={bitly_url}>Link Directo</a>
      </div>
    </div>
  );
}
