import React, { useState } from "react";
import { DropDownMenu } from "./DropDownMenu";
import SubMenuLinks from "./data/submenu-data";

export const MobileMenu = ({ toggleMenu }) => {
  const [currentDropDown, setCurrentDropDown] = useState("");

  function toggleSubMenu(dropDownName) {
    let newDropDown = dropDownName;
    if (newDropDown === currentDropDown) newDropDown = "";
    setCurrentDropDown(newDropDown);
  }

  return (
    <div className="menu-links">
      {SubMenuLinks.map((link) => {
        return (
          <DropDownMenu
            name={link.name}
            links={link.links}
            toggleSubMenu={toggleSubMenu}
            isSubMenuOpen={currentDropDown === link.name ? true : false}
          />
        );
      })}
      <a href="#contact" className="mobile-menu-link" onClick={toggleMenu}>
        Enquire
      </a>
      <a href="#about" className="mobile-menu-link" onClick={toggleMenu}>
        About
      </a>
    </div>
  );
};
