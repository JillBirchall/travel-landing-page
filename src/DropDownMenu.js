import React from "react";
import { MdExpandMore, MdExpandLess } from "react-icons/md";

export const DropDownMenu = ({ name, links, toggleSubMenu, isSubMenuOpen }) => {
  return (
    <>
      <button className="dropdown-btn" onClick={() => toggleSubMenu(name)}>
        {name}
        {isSubMenuOpen ? (
          <MdExpandLess className="dropdown-chevron" />
        ) : (
          <MdExpandMore className="dropdown-chevron" />
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
