import React, { useState, useEffect, useCallback } from "react";
import Destinations from "./data/slideshow-data";
import { EmptyCircle } from "./EmptyCircle";
import { FilledCircle } from "./FilledCircle";

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
        <h2 className="slideshow-text slideshow-country-text">
          {destinations[currentDestination].country}
        </h2>
        <p className="slideshow-text slideshow-description-text">
          {destinations[currentDestination].description}
        </p>
        <button className="slideshow-btn btn">
          View {destinations[currentDestination].country} Tours
        </button>
        <div className="slideshow-circles">
          {currentDestination === 0 ? (
            <FilledCircle slideNumber={1} />
          ) : (
            <EmptyCircle slideNumber={1} changeSlide={changeSlide} />
          )}
          {currentDestination === 1 ? (
            <FilledCircle slideNumber={2} />
          ) : (
            <EmptyCircle slideNumber={2} changeSlide={changeSlide} />
          )}
          {currentDestination === 2 ? (
            <FilledCircle slideNumber={3} />
          ) : (
            <EmptyCircle slideNumber={3} changeSlide={changeSlide} />
          )}
        </div>
      </div>
    </section>
  );
};
