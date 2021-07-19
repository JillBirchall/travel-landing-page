import React from "react";

export const NavLinkMenu = ({ name, links, isMenuOpen, toggleMenu }) => {
  return (
    <>
      <li className="navbar-btn">
        <button
          className="dropdown-btn"
          onClick={(e) => toggleMenu(e, name)}
          onBlur={(e) => toggleMenu(e, name)}
        >
          {name}
        </button>
        <div
          className={`${
            isMenuOpen ? "dropdown-content display" : "dropdown-content"
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
      </li>
    </>
  );
};
