import ListOfGifs from "components/ListOfGifs";

export default function SearchResult({ params }) {
  params.title = `${decodeURI(params.keyword)} GIFs`;
  return (
    <div className="app-content">
      <ListOfGifs params={params}></ListOfGifs>
    </div>
  );
}
