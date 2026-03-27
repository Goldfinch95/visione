'use client'

interface HamburgerProps {
  isOpen: boolean
  onToggle: () => void
  isDark?: boolean
}

export function Hamburger({ isOpen, onToggle, isDark = true }: HamburgerProps) {
  const barColor = isDark ? 'bg-white/85' : 'bg-neutral-800'

  return (
    <button
      onClick={onToggle}
      aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
      className="flex flex-col gap-[5px] p-1 cursor-pointer bg-transparent border-none"
    >
      <span
        className={`block w-[22px] h-[1.5px] ${barColor} transition-all duration-300 origin-center ${
          isOpen ? 'translate-y-[6.5px] rotate-45' : ''
        }`}
      />
      <span
        className={`block w-[22px] h-[1.5px] ${barColor} transition-all duration-300 ${
          isOpen ? 'opacity-0 scale-x-0' : ''
        }`}
      />
      <span
        className={`block w-[22px] h-[1.5px] ${barColor} transition-all duration-300 origin-center ${
          isOpen ? '-translate-y-[6.5px] -rotate-45' : ''
        }`}
      />
    </button>
  )
}