import { useState, useEffect } from "react";
import getGifDetail from "../services/getGifDetail";
import "./GifDetail.css";
import Loading from "./Loading";

export default function GifDetail({ params }) {
  const { id } = params;
  const [gifData, setGifData] = useState({});
  const [loading, setLoading] = useState(false);
  const { title, date, bitly_url, url } = gifData;

  useEffect(() => {
    setLoading(true);
    getGifDetail(id).then((gifDetail) => {
      setGifData(gifDetail);
      setLoading(false);
    });
  }, []);

  if (loading) return <Loading />;

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
