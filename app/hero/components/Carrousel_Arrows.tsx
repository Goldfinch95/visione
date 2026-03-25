'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

interface CarouselArrowsProps {
  onPrev: () => void
  onNext: () => void
}

export function CarouselArrows({ onPrev, onNext }: CarouselArrowsProps) {
  return (
    <>
      <button
        onClick={onPrev}
        aria-label="Slide anterior"
        className="
          absolute left-6 top-1/2 -translate-y-1/2 z-20
          text-white/55 hover:text-white
          transition-colors duration-200
          p-3 cursor-pointer bg-transparent border-none
        "
      >
        <FontAwesomeIcon icon={faChevronLeft} className="text-lg" />
      </button>

      <button
        onClick={onNext}
        aria-label="Siguiente slide"
        className="
          absolute right-6 top-1/2 -translate-y-1/2 z-20
          text-white/55 hover:text-white
          transition-colors duration-200
          p-3 cursor-pointer bg-transparent border-none
        "
      >
        <FontAwesomeIcon icon={faChevronRight} className="text-lg" />
      </button>
    </>
  )
}