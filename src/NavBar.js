import React, { useState } from "react";
import Logo from "./images/Logo-mini.png";
import { NavLinks } from "./NavLinks";
import { MobileMenu } from "./MobileMenu";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav className="navbar">
      <a href="#top" className="navbar-logo">
        <img src={Logo} alt="top of page" />
      </a>
      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <NavLinks />
      {isMenuOpen && <MobileMenu toggleMenu={toggleMenu} />}
    </nav>
  );
};
