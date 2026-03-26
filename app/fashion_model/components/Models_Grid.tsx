'use client'

import { ModelCardItem } from './Models_Card'
import { useScrollReveal } from '../hooks/use_scroll'
import { modelCards } from '../data/card.data'

export function ModelsGrid() {
  const { ref, isVisible } = useScrollReveal(0.15)

  return (
    <section className="w-full py-16 bg-white">

      {/* Header */}
      <div className="text-center mb-12">
        <p className="font-raleway text-[9px] tracking-[3px] uppercase text-red-700 font-medium mb-2.5">
          Colección 2025
        </p>
        <h2 className="font-cormorant text-[36px] font-light text-neutral-900 tracking-wide">
          Encontrá tu estilo
        </h2>
      </div>

      {/* Grid */}
      <div
        ref={ref}
        className="grid grid-cols-4 gap-[2px]"
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

      {/* Labels */}
      <div className="grid grid-cols-4 gap-[2px] mt-3.5">
        {modelCards.map((card) => (
          <p
            key={card.id}
            className="text-center font-raleway text-[11px] tracking-[0.5px] text-neutral-500 font-light py-2"
          >
            {card.label}
          </p>
        ))}
      </div>

    </section>
  )
}