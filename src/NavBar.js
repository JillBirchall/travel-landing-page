import React, { useState } from "react";
import Logo from "./images/Logo-mini.png";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <img className="navbar-logo" src={Logo} />
      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className={`${isMenuOpen ? "navbar-links open" : "navbar-links"}`}>
        <ul className="left-navlinks">
          <li className="navbar-link">
            <a href="#">Trip Types</a>
          </li>
          <li className="navbar-link">
            <a href="#">Activities</a>
          </li>
          <li className="navbar-link">
            <a href="#">Inspiration</a>
          </li>
        </ul>
        <ul className="right-navlinks">
          <li className="navbar-link">
            <a href="#">Destinations</a>
          </li>
          <li className="navbar-link">
            <a href="#">Enquire</a>
          </li>
          <li className="navbar-link">
            <a href="#">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
