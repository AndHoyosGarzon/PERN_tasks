import React from "react";

export function Label({ children, htmlFor }) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-medium text-gray-400 "
    >
      {children}
    </label>
  );
}
