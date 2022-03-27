import SearchGifs from "./SearchGifs";
import "./Header.css";
import { Link } from "wouter";
import ThemeSwitch from "./ThemeSwitch";
import MainDrawer from "./MainDrawer";
import { useLocation } from "wouter";
import { useCallback } from "react";

export default function Header() {
  const [path, pushLocation] = useLocation();

  const handleChange = useCallback(
    (keyword) => {
      console.log({ keyword });
      pushLocation(`/gif/${keyword}`);
    },
    [pushLocation]
  );

  return (
    <div className="header">
      <div>
        <Link className="logo" to="/">
          GIFFI
        </Link>
      </div>

      <SearchGifs onSumbit={handleChange} />

      <div>
        <div className="desktop-auth">
          <ThemeSwitch></ThemeSwitch>
          <div className="login">Login</div>
          <div className="register">Register</div>
        </div>
        <MainDrawer></MainDrawer>
      </div>
    </div>
  );
}
