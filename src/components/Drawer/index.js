import { HiMenu, HiOutlineX } from "react-icons/hi";
import { useDrawer } from "context/DrawerContext";
import ThemeSwitch from "components/ThemeSwitch";
import TrendingBox from "components/TrendingBox";
import "./index.css";
import { UserButtons } from "components/UserButtons";

export default function Drawer() {
  const { drawerState, toggleDrawer } = useDrawer();

  function handleClick() {
    toggleDrawer();
  }

  return (
    <div className="drawer">
      <HiMenu className="menu-icon" size={48} onClick={handleClick}></HiMenu>
      <div className={`drawer-menu ${drawerState}`}>
        <div className="drawer-header">
          <HiOutlineX
            className="drawer-icon"
            size={48}
            onClick={handleClick}
          ></HiOutlineX>

          <div className="drawer-menu__auth">
            <ThemeSwitch></ThemeSwitch>
            <UserButtons handleClick={handleClick} />
          </div>
        </div>
        <TrendingBox></TrendingBox>
      </div>
    </div>
  );
}
