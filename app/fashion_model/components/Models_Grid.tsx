'use client'

import { ModelCardItem } from './Models_Card'
import { ModelsMobileCarousel } from './Models_Mobile_Carrousel'
import { useScrollReveal } from '../hooks/use_scroll'
import { modelCards } from '../data/card.data'

export function ModelsGrid() {
  const { ref, isVisible } = useScrollReveal(0.15)

  return (
    <>
      {/* Mobile — carrusel fullscreen */}
      <div className="block sm:hidden">
        <ModelsMobileCarousel />
      </div>

      {/* Tablet / Desktop — grid original */}
      <section className="hidden sm:block w-full bg-white">

        <div className="text-center pt-10 pb-8 sm:pt-12 sm:pb-10 lg:pt-16 lg:pb-12 px-4">
          <p className="font-raleway text-[9px] tracking-[3px] uppercase text-red-700 font-medium mb-2.5">
            Colección 2025
          </p>
          <h2 className="font-cormorant text-[28px] sm:text-[32px] lg:text-[36px] font-light text-neutral-900 tracking-wide">
            Encontrá tu estilo
          </h2>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-[2px]"
        >
          {modelCards.map((card, i) => (
            <ModelCardItem
              key={card.id}
              card={card}
              index={i}
              isVisible={isVisible}
            />
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-[2px] mt-3">
          {modelCards.map((card) => (
            <p
              key={card.id}
              className="text-center font-raleway text-[10px] sm:text-[11px] tracking-[0.5px] text-neutral-500 font-light py-2"
            >
              {card.label}
            </p>
          ))}
        </div>

      </section>
    </>
  )
}