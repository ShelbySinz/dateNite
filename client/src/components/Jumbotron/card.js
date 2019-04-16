import React from "react";

function Card({ children }) {
  return (
    <div
      style={{ height: 150, width:200,clear:"both", paddingTop: 65, textAlign: "center" }}
      className="card"
    >
      {children}
    </div>
  );
}

export default Card;