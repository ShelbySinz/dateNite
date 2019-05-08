import React from "react";
import "./style.css";

function Jumbotron2({ children }) {
  return (
    <div
      style={{ clear: "both", paddingTop: 20, textAlign: "left", paddingBottom: 50}}
      className="jumbotron"
    >
      {children}
    </div>
  );
}


export default Jumbotron2;
