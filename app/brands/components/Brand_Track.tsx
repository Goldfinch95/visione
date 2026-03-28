'use client'

import { BrandItemEl } from './Brand_Item'
import { brandItems } from '../data/brand.data'

export function BrandTrack() {
  const items = [...brandItems, ...brandItems]

  return (
    <div className="overflow-hidden">
      <div
        style={{
          display: 'flex',
          width: 'max-content',
          animation: 'scroll-brands 20s linear infinite',
        }}
        onMouseEnter={e => (e.currentTarget.style.animationPlayState = 'paused')}
        onMouseLeave={e => (e.currentTarget.style.animationPlayState = 'running')}
        onTouchStart={e => (e.currentTarget.style.animationPlayState = 'paused')}
        onTouchEnd={e => (e.currentTarget.style.animationPlayState = 'running')}
      >
        {items.map((brand, i) => (
          <BrandItemEl key={`${brand.id}-${i}`} brand={brand} />
        ))}
      </div>
    </div>
  )
}