import React from "react";
import "./style.css";

function Jumbotron1({ children }) {
  return (
    <div
      style={{ height: 310, clear: "both", paddingTop: 30, textAlign: "left", paddingBottom: 50}}
      className="jumbotron"
    >
      {children}
    </div>
  );
}


export default Jumbotron1;
