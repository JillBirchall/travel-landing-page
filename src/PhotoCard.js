import React from "react";

export const PhotoCard = ({ photoNumber, image, country, altText }) => {
  return (
    <div className={`featured-destination-card photo-${photoNumber}`}>
      <img src={image} alt={altText} className="featured-destination-photo" />
      <h3 className="featured-destination-country">{country}</h3>
    </div>
  );
};
