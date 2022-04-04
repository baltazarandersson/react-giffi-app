import { useAuthContext } from "context/AuthContext";
import { useDrawer } from "context/DrawerContext";
import { Link } from "wouter";
import "./index.css";

export function AuthButtons() {
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
            className="auth__login"
            onClick={() => (drawerState ? toggleDrawer() : "")}
            to="/favorites"
          >
            Favorites
          </Link>
          <Link onClick={handleLogOut} className="auth__login" to="/">
            Logout
          </Link>
        </>
      ) : (
        <>
          <Link
            onClick={() => (drawerState ? toggleDrawer() : "")}
            className="auth__login"
            to="/login"
          >
            Login
          </Link>
          <Link
            onClick={() => (drawerState ? toggleDrawer() : "")}
            className="auth__register"
            to="/register"
          >
            Register
          </Link>
        </>
      )}
    </>
  );
}
