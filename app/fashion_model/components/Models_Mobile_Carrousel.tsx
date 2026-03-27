'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { modelCards } from '../data/card.data'
import { useSwipe } from '../hooks/use_swipe'

export function ModelsMobileCarousel() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [hintVisible, setHintVisible] = useState(true)
  const total = modelCards.length

  const goTo = useCallback((index: number, dir: number) => {
    setDirection(dir)
    setCurrent((index + total) % total)
    setHintVisible(false)
  }, [total])

  const next = useCallback(() => goTo(current + 1, 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1, -1), [current, goTo])

  const { onTouchStart, onTouchEnd, onMouseDown, onMouseUp, onMouseLeave } = useSwipe(next, prev)

  const card = modelCards[current]

  const variants = {
    enter:  (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit:   (dir: number) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
  }

  return (
    <section className="w-full flex flex-col bg-white" style={{ height: '100svh' }}>

      {/* Header */}
      <div className="text-center px-4 pt-6 pb-5 bg-white flex-shrink-0">
        <p className="font-raleway text-[9px] tracking-[3px] uppercase text-red-700 font-medium mb-2">
          Colección 2025
        </p>
        <h2 className="font-cormorant text-[28px] font-light text-neutral-900 tracking-wide leading-none">
          Encontrá tu estilo
        </h2>
      </div>

      {/* Carousel */}
      <div
        className="relative flex-1 overflow-hidden cursor-grab active:cursor-grabbing"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
      >
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={card.id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute inset-0"
          >
            <Image
              src={card.image}
              alt={`${card.category} - ${card.title}`}
              fill
              className="object-cover select-none"
              sizes="100vw"
              priority={current === 0}
              draggable={false}
            />

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Card text */}
            <div className="absolute bottom-14 left-0 right-0 px-6">
              <p className="font-raleway text-[8px] tracking-[2.5px] uppercase text-white/60 font-light mb-1.5">
                {card.category}
              </p>
              <h3 className="font-cormorant text-[38px] font-light text-white tracking-wide leading-none">
                {card.title}
              </h3>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Swipe hint */}
        <AnimatePresence>
          {hintVisible && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap font-raleway text-[8px] tracking-[2px] uppercase text-white/30 font-light pointer-events-none"
            >
              Deslizá para ver más
            </motion.p>
          )}
        </AnimatePresence>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
          {modelCards.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? 1 : -1)}
              aria-label={`Ir a slide ${i + 1}`}
              className={`
                w-[5px] h-[5px] rounded-full border-none cursor-pointer transition-all duration-300
                ${i === current ? 'bg-white scale-125' : 'bg-white/35'}
              `}
            />
          ))}
        </div>
      </div>

    </section>
  )
}