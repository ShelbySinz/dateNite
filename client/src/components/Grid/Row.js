import React from "react";

// This Row component lets us use a bootstrap row without having to think about class names
export function Row({ children }) {
  return <div className={'row'}>{children}</div>;
}
