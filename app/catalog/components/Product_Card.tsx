'use client'

import Image from 'next/image'
import { BestsellerCard } from '../types/product.types'
import { formatARS } from '../helpers/format'

interface BestsellerCardItemProps {
  card: BestsellerCard
}

export function BestsellerCardItem({ card }: BestsellerCardItemProps) {
  return (
    <div className="flex-shrink-0 w-[280px] cursor-pointer group">
      {/* Image */}
      <div className={`relative w-full aspect-[3/4] overflow-hidden ${card.bgClass}`}>
        <div className="w-full h-full transition-transform duration-[600ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.07] flex items-center justify-center">
          {/* Reemplazá este bloque por tu <Image /> cuando tengas las imágenes */}
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <ellipse cx="23" cy="34" rx="7" ry="7" fill="none" stroke="#b0b5be" strokeWidth="1.8" />
            <ellipse cx="41" cy="34" rx="7" ry="7" fill="none" stroke="#b0b5be" strokeWidth="1.8" />
            <line x1="30" y1="34" x2="34" y2="34" stroke="#b0b5be" strokeWidth="1.8" />
            <line x1="10" y1="32" x2="16" y2="32" stroke="#b0b5be" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="48" y1="32" x2="54" y2="32" stroke="#b0b5be" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Info */}
      <div className="pt-3 px-1">
        <p className="font-raleway text-[11px] font-normal text-neutral-500 tracking-[0.3px] mb-1.5">
          {card.name}
        </p>
        <div className="flex items-center gap-2">
          {card.originalPrice && (
            <span className="font-raleway text-[11px] font-light text-neutral-300 line-through">
              {formatARS(card.originalPrice)}
            </span>
          )}
          {card.originalPrice ? (
            <span className="font-raleway text-[12px] font-semibold text-white bg-[#2a7a52] px-2 py-[2px] tracking-[0.3px]">
              {formatARS(card.price)}
            </span>
          ) : (
            <span className="font-raleway text-[12px] font-medium text-neutral-800">
              {formatARS(card.price)}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}