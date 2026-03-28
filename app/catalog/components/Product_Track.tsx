'use client'

import { BestsellerCardItem } from './Product_Card'
import { bestsellerCards } from '../data/product.data'

export function BestsellersTrack() {
  const cards = [...bestsellerCards, ...bestsellerCards]

  return (
    <div className="w-full overflow-hidden">
      <div
        style={{
          display: 'flex',
          gap: '2px',
          width: 'max-content',
          animation: 'scroll-left 20s linear infinite',
        }}
        onMouseEnter={e => (e.currentTarget.style.animationPlayState = 'paused')}
        onMouseLeave={e => (e.currentTarget.style.animationPlayState = 'running')}
        onTouchStart={e => (e.currentTarget.style.animationPlayState = 'paused')}
        onTouchEnd={e => (e.currentTarget.style.animationPlayState = 'running')}
      >
        {cards.map((card, i) => (
          <BestsellerCardItem key={`${card.id}-${i}`} card={card} />
        ))}
      </div>
    </div>
  )
}