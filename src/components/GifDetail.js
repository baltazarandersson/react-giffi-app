import useSingleGif from "hooks/useSingleGif";
import "./GifDetail.css";
import Loading from "./Loading";
import { Redirect } from "wouter";

export default function GifDetail({ params }) {
  const { id } = params;
  const { gif, isLoading, isError } = useSingleGif(id);

  if (isLoading) return <Loading />;
  if (isError) return <Redirect to="/404" />;
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
