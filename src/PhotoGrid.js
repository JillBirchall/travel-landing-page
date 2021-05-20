import React from "react";
import { PhotoCard } from "./PhotoCard";
import PhotoCards from "./photocard-data";

export const PhotoGrid = () => {
  return (
    <section className="featured-destinations">
      <h2 className="featured-destinations-heading">Featured Destinations</h2>
      <div className="photo-grid">
        {PhotoCards.map((photo, index) => {
          return (
            <PhotoCard
              key={photo.id}
              photoNumber={index + 1}
              country={photo.country}
              altText={photo.altText}
              image={photo.image}
            />
          );
        })}
      </div>
    </section>
  );
};
