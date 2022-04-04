import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useAuthContext } from "context/AuthContext";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useEffect, useState } from "react";

export function Fav({ id, gif }) {
  const { user, favs, setFavs } = useAuthContext();
  const [isFav, setIsFav] = useState(false);

  const userRef = user ? doc(db, `users/${user}`) : null;

  useEffect(() => {
    if (user) {
      if (favs) {
        setIsFav(favs.some((favourite) => favourite.id === id));
      }
    }
  }, [favs, id, user]);

  async function handleClick() {
    if (user) {
      if (isFav) {
        try {
          await updateDoc(userRef, { favorites: arrayRemove(gif) });
          setIsFav(!isFav);
          setFavs((prevFavs) => prevFavs.filter((gif) => gif.id !== id));
        } catch (error) {}
      } else {
        try {
          await updateDoc(userRef, { favorites: arrayUnion(gif) });
          setIsFav(!isFav);
          setFavs([...favs, gif]);
        } catch (error) {
          throw new Error(error);
        }
      }
    } else {
    }
  }

  return (
    <button onClick={handleClick} className="gifs-wrapper__gif__favorite">
      {isFav ? (
        <MdFavorite size={"2rem"} />
      ) : (
        <MdFavoriteBorder size={"2rem"} />
      )}
    </button>
  );
}
