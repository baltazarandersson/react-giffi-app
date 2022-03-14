const api_key = `ld77eiCHwgK61i6ifLOFfSr7XCZpBPZX`;

export default async function getGifs({ keyword } = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${keyword}&limit=12&offset=0&rating=g&lang=en`;
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
