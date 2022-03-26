import SearchGifs from "./SearchGifs";
import "./Header.css";
import { Link } from "wouter";
import Switch from "./Switch";

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
        <Switch></Switch>
        <div className="login">Login</div>
        <div className="register">Register</div>
      </div>
    </div>
  );
}
