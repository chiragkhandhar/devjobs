import { useContext } from "react";
import { ThemeContext } from "../App";

import "../Styles/Header.css";

// Icons
import { IoSunny } from "react-icons/io5";
import { RiMoonFill } from "react-icons/ri";

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div theme={theme} className="header-container">
      <div className="header-content">
        <p className="site-title">devjobs</p>

        <div className="theme-toggler">
          <IoSunny className="toggle-icons" />
          <label className="switch">
            <input type="checkbox" onClick={toggleTheme} />
            <span className="slider round"></span>
          </label>
          <RiMoonFill className="toggle-icons" />
        </div>
      </div>
    </div>
  );
}

export default Header;
