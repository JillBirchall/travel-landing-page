import React from "react";

export const NavLinkMenu = ({ name, links, isMenuOpen, toggleMenu }) => {
  return (
    <>
      <li className="navbar-btn">
        <button
          className="dropdown-btn"
          onClick={() => toggleMenu(name)}
          onBlur={() => toggleMenu(name)}
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
