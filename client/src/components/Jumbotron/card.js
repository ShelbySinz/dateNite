import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div
      style={{ textAlign: "center" }}
      className="card"
    >
      <div className="card-image"
      >
        <img alt={props.name} src={props.image} />
      </div>
        {props.children}
    </div>
  );
}

export default Card;