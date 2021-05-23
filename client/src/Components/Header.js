import { useContext } from "react";
import { ThemeContext } from "../App";
import { Link } from "react-router-dom";
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
        <Link to="/" style={{ textDecoration: "none" }}>
          <p className="site-title">devjobs</p>
        </Link>

        <div className="theme-toggler">
          <IoSunny className="toggle-icons" />
          <label className="switch">
            <input
              type="checkbox"
              onClick={toggleTheme}
              checked={theme === "dark" ? true : false}
            />
            <span className="slider round"></span>
          </label>
          <RiMoonFill className="toggle-icons" />
        </div>
      </div>
    </div>
  );
}

export default Header;
