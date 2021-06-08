import React from "react";
import {
  SiTwitter,
  SiFacebook,
  SiInstagram,
  SiPinterest,
} from "react-icons/si";

export const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer-links">
        <li>Terms and Conditions</li>
        <li>Privacy Policy</li>
      </ul>
      <ul className="social-icons">
        <li>
          <SiTwitter />
        </li>
        <li>
          <SiFacebook />
        </li>
        <li>
          <SiInstagram />
        </li>
        <li>
          <SiPinterest />
        </li>
      </ul>
    </footer>
  );
};
