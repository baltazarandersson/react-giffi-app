import { Link } from "wouter";
import SearchGifs from "components/SearchGifs";
import ThemeSwitch from "components/ThemeSwitch";
import Drawer from "components/Drawer";
import "./index.css";
import { UserButtons } from "components/UserButtons";
import classNames from "classnames";
import { useEffect, useState } from "react";

export default function Header() {
  const [prevPosition, setPrevPosition] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      let moving = window.pageYOffset;

      console.log("prevPosition", prevPosition, "moving", moving);

      setVisible(prevPosition > 100 ? prevPosition > moving : true);
      setPrevPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className={classNames("header", { "header--hidden": !visible })}>
      <div className="header__div header__div--1">
        <Link className="header__logo" to="/">
          GIFFI
        </Link>
      </div>

      <div className="header__div--2">
        <SearchGifs />
      </div>

      <div className="header__div header__div--3">
        <div className="header__auth">
          <ThemeSwitch></ThemeSwitch>
          <UserButtons />
        </div>
        <Drawer></Drawer>
      </div>
    </div>
  );
}
