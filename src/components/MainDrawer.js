import "./MainDrawer.css";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import ThemeSwitch from "components/ThemeSwitch";
import TrendingBox from "components/TrendingBox";
import { useDrawer } from "context/DrawerContext";

export default function MainDrawer() {
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
