import React, { useState } from "react";
import { NavLinkMenu } from "./NavLinkMenu";
import SubMenuLinks from "./data/submenu-data";

export const NavLinks = () => {
  const [currentMenu, setCurrentMenu] = useState("");

  function toggleMenu(event, menuName) {
    if (menuName === currentMenu) setCurrentMenu("");
    //Close the submenu if it is already open
    else {
      setCurrentMenu(menuName);
      event.target.focus(); //Fix for ios to focus the menu button so it can be blurred later!
    }
  }

  return (
    <div className="navbar-links">
      <ul className="left-navlinks">
        {SubMenuLinks.filter((menu, index) => index < 3).map((link) => {
          return (
            <NavLinkMenu
              name={link.name}
              links={link.links}
              key={link.id}
              isMenuOpen={currentMenu === link.name ? true : false}
              toggleMenu={toggleMenu}
            />
          );
        })}
      </ul>
      <ul className="right-navlinks">
        {SubMenuLinks.filter((menu, index) => index >= 3).map((link) => {
          return (
            <NavLinkMenu
              name={link.name}
              links={link.links}
              key={link.id}
              isMenuOpen={currentMenu === link.name ? true : false}
              toggleMenu={toggleMenu}
            />
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
