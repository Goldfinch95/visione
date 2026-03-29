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
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          transform: isActive ? 'scale(1)' : 'scale(1.05)',
          transition: 'transform 6s ease',
        }}
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
              className="text-center px-6 sm:px-10 flex flex-col items-center w-full"
            >

              {/* Eyebrow */}
              {slide.eyebrow && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="
                    font-raleway uppercase font-light text-white/60 tracking-[3px] mb-3
                    text-xs
                    sm:tracking-[4px] sm:mb-4
                  "
                >
                  {slide.eyebrow}
                </motion.p>
              )}

              {/* Title */}
              {slide.title && (
                <motion.h1
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                  className="
                    font-cormorant font-extralight text-white leading-none tracking-wide mb-4
                    text-5xl
                    sm:text-6xl sm:mb-5
                    lg:text-7xl
                  "
                >
                  {slide.title}
                </motion.h1>
              )}

              {/* Subtitle */}
              {slide.subtitle && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.45, duration: 0.6 }}
                  className="
                    font-raleway uppercase font-light text-white/70 tracking-[1.5px] mb-2
                    text-xs
                    sm:tracking-[2px] sm:mb-2.5
                  "
                >
                  {slide.subtitle}
                </motion.p>
              )}

              {/* Description — oculta en mobile */}
              {slide.description && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.55, duration: 0.6 }}
                  className="
                    hidden sm:block
                    font-raleway text-white/60 font-light leading-relaxed
                    text-sm max-w-sm mb-7
                    lg:max-w-md lg:mb-9
                  "
                >
                  {slide.description}
                </motion.p>
              )}

              {/* CTA */}
              {slide.ctaLabel && (
                <motion.a
                  href={slide.ctaHref}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.65, duration: 0.5 }}
                  className="
                    font-raleway uppercase font-medium text-white tracking-[2px]
                    border border-white/50 bg-white/10 backdrop-blur-sm
                    rounded-[1px] transition-all duration-300 cursor-pointer no-underline
                    text-xs px-7 py-3 mt-5
                    sm:tracking-[2.5px] sm:px-9 sm:py-3.5 sm:mt-0
                    hover:bg-white hover:text-neutral-900 hover:border-white
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