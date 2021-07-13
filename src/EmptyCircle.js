import React from "react";

export const EmptyCircle = ({ slideNumber, changeSlide }) => {
  return (
    <div
      className="empty-circle"
      aria-label={`${slideNumber} of 3`}
      tabIndex="0"
      aria-selected="false"
      onClick={() => changeSlide(slideNumber - 1)}
      onKeyUp={(e) => {
        return e.key !== "Enter" || changeSlide(slideNumber - 1);
      }}
    ></div>
  );
};
