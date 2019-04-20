import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div
      style={{ textAlign: "center" }}
      className="card"
    >
      <div className="img-container"
      >
        <img alt={props.name} src={props.image} />
      </div>
        {props.children}
    </div>
  );
}

export default Card;