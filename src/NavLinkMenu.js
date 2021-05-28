import React from "react";

export const NavLinkMenu = ({ name, links }) => {
  return (
    <>
      <li className="navbar-btn">
        <button className="dropdown-btn">{name}</button>
        <div className="dropdown-content">
          {links.map((link) => {
            return <p className="dropdown-link">{link}</p>;
          })}
        </div>
      </li>
    </>
  );
};
