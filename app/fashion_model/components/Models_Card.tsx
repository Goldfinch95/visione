'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ModelCard } from '../types/model.type'

interface ModelCardItemProps {
  card: ModelCard
  index: number
  isVisible: boolean
}

export function ModelCardItem({ card, index, isVisible }: ModelCardItemProps) {
  return (
    <motion.a
      href={card.href}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: index * 0.12,
      }}
      className="relative overflow-hidden cursor-pointer block group aspect-auto h-full sm:aspect-[3/4]"
    >
      <Image
        src={card.image}
        alt={`${card.category} - ${card.title}`}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        sizes="(max-width: 768px) 50vw, 25vw"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-3 pb-4 sm:p-4 sm:pb-5 lg:p-5 lg:pb-6">
        <p className="font-raleway text-xs uppercase text-white/60 font-light tracking-[2px] sm:tracking-[2.5px] mb-1 sm:mb-1.5">
          {card.category}
        </p>
        <h3 className="font-cormorant text-2xl sm:text-3xl font-light text-white tracking-wide">
          {card.title}
        </h3>
      </div>
    </motion.a>
  )
}