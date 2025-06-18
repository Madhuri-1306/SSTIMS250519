// src/ColorPicker.js
import React, { useState } from "react";
import "./ColorPicker.css";

const ColorPicker = () => {
  const [color, setColor] = useState("#000000");
  const [palette, setPalette] = useState([]);

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const hexToRGB = (hex) => {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgb(${r}, ${g}, ${b})`;
  };

  const copyToClipboard = (value) => {
    navigator.clipboard
      .writeText(value)
      .then(() => alert(`Copied ${value} to clipboard!`))
      .catch(() => alert("Failed to copy!"));
  };

  const addToPalette = () => {
    // Add only if not already in palette
    if (!palette.includes(color)) {
      setPalette([...palette, color]);
    }
  };

  return (
    <div className="color-picker-container">
      <h2>Choose Your Colour 🎨</h2>

      <input
        type="color"
        value={color}
        onChange={handleColorChange}
        className="color-input"
      />

      <p className="color-display">Selected Color: {color}</p>

      <div className="button-group">
        <button onClick={() => copyToClipboard(color)}>Copy HEX</button>
        <button onClick={() => copyToClipboard(hexToRGB(color))}>Copy RGB</button>
        <button onClick={addToPalette}>Add to Palette</button>
      </div>

      {palette.length > 0 && (
        <div className="palette-preview">
          <h3>Color Palette Preview:</h3>
          <div className="palette-grid">
            {palette.map((col, index) => (
              <div
                key={index}
                className="palette-swatch"
                style={{
                  backgroundColor: col,
                  width: "50px",
                  height: "50px",
                  border: "2px solid #ccc",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                title={col}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
