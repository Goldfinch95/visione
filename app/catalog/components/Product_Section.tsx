'use client'

import { BestsellersTrack } from './Product_Track'

export function ProductSection() {
  return (
    <section className="w-full py-10 sm:py-12 lg:py-16 pb-10 sm:pb-12 lg:pb-14 bg-white overflow-hidden">

      {/* Header */}
      <div className="text-center mb-8 sm:mb-10 lg:mb-12 px-6">
        <h2 className="font-cormorant font-normal text-neutral-900 tracking-[0.5px] mb-2 sm:mb-3
          text-3xl sm:text-4xl lg:text-5xl">
          Los más vendidos
        </h2>
        <p className="font-raleway text-sm font-light text-neutral-400 tracking-[0.3px]">
          Descubrí las{' '}
          <strong className="font-medium text-red-700">
            lentes de sol 
          </strong>{' '} y 
          <strong className="font-medium text-red-700">{' '}
             monturas ópticas 
          </strong>{' '}
           preferidas por nuestros clientes.
        </p>
      </div>

      <BestsellersTrack />

    </section>
  )
}