'use client'

interface CarouselDotsProps {
  total: number
  current: number
  onGoTo: (index: number) => void
}

export function CarouselDots({ total, current, onGoTo }: CarouselDotsProps) {
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onGoTo(i)}
          aria-label={`Ir al slide ${i + 1}`}
          className={`
            w-[5px] h-[5px] rounded-full border-none cursor-pointer
            transition-all duration-300
            ${i === current ? 'bg-white scale-125' : 'bg-white/35'}
          `}
        />
      ))}
    </div>
  )
}