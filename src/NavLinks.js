import React from "react";
import { NavLinkMenu } from "./NavLinkMenu";
import SubMenuLinks from "./data/submenu-data";

export const NavLinks = () => {
  return (
    <div className="navbar-links">
      <ul className="left-navlinks">
        {SubMenuLinks.filter((menu, index) => index < 3).map((link) => {
          return <NavLinkMenu name={link.name} links={link.links} />;
        })}
      </ul>
      <ul className="right-navlinks">
        {SubMenuLinks.filter((menu, index) => index >= 3).map((link) => {
          return <NavLinkMenu name={link.name} links={link.links} />;
        })}
        <li className="navbar-link">
          <a href="#contactUs">Enquire</a>
        </li>
        <li className="navbar-link">
          <a href="#aboutUs">About</a>
        </li>
      </ul>
    </div>
  );
};
