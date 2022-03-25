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
        <label class="switch" for="checkbox">
          <input type="checkbox" id="checkbox" />
          <div class="slider round"></div>
        </label>
        <div>Login</div>
        <div>Register</div>
      </div>
    </div>
  );
}
