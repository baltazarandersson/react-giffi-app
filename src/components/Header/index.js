import { Link, useLocation } from "wouter";
import { useCallback } from "react";
import SearchGifs from "components/SearchGifs";
import ThemeSwitch from "components/ThemeSwitch";
import Drawer from "components/Drawer";
import "./index.css";

export default function Header() {
  const [path, pushLocation] = useLocation();

  const handleChange = useCallback(
    (keyword) => {
      console.log({ keyword });
      pushLocation(`/search/${keyword}`);
    },
    [pushLocation]
  );

  return (
    <div className="header">
      <div className="header__div header__div--1">
        <Link className="header__logo" to="/">
          GIFFI
        </Link>
      </div>

      <div className="header__div--2">
        <SearchGifs onSumbit={handleChange} />
      </div>

      <div className="header__div header__div--3">
        <div className="header__auth">
          <ThemeSwitch></ThemeSwitch>
          <div className="header__auth__login">Login</div>
          <div className="header__auth__register">Register</div>
        </div>
        <Drawer></Drawer>
      </div>
    </div>
  );
}
