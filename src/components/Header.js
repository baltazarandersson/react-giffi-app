import SearchGifs from "./SearchGifs";
import "./Header.css";
import { Link } from "wouter";
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
        <div>Login</div>
        <div>Register</div>
      </div>
    </div>
  );
}
