import React, { useState } from "react";
import Logo from "./images/Logo-mini.png";
import { DropDownMenu } from "./DropDownMenu";

export const NavBar = () => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState("");

  function toggleSubMenu(subMenuName) {
    if (!isNavMenuOpen) return;
    let newSubMenu = subMenuName;
    if (newSubMenu === openSubMenu) newSubMenu = "";
    setOpenSubMenu(newSubMenu);
  }

  return (
    <nav className="navbar">
      <a href="#top" className="navbar-logo">
        <img src={Logo} alt="top of page" />
      </a>
      <div
        className="hamburger"
        onClick={() => setIsNavMenuOpen(!isNavMenuOpen)}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div
        className={`${isNavMenuOpen ? "navbar-links open" : "navbar-links"}`}
      >
        <ul className="left-navlinks">
          <li className="navbar-btn">
            <DropDownMenu
              name={"Trip Types"}
              links={["Scuba Diving", "Safari", "Polar"]}
              toggleSubMenu={toggleSubMenu}
              isSubMenuOpen={openSubMenu === "Trip Types" ? true : false}
            />
          </li>
          <li className="navbar-btn">
            <DropDownMenu
              name={"Activities"}
              links={["Northern Lights", "Whale Watching", "Star Gazing"]}
              toggleSubMenu={toggleSubMenu}
              isSubMenuOpen={openSubMenu === "Activities" ? true : false}
            />
          </li>
          <li className="navbar-btn">
            <DropDownMenu
              name={"Inspiration"}
              links={["Our Blog", "Top Picks for 2022", "Where to go when"]}
              toggleSubMenu={toggleSubMenu}
              isSubMenuOpen={openSubMenu === "Inspiration" ? true : false}
            />
          </li>
        </ul>
        <ul className="right-navlinks">
          <li className="navbar-btn">
            <DropDownMenu
              name={"Destinations"}
              links={[
                "Europe",
                "Africa",
                "Asia",
                "North America",
                "Central America",
                "South America",
                "Oceania",
                "Indian Ocean",
                "Caribbean",
                "Polar",
              ]}
              toggleSubMenu={toggleSubMenu}
              isSubMenuOpen={openSubMenu === "Destinations" ? true : false}
            />
          </li>
          <li className="navbar-link">
            <a
              href="#contactUs"
              onClick={() => setIsNavMenuOpen(!isNavMenuOpen)}
            >
              Enquire
            </a>
          </li>
          <li className="navbar-link">
            <a href="#aboutUs" onClick={() => setIsNavMenuOpen(!isNavMenuOpen)}>
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
