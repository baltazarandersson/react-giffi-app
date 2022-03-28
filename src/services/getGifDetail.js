import { API_KEY, API_URL } from "./settings";

export default async function getGifDetail(id) {
  const apiURL = `${API_URL}/gifs/${id}?api_key=${API_KEY}`;
  const response = await fetch(apiURL);
  const responseData = await response.json();
  console.log(responseData);
  const { data } = responseData;
  const { images, title, import_datetime: date, bitly_url } = data;
  const { mp4: url } = images.hd || images.original_mp4;
  return { title, date, bitly_url, url };
}
