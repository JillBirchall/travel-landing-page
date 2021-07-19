import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export const NavLinkMenu = ({ name, links, isMenuOpen, toggleMenu }) => {
  return (
    <>
      <li className="navbar-btn">
        <button
          onClick={(e) => toggleMenu(e, name)}
          className={`${
            isMenuOpen ? "selected-nav-link dropdown-btn" : "dropdown-btn"
          }`}
        >
          {name}
          {isMenuOpen ? (
            <FaChevronUp className="navbar-chevron" />
          ) : (
            <FaChevronDown className="navbar-chevron" />
          )}
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
