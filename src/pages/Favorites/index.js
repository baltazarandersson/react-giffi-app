import GifsContainer from "components/GifsContainer";
import { useAuthContext } from "context/AuthContext";
import { useSEO } from "hooks/useSEO";
import { Link } from "wouter";
import { useLocation } from "wouter";
import "./index.css";

export function Favorites() {
  const { favs, user } = useAuthContext();
  const [location, setLocation] = useLocation();

  useSEO({
    title: "Favorite GIFs",
    description: "Collection of your favorite GIFs on GIFFI",
  });

  return (
    <>
      {user ? (
        <div id="favorites-wrapper">
          <h2 className="favorites-wrapper__h2">Favorite GIFs</h2>
          <GifsContainer gifs={favs} />
        </div>
      ) : (
        <div id="favorites-wrapper">
          <Link className="favorites-wrapper__h2" to="/login">
            You're not logged in yet, click here to log-in
          </Link>
          <Link className="favorites-wrapper__h2" to="/register">
            or, maybe, you need to register your account here
          </Link>
        </div>
      )}
    </>
  );
}
