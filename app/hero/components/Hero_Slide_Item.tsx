'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { HeroSlide as HeroSlideType } from '../types/hero.types'

interface HeroSlideProps {
  slide: HeroSlideType
  isActive: boolean
}

export function HeroSlideItem({ slide, isActive }: HeroSlideProps) {
  const hasContent = slide.title || slide.eyebrow

  return (
    <div
      className={`absolute inset-0 transition-opacity duration-700 ${
        isActive ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Video background */}
      <video
        src={slide.videoUrl}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105"
        style={{ transform: isActive ? 'scale(1)' : 'scale(1.05)', transition: 'transform 6s ease' }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      {hasContent && isActive && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <AnimatePresence>
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="text-center px-10 flex flex-col items-center"
            >
              {slide.eyebrow && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="font-raleway text-[10px] tracking-[4px] uppercase text-white/60 font-light mb-4"
                >
                  {slide.eyebrow}
                </motion.p>
              )}

              {slide.title && (
                <motion.h1
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                  className="font-cormorant text-[68px] font-extralight text-white leading-none tracking-wide mb-5"
                >
                  {slide.title}
                </motion.h1>
              )}

              {slide.subtitle && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.45, duration: 0.6 }}
                  className="font-raleway text-[12px] tracking-[2px] uppercase text-white/70 font-light mb-2.5"
                >
                  {slide.subtitle}
                </motion.p>
              )}

              {slide.description && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.55, duration: 0.6 }}
                  className="font-raleway text-[13px] text-white/60 font-light max-w-md leading-relaxed mb-9"
                >
                  {slide.description}
                </motion.p>
              )}

              {slide.ctaLabel && (
                <motion.a
                  href={slide.ctaHref}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.65, duration: 0.5 }}
                  className="
                    font-raleway text-[10px] tracking-[2.5px] uppercase font-medium text-white
                    border border-white/50 bg-white/10 backdrop-blur-sm
                    px-9 py-3.5 rounded-[1px]
                    hover:bg-white hover:text-neutral-900 hover:border-white
                    transition-all duration-300 cursor-pointer
                  "
                >
                  {slide.ctaLabel}
                </motion.a>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      )}
    </div>
  )
}