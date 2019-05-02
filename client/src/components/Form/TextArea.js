import React from "react";

export function TextArea(props) {
  return (
    <form>
      <div className="input-field">
        <textarea rows="20" {...props} />
      </div>
    </form>
  );
}
