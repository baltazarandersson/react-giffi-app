import { API_KEY, API_URL } from "./settings";

const fromApiResponseToGifDetail = (response) => {
  const { data } = response;
  const { images, import_datetime: date, bitly_url } = data;
  const { mp4: url } = images.hd || images.original_mp4;
  let title = data.title.length <= 3 ? "Untitled GIF" : data.title;
  return { title, date, bitly_url, url };
};

export default async function getGifDetail(id) {
  const apiURL = `${API_URL}/gifs/${id}?api_key=${API_KEY}`;
  const response = await fetch(apiURL);

  return response.json().then(fromApiResponseToGifDetail);
}
