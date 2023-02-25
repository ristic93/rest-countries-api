import React, { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from "../../context/ThemeContext";
import "./toggle.scss"

const Toggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="toggle" onClick={toggleTheme}>
      {theme === "dark" ? (
        <div>
          <FaSun />
          <span>Light Mode</span>
        </div>
      ) : (
        <div>
          <FaMoon />
          <span>Dark Mode</span>
        </div>
      )}
    </div>
  );
};

export default Toggle;
