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

      {/* Tablet / Desktop — grid */}
      <section className="hidden sm:block w-full bg-white">

        <div className="text-center pt-10 pb-8 sm:pt-12 sm:pb-10 lg:pt-16 lg:pb-12 px-4">
          <p className="font-raleway text-xs tracking-[3px] uppercase text-red-700 font-medium mb-2.5">
            Colección 2025
          </p>
          <h2 className="font-cormorant font-light text-neutral-900 tracking-wide text-3xl sm:text-4xl lg:text-5xl">
            Encontrá tu estilo
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-[2px]">
          {modelCards.map((card, i) => (
            <ModelCardItem
              key={card.id}
              card={card}
              index={i}
              isVisible={isVisible}
            />
          ))}
        </div>

      </section>
    </>
  )
}