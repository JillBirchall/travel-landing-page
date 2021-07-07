import React from "react";
import { NavLinkMenu } from "./NavLinkMenu";
import SubMenuLinks from "./data/submenu-data";

export const NavLinks = () => {
  return (
    <div className="navbar-links">
      <ul className="left-navlinks">
        {SubMenuLinks.filter((menu, index) => index < 3).map((link) => {
          return (
            <NavLinkMenu name={link.name} links={link.links} key={link.id} />
          );
        })}
      </ul>
      <ul className="right-navlinks">
        {SubMenuLinks.filter((menu, index) => index >= 3).map((link) => {
          return (
            <NavLinkMenu name={link.name} links={link.links} key={link.id} />
          );
        })}
        <li className="navbar-link">
          <a href="#contact">Enquire</a>
        </li>
        <li className="navbar-link">
          <a href="#about">About</a>
        </li>
      </ul>
    </div>
  );
};
