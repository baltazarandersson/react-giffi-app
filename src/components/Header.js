import SearchGifs from "./SearchGifs";
import "./Header.css";
import { Link } from "wouter";
import ThemeSwitch from "./ThemeSwitch";
import MainDrawer from "./MainDrawer";

export default function Header() {
  return (
    <div className="header">
      <div>
        <Link className="logo" to="/">
          GIFFI
        </Link>
      </div>

      <SearchGifs></SearchGifs>

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
