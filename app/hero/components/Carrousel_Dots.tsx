'use client'

interface CarouselDotsProps {
  total: number
  current: number
  onGoTo: (index: number) => void
}

export function CarouselDots({ total, current, onGoTo }: CarouselDotsProps) {
  return (
    <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2.5 sm:gap-2 sm:bottom-6">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onGoTo(i)}
          aria-label={`Ir al slide ${i + 1}`}
          className={`
            rounded-full border-none cursor-pointer transition-all duration-300
            w-[6px] h-[6px] sm:w-[5px] sm:h-[5px]
            ${i === current ? 'bg-white scale-125' : 'bg-white/35'}
          `}
        />
      ))}
    </div>
  )
}