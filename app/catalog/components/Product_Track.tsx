'use client'

import { BestsellerCardItem } from './Product_Card'
import { bestsellerCards } from '../data/product.data'

export function BestsellersTrack() {
  // Duplicamos el array para el loop infinito
  const cards = [...bestsellerCards, ...bestsellerCards]

  return (
    <div className="w-full overflow-hidden">
      <div className="flex gap-[2px] w-max animate-scroll-left hover:[animation-play-state:paused]">
        {cards.map((card, i) => (
          <BestsellerCardItem key={`${card.id}-${i}`} card={card} />
        ))}
      </div>
    </div>
  )
}