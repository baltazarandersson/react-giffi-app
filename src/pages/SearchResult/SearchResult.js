import ListOfGifs from "components/ListOfGifs";

export default function SearchResult({ params }) {
  params.title = `${params.keyword} GIFs`;
  return (
    <div className="main">
      <ListOfGifs params={params}></ListOfGifs>
    </div>
  );
}
