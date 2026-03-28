'use client'

import { BrandItem } from '../types/brand.types'

const styleMap: Record<BrandItem['style'], string> = {
  serif:        'font-cormorant text-[15px] sm:text-[17px] font-light tracking-[4px]',
  sans:         'font-raleway text-[10px] sm:text-[11px] font-normal tracking-[3.5px]',
  'sans-light': 'font-raleway text-[10px] sm:text-[11px] font-light tracking-[4px]',
}

export function BrandItemEl({ brand }: { brand: BrandItem }) {
  return (
    <div className="flex-shrink-0 w-[140px] sm:w-[160px] lg:w-[180px] h-[72px] sm:h-[80px] lg:h-[88px] flex items-center justify-center border-r border-neutral-200/70 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-[filter,opacity] duration-400 cursor-pointer">
      <span className={`${styleMap[brand.style]} uppercase text-neutral-900`}>
        {brand.name}
      </span>
    </div>
  )
}