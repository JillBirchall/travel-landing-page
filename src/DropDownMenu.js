import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export const DropDownMenu = ({ name, links, toggleSubMenu, isSubMenuOpen }) => {
  return (
    <>
      <button className="dropdown-btn" onClick={() => toggleSubMenu(name)}>
        {name}
        {isSubMenuOpen ? (
          <FaChevronUp className="dropdown-chevron" />
        ) : (
          <FaChevronDown className="dropdown-chevron" />
        )}
      </button>
      <div
        className={`${
          isSubMenuOpen ? "dropdown-content expand" : "dropdown-content"
        }`}
      >
        {links.map((link) => {
          return (
            <p className="dropdown-link" key={link.id}>
              {link.name}
            </p>
          );
        })}
      </div>
    </>
  );
};
