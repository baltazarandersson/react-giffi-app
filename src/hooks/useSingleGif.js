import { useGifsContext } from "context/GifsContext";
import { useEffect, useState } from "react";
import getGifDetail from "services/getGifDetail";

export default function useSingleGif(id) {
  const [isLoading, setIsLoading] = useState(false);
  const { gifs } = useGifsContext();
  const gifFromCache = gifs.find((singleGif) => singleGif.id === id);
  if (gifFromCache) {
    gifFromCache.title =
      gifFromCache.title.length <= 3 ? "Untitled GIF" : gifFromCache.title;
  }
  const [gif, setGif] = useState(gifFromCache);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    if (!gif) {
      setIsError(false);
      setIsLoading(true);
      getGifDetail(id)
        .then((gif) => {
          setGif(gif);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          setIsError(true);
        });
    }
  }, [id, gif]);

  return { gif, isLoading, isError };
}
