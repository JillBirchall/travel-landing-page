import React from "react";
import Tours from "./tour-data";
import { TourCard } from "./TourCard";

export const TourCardContainer = () => {
  return (
    <div className="tour-card-container">
      <h2 className="popular-tours-heading">Popular Tours</h2>
      <div className="tour-cards">
        {Tours.map((tour) => {
          return (
            <TourCard
              key={tour.id}
              country={tour.country}
              name={tour.name}
              price={tour.price}
              duration={tour.duration}
              image={tour.image}
              altText={tour.altText}
              description={tour.description}
            />
          );
        })}
      </div>
    </div>
  );
};
