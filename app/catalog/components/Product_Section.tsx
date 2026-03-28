'use client'

import { BestsellersTrack } from './Product_Track'

export function ProductSection() {
  return (
    <section className="w-full py-10 sm:py-12 lg:py-16 pb-10 sm:pb-12 lg:pb-14 bg-white overflow-hidden">

      {/* Header */}
      <div className="text-center mb-8 sm:mb-10 lg:mb-12 px-6">
        <h2 className="font-cormorant text-[28px] sm:text-[32px] lg:text-[38px] font-normal text-neutral-900 mb-2 sm:mb-3 tracking-[0.5px]">
          Los más vendidos
        </h2>
        <p className="font-raleway text-[11px] sm:text-[12px] font-light text-neutral-400 tracking-[0.3px]">
          Descubrí las{' '}
          <strong className="font-medium text-neutral-600">
            lentes de sol y monturas ópticas
          </strong>{' '}
          preferidas por nuestros clientes.
        </p>
      </div>

      <BestsellersTrack />

    </section>
  )
}