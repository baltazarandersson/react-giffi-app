import "./ThemeSwitch.css";
import { useThemeUpdate } from "context/ThemeContext";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

export default function Switch() {
  const toggleTheme = useThemeUpdate();
  return (
    <label className="switch">
      <input type="checkbox" id="checkbox" onChange={toggleTheme} />
      <span className="slider round"></span>
    </label>
  );
}
