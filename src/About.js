import React from "react";
import Logo from "./images/Logo.png";

export const About = () => {
  return (
    <section className="about-us-container">
      <img src={Logo} alt="Logo" className="about-us-logo" />
      <div className="about-us">
        <h2 className="about-us-heading">About Us</h2>
        <p className="about-us-text">
          We are an adventure travel company offering action packed tours and
          custom itineraries for a wide range of exciting experiences from scuba
          diving to polar cruises, safaris to mountain climbing and so much
          more!
        </p>
      </div>
    </section>
  );
};
