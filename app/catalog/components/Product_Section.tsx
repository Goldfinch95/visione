'use client'

import { BestsellersTrack } from './Product_Track'

export function ProductSection() {
  return (
    <section className="w-full py-16 pb-14 bg-white overflow-hidden">

      {/* Header */}
      <div className="text-center mb-12 px-6">
        <h2 className="font-cormorant text-[38px] font-normal text-neutral-900 mb-3 tracking-[0.5px]">
          Los más vendidos
        </h2>
        <p className="font-raleway text-[12px] font-light text-neutral-400 tracking-[0.3px]">
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