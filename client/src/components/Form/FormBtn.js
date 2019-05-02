import React from "react";

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="waves-effect waves-light btn">
      {props.children}
    </button>
  );
}
