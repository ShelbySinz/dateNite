import React from "react";
import "./style.css";

function Jumbotron1({ children }) {
  return (
    <div
      style={{ height: 350, clear: "both", paddingTop: 50, textAlign: "left", paddingBottom: 50}}
      className="card"
    >
      {children}
    </div>
  );
}


export default Jumbotron1;
