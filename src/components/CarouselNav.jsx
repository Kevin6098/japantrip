import React from 'react'
import './CarouselNav.css'

/**
 * Carousel navigation buttons (prev/next) with glass-morphism style.
 * Uses inline SVG for icons (Heroicons-style). No inline styles.
 * Parent carousel wrapper should have class "carousel-container" for hover fade-in.
 */
const CarouselNav = ({ onPrev, onNext, stopPropagation = false }) => {
  const handlePrev = (e) => {
    if (stopPropagation) e.stopPropagation()
    onPrev?.()
  }

  const handleNext = (e) => {
    if (stopPropagation) e.stopPropagation()
    onNext?.()
  }

  return (
    <div className="carousel-nav" role="group" aria-label="Carousel navigation">
      <button
        type="button"
        className="carousel-nav__btn carousel-nav__btn--prev"
        onClick={handlePrev}
        aria-label="Previous image"
      >
        <span className="carousel-nav__icon" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </span>
      </button>
      <button
        type="button"
        className="carousel-nav__btn carousel-nav__btn--next"
        onClick={handleNext}
        aria-label="Next image"
      >
        <span className="carousel-nav__icon" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </span>
      </button>
    </div>
  )
}

export default CarouselNav
