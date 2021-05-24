import React, { useState, useEffect, useCallback } from "react";
import Destinations from "./data/slideshow-data";

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
          onKeyUp={(e) => {
            return e.key !== "Enter" || moveLeft();
          }}
          aria-label="previous-slide"
          tabIndex="0"
        ></div>
        <div
          className="slideshow-chevron slideshow-chevron-right"
          onClick={moveRight}
          onKeyUp={(e) => {
            return e.key !== "Enter" || moveRight();
          }}
          aria-label="next-slide"
          tabIndex="0"
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
            onKeyUp={(e) => {
              return e.key !== "Enter" || changeSlide(0);
            }}
            aria-label="1 of 3"
            aria-selected={`${currentDestination === 0 ? "true" : "false"}`}
            tabIndex="0"
          ></div>
          <div
            className={`${
              currentDestination === 1 ? "filled-circle" : "empty-circle"
            }`}
            onClick={() => changeSlide(1)}
            onKeyUp={(e) => {
              return e.key !== "Enter" || changeSlide(1);
            }}
            aria-label="2 of 3"
            aria-selected={`${currentDestination === 1 ? "true" : "false"}`}
            tabIndex="0"
          ></div>
          <div
            className={`${
              currentDestination === 2 ? "filled-circle" : "empty-circle"
            }`}
            onClick={() => changeSlide(2)}
            onKeyUp={(e) => {
              return e.key !== "Enter" || changeSlide(2);
            }}
            aria-label="3 of 3"
            aria-selected={`${currentDestination === 2 ? "true" : "false"}`}
            tabIndex="0"
          ></div>
        </div>
      </div>
    </section>
  );
};
