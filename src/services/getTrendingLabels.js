import { API_KEY, API_URL } from "./settings";
export default async function getTrendingLabels() {
  const apiURL = `${API_URL}/trending/searches?api_key=${API_KEY}`;
  const response = await fetch(apiURL);
  const { data = [] } = await response.json();
  console.log(response);
  return data;
}
