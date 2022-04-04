import { Link } from "wouter";
import SearchGifs from "components/SearchGifs";
import ThemeSwitch from "components/ThemeSwitch";
import Drawer from "components/Drawer";
import "./index.css";
import { UserButtons } from "components/UserButtons";

export default function Header() {
  return (
    <div className="header">
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
