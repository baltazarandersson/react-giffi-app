import { HiMenu, HiOutlineX } from "react-icons/hi";
import { useDrawer } from "context/DrawerContext";
import ThemeSwitch from "components/ThemeSwitch";
import TrendingBox from "components/TrendingBox";
import "./index.css";

export default function Drawer() {
  const { drawerState, drawerStateUpdate } = useDrawer();

  return (
    <div className="drawer">
      <HiMenu
        className="menu-icon"
        size={48}
        onClick={() => {
          drawerStateUpdate(!drawerState);
        }}
      ></HiMenu>
      <div className={`drawer-menu ${drawerState}`}>
        <div className="drawer-header">
          <HiOutlineX
            className="drawer-icon"
            size={48}
            onClick={() => {
              drawerStateUpdate(!drawerState);
            }}
          ></HiOutlineX>

          <div className="drawer-menu__auth">
            <ThemeSwitch></ThemeSwitch>
            <div className="header__auth__login">Login</div>
            <div className="header__auth__register">Register</div>
          </div>
        </div>
        <TrendingBox></TrendingBox>
      </div>
    </div>
  );
}
