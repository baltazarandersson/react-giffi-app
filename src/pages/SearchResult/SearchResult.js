import ListOfGifs from "components/ListOfGifs";
import { useSEO } from "hooks/useSEO";
import { useGifsContext } from "context/GifsContext";
export default function SearchResult({ params }) {
  params.title = `${decodeURI(params.keyword)} GIFs`;
  const { gifs } = useGifsContext();

  useSEO({
    title: `${gifs.length} GIFs of ${decodeURI(params.keyword)}`,
    description: `${gifs.length} results of the '${decodeURI(
      params.keyword
    )}' search, only on GIFFI`,
  });

  return (
    <div className="app-content">
      <ListOfGifs params={params}></ListOfGifs>
    </div>
  );
}
