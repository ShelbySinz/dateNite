import React from "react";
import "./style.css";

function Jumbotron1({ children }) {
  return (
    <div
      style={{ height: 335, clear: "both", paddingTop: 5, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}


export default Jumbotron1;
