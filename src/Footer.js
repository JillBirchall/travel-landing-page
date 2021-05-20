import React from "react";
import {
  FaInstagram,
  FaFacebookSquare,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer-links">
        <li>Terms and Conditions</li>
        <li>Privacy Policy</li>
      </ul>
      <ul className="social-icons">
        <li>
          <FaTwitter />
        </li>
        <li>
          <FaFacebookSquare />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaPinterest />
        </li>
      </ul>
    </footer>
  );
};
