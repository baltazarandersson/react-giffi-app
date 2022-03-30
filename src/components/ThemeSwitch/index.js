import classNames from "classnames";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "context/ThemeContext";
import "./index.css";

export default function Switch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <label className="switch">
      <input
        className="switch__input"
        type="checkbox"
        id="checkbox"
        onChange={() => toggleTheme()}
        checked={!theme}
      />
      <span className="switch__slider switch__slider--round"></span>
      <BsFillSunFill
        className={classNames("switch__icon", "switch__icon__sun", {
          "switch__icon--visible": theme,
        })}
      />
      <BsFillMoonFill
        className={classNames("switch__icon", "switch__icon__moon", {
          "switch__icon--visible": !theme,
        })}
      />
    </label>
  );
}
