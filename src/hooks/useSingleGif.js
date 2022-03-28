import { useGifsContext } from "context/GifsContext";
import { useEffect, useState } from "react";
import getGifDetail from "services/getGifDetail";

export default function useSingleGif(id) {
  const [loading, setLoading] = useState(false);
  const { gifs } = useGifsContext();
  const gifFromCache = gifs.find((singleGif) => singleGif.id === id);
  const [gif, setGif] = useState(gifFromCache);

  useEffect(() => {
    if (!gif) {
      setLoading(true);
      getGifDetail(id).then((gif) => {
        setGif(gif);
        setLoading(false);
      });
    }
  }, [id, gif]);

  return { gif, loading };
}
