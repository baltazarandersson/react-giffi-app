import { API_KEY, API_URL } from "./settings";

export default async function getGifs({ keyword, limit = 21, page = 0 } = {}) {
  const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${
    page * limit
  }&rating=g&lang=en`;
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
