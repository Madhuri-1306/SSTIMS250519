import React, { useState } from "react";
import Homepage from "./Homepage";
import ColorPicker from "./ColorPicker";

const App = () => {
  const [page, setPage] = useState("home");

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #74ebd5 0%, #ACB6E5 100%)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#333",
        flexDirection: "column",
        padding: "20px",
      }}
    >
      {page === "home" && (
        <>
          <Homepage />
          <button
            style={buttonStyle}
            onClick={() => setPage("color-picker")}
          >
            Go to Color Picker
          </button>
        </>
      )}

      {page === "color-picker" && (
        <>
          <ColorPicker />
          <button
            style={buttonStyle}
            onClick={() => setPage("home")}
          >
            Back to Home
          </button>
        </>
      )}
    </div>
  );
};

const buttonStyle = {
  marginTop: "30px",
  padding: "12px 25px",
  fontSize: "16px",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  backgroundColor: "#4CAF50",
  color: "white",
  boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
  transition: "background-color 0.3s ease",
};

export default App;
