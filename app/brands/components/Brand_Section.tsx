'use client'

import { BrandTrack } from './Brand_Track'

export function BrandSection() {
  return (
    <section className="w-full py-10 sm:py-12 lg:py-14 border-t border-b border-neutral-200/70 bg-white overflow-hidden">

      {/* Header */}
      <div className="text-center mb-7 sm:mb-9">
        <p className="font-raleway text-xs tracking-[4px] uppercase text-red-700 font-medium">
          Marcas oficiales
        </p>
      </div>

      <BrandTrack />

    </section>
  )
}