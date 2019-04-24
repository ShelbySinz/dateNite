import React from "react";

export function ListItem({ children }) {
  return <li className="list-group-item flex-column align-items-start">
  <div class="d-flex w-100 justify-content-between">
  {children}
  </div>
  </li>;
}
