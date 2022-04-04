import { useAuthContext } from "context/AuthContext";
import { useDrawer } from "context/DrawerContext";
import { Link } from "wouter";
import "./index.css";
import { MdCollectionsBookmark } from "react-icons/md";
export function UserButtons() {
  const { drawerState, toggleDrawer } = useDrawer();
  const { user, logOut } = useAuthContext();

  function handleLogOut() {
    toggleDrawer();
    logOut();
  }

  return (
    <>
      {user ? (
        <>
          <Link
            className="user__favorites"
            onClick={() => (drawerState ? toggleDrawer() : "")}
            to="/favorites"
          >
            <MdCollectionsBookmark />
            <p className="user__favorites__p">Favorites</p>
            <p className="user__favorites__p--mobile">Favs</p>
          </Link>
          <Link onClick={handleLogOut} className="user__login" to="/">
            Logout
          </Link>
        </>
      ) : (
        <>
          <Link
            onClick={() => (drawerState ? toggleDrawer() : "")}
            className="user__login"
            to="/login"
          >
            Login
          </Link>
          <Link
            onClick={() => (drawerState ? toggleDrawer() : "")}
            className="user__register"
            to="/register"
          >
            Register
          </Link>
        </>
      )}
    </>
  );
}
