import { useState } from "react";
import "./MainDrawer.css";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import ThemeSwitch from "components/ThemeSwitch";
import TrendingBox from "components/TrendingBox";
export default function MainDrawer() {
  const [showDrawer, updateShowDrawer] = useState(false);

  return (
    <div className="drawer">
      <HiMenu
        className="menu-icon"
        size={48}
        onClick={() => {
          updateShowDrawer(!showDrawer);
        }}
      ></HiMenu>
      <div className={`drawer-menu ${showDrawer}`}>
        <div className="drawer-header">
          <HiOutlineX
            className="drawer-icon"
            size={48}
            onClick={() => {
              updateShowDrawer(!showDrawer);
            }}
          ></HiOutlineX>

          <div className="mobile-auth">
            <ThemeSwitch></ThemeSwitch>
            <div className="login">Login</div>
            <div className="register">Register</div>
          </div>
        </div>
        <TrendingBox></TrendingBox>
      </div>
    </div>
  );
}
