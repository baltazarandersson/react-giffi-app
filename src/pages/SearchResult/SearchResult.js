import ListOfGifs from "components/ListOfGifs";

export default function SearchResult({ params }) {
  return (
    <div className="main">
      <ListOfGifs params={params}></ListOfGifs>
    </div>
  );
}
