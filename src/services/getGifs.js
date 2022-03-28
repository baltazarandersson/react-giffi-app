import { API_KEY, API_URL } from "./settings";

const fromApiResponseToGifs = (response) => {
  console.log(response);
  const { data = [] } = response;
  const gifs = data.map((gif) => {
    const { images, title, import_datetime: date, id, bitly_url } = gif;
    const { url } = images.fixed_height;
    const { mp4: mp4_url } = images.hd || images.original;
    return { title, date, url, mp4_url, id, bitly_url };
  });
  return gifs;
};

export default async function getGifs({ keyword, limit = 21, page = 0 } = {}) {
  const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${
    page * limit
  }&rating=g&lang=en`;
  const response = await fetch(apiURL);
  return response.json().then(fromApiResponseToGifs);
}
