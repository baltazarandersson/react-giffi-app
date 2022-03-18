import { API_KEY, API_URL } from "./settings";

export default async function getGifs({ keyword } = {}) {
  const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;
  const response = await fetch(apiURL);
  const responseData = await response.json();
  const { data } = responseData;
  const gifs = data.map((gif) => {
    const { images, title, import_datetime, id } = gif;
    const { url } = images.original;
    return { title, import_datetime, url, id };
  });

  return gifs;
}
