import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <form>
      <div className="input-field">
        <input {...props} />
      </div>
    </form>

  );
}

export function TextArea(props) {
  return (
    <form>
      <div className="input-field">
        <textarea rows="20" {...props} />
      </div>
    </form>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="waves-effect waves-light btn">
      {props.children}
    </button>
  );
}
