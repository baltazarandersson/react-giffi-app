import { useState } from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import classNames from "classnames";

import "./ThemeSwitch.css";
import { useTheme } from "context/ThemeContext";

export default function Switch() {
  const { theme, toggleTheme } = useTheme();
  console.log("theme", theme);

  const switchChange = () => {
    toggleTheme(!theme);
  };

  return (
    <label className="switch">
      <input
        type="checkbox"
        id="checkbox"
        onChange={switchChange}
        checked={!theme}
      />
      <span className="slider round"></span>
      <BsFillSunFill
        className={classNames("switch-icon", "switch-sun", {
          "switch-icon-visible": theme,
        })}
      />
      <BsFillMoonFill
        className={classNames("switch-icon", "switch-moon", {
          "switch-icon-visible": !theme,
        })}
      />
    </label>
  );
}
