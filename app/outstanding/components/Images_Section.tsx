'use client'

import { DuoCardItem } from './Image_Card'
import { useScrollReveal } from '../hooks/use_scroll'
import { duoItems } from '../data/image.data'

export function OutStandingSection() {
  const { ref, isVisible } = useScrollReveal(0.2)

  return (
    <section className="w-full py-20 bg-white">
      <div
        ref={ref}
        className="grid grid-cols-2 gap-[2px]"
      >
        {duoItems.map((item, i) => (
          <DuoCardItem
            key={item.id}
            item={item}
            index={i}
            isVisible={isVisible}
          />
        ))}
      </div>
    </section>
  )
}