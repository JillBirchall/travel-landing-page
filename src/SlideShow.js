import React, { useState, useEffect, useCallback } from "react";
import Destinations from "./slideshow-data";

export const SlideShow = () => {
  const [currentDestination, setCurrentDestination] = useState(0);
  const destinations = [...Destinations];

  const moveRight = useCallback(() => {
    let newSlide;
    currentDestination === 2
      ? (newSlide = 0)
      : (newSlide = currentDestination + 1);
    setCurrentDestination(newSlide);
  }, [currentDestination]);

  function changeSlide(newSlide) {
    if (newSlide === currentDestination) return;
    setCurrentDestination(newSlide);
  }

  function moveLeft() {
    let newSlide;
    currentDestination === 0
      ? (newSlide = 2)
      : (newSlide = currentDestination - 1);
    setCurrentDestination(newSlide);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      moveRight();
    }, 5000);
    return () => clearInterval(interval);
  }, [moveRight]);

  return (
    <section className="slideshow-container">
      <div
        className="slideshow"
        style={{
          backgroundImage: `url(${destinations[currentDestination].image})`,
        }}
      >
        <div
          className="slideshow-chevron slideshow-chevron-left"
          onClick={moveLeft}
        ></div>
        <div
          className="slideshow-chevron slideshow-chevron-right"
          onClick={moveRight}
        ></div>
        <h1 className="slideshow-text slideshow-country-text">
          {destinations[currentDestination].country}
        </h1>
        <p className="slideshow-text slideshow-description-text">
          {destinations[currentDestination].description}
        </p>
        <button className="slideshow-btn btn">
          View {destinations[currentDestination].country} Tours
        </button>
        <div className="slideshow-circles">
          <div
            className={`${
              currentDestination === 0 ? "filled-circle" : "empty-circle"
            }`}
            onClick={() => changeSlide(0)}
          ></div>
          <div
            className={`${
              currentDestination === 1 ? "filled-circle" : "empty-circle"
            }`}
            onClick={() => changeSlide(1)}
          ></div>
          <div
            className={`${
              currentDestination === 2 ? "filled-circle" : "empty-circle"
            }`}
            onClick={() => changeSlide(2)}
          ></div>
        </div>
      </div>
    </section>
  );
};
