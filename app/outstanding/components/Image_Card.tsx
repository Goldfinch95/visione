'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { DuoItem } from '../types/image.types'

interface DuoCardItemProps {
  item: DuoItem
  index: number
  isVisible: boolean
}

export function DuoCardItem({ item, index, isVisible }: DuoCardItemProps) {
  return (
    <motion.a
      href={item.href}
      initial={{ opacity: 0, y: 32 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{
        duration: 0.65,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: index * 0.12,
      }}
      className="block cursor-pointer"
    >
      {/* Image */}
      <div className="relative w-full aspect-[3/4] sm:aspect-[4/3] overflow-hidden">
        <Image
          src={item.image}
          alt={item.alt}
          fill
          className="object-cover transition-transform duration-700 ease-out hover:scale-[1.04]"
          sizes="(max-width: 640px) 100vw, 50vw"
        />
      </div>

      {/* Label */}
      <p className="text-center font-raleway text-sm tracking-[0.5px] text-neutral-500 font-light pt-3 sm:pt-4">
        {item.label}
      </p>
    </motion.a>
  )
}