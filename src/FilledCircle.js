import React from "react";

export const FilledCircle = ({ slideNumber }) => {
  return (
    <div
      className="filled-circle"
      aria-label={`${slideNumber} of 3`}
      tabIndex="0"
      aria-selected="true"
    ></div>
  );
};
