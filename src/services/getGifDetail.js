const api_key = `ld77eiCHwgK61i6ifLOFfSr7XCZpBPZX`;

export default async function getGifDetail(id) {
  const apiURL = `https://api.giphy.com/v1/gifs/${id}?api_key=${api_key}`;
  const response = await fetch(apiURL);
  const responseData = await response.json();
  const { data } = responseData;
  const { images, title, import_datetime: date, bitly_url } = data;
  const { url } = images.original;
  const { width: gif_width } = images.original;
  console.log(gif_width);
  return { title, date, bitly_url, url, width: gif_width };
}
