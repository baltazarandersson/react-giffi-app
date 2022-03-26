import "./ThemeSwitch.css";
import { useTheme } from "context/ThemeContext";

export default function Switch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <label className="switch">
      <input
        type="checkbox"
        id="checkbox"
        onChange={toggleTheme}
        checked={!theme}
      />
      <span className="slider round"></span>
    </label>
  );
}
