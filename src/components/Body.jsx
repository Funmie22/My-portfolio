import React from "react";

const Body = ({ children }) => {
  return (
    <div
      className="bg-gradient-to-r from-purple-800 to-blue-900"
      style={{
        "--first-color": "18, 113, 255",
        "--second-color": "221, 74, 255",
        "--third-color": "100, 220, 255",
        "--fourth-color": "200, 50, 50",
        "--fifth-color": "180, 180, 50",
        "--pointer-color": "140, 100, 255",
        "--size": "80%",
        "--blending-value": "hard-light",
      }}
    >
      {children}
    </div>
  );
};

export default Body;
