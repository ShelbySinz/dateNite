import React from "react";

export function Input(props) {
  return (
    <div className="form">
      <input className="form-control" {...props} />
    </div>
  );
}
