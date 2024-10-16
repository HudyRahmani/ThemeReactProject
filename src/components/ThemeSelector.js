import React, { useContext } from "react";
import { ThemeContext } from "../context.js/ThemeContext";
import "./ThemeSelector.css";
import modeIcon from "../assets/bright.svg";

const colors = ["#55f", "#5f5", "#f44"];
export default function ThemeSelector() {
  const { changeColor, changeMode, mode } = useContext(ThemeContext);

  const toggleMode = () => {
    changeMode(mode === "dark" ? "light" : "dark");
  };
  console.log(mode);

  return (
    <div className="ThemeSelector">
      <div className="toggle-mode">
        <img
          onClick={toggleMode}
          src={modeIcon}
          style={{ filter: mode === "dark" ? "invert(100%)" : "invert(0%)" }}
        />
      </div>
      <div className="ThemeButtons">
        {colors &&
          colors.map((color) => (
            <div
              key={color}
              onClick={() => changeColor(color)}
              style={{ background: color }}
            />
          ))}
      </div>
    </div>
  );
}
