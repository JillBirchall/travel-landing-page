import React from "react";

export const TourCard = ({
  country,
  name,
  image,
  duration,
  price,
  altText,
  description,
}) => {
  return (
    <aticle className="tour-card">
      <div className="tour-image">
        <img src={image} alt={altText} className="tour-photo" />
        <h3 className="tour-country">{country}</h3>
        <h4 className="tour-name">{name}</h4>
      </div>
      <div className="tour-details">
        <h5 className="tour-price">From £{price}</h5>
        <h5 className="tour-duration">{duration} nights</h5>
      </div>
      <p className="tour-description">{description}</p>
      <button className="view-tour-btn btn">View Tour</button>
    </aticle>
  );
};
