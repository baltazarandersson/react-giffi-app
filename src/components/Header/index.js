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
      pushLocation(`/gif/${keyword}`);
    },
    [pushLocation]
  );

  return (
    <div className="header">
      <div>
        <Link className="logo" to="/">
          GIFFI
        </Link>
      </div>

      <SearchGifs onSumbit={handleChange} />

      <div>
        <div className="desktop-auth">
          <ThemeSwitch></ThemeSwitch>
          <div className="login">Login</div>
          <div className="register">Register</div>
        </div>
        <Drawer></Drawer>
      </div>
    </div>
  );
}
