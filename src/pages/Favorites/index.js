import GifsContainer from "components/GifsContainer";
import { useAuthContext } from "context/AuthContext";
import "./index.css";

export function Favorites() {
  const { favs } = useAuthContext();

  return (
    <div id="favorites-wrapper">
      <GifsContainer gifs={favs} />
    </div>
  );
}
