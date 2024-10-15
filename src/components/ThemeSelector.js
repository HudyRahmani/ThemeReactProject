import React, { useContext } from "react";
import { ThemeContext } from "../context.js/ThemeContext";
import './ThemeSelector.css'

const colors = ["#55f", "#5f5", "#f44"];
export default function ThemeSelector() {
    const {changeColor} = useContext(ThemeContext)
  return (
    <div className="ThemeSelector">
      <div className="ThemeButtons">
        {colors && colors.map(color => (
            <div 
                key={color}
                onClick={() => changeColor(color)}
                style={{background:color}}
            />
        ))}
      </div>
    </div>
  );
}
