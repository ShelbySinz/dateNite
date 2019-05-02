import React from "react";

export function Input(props) {
  return (
    <form>
      <div className="input-field">
        <input {...props} />
      </div>
    </form>
  );
}
