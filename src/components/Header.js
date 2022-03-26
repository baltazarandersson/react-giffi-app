import SearchGifs from "./SearchGifs";
import "./Header.css";
import { Link } from "wouter";
import { useThemeUpdate } from "context/ThemeContext";
import "./Switch.css";

export default function Header() {
  const toggleTheme = useThemeUpdate();

  return (
    <div className="header">
      <div>
        <Link className="logo" to="/">
          GIFFI
        </Link>
      </div>
      <SearchGifs></SearchGifs>
      <div>
        <label className="switch" htmlFor="checkbox">
          <input type="checkbox" id="checkbox" onChange={toggleTheme} />
          <div className="slider round"></div>
        </label>
        <div>Login</div>
        <div>Register</div>
      </div>
    </div>
  );
}
