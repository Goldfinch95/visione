'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCalendarCheck } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-regular-svg-icons'

interface NavIconsProps {
  isDark: boolean
  cartCount?: number
}

export function NavIcons({ isDark, cartCount = 0 }: NavIconsProps) {
  const iconColor = isDark ? 'text-white/80 hover:text-white' : 'text-neutral-600 hover:text-neutral-900'
  const sepColor = isDark ? 'bg-white/20' : 'bg-neutral-200'

  return (
    <div className="flex items-center gap-7">
      <button className={`${iconColor} transition-colors duration-250 cursor-pointer`}>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-sm" />
      </button>

      <div className={`w-px h-4 ${sepColor} transition-colors duration-250`} />

      <button className="bg-red-700 hover:bg-red-800 text-white px-4 py-2.5 text-[9px] tracking-[1.5px] uppercase font-semibold font-raleway flex items-center gap-2 transition-colors duration-200 rounded-sm cursor-pointer">
        <FontAwesomeIcon icon={faCalendarCheck} className="text-xs" />
        PRENDRE RENDEZ-VOUS
      </button>

      <div className="relative cursor-pointer">
        <FontAwesomeIcon
          icon={faEye}
          className={`text-xl ${isDark ? 'text-white/80' : 'text-neutral-600'} transition-colors duration-250`}
        />
        {cartCount >= 0 && (
          <span className="absolute -top-1.5 -right-1.5 bg-red-700 text-white text-[8px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-raleway">
            {cartCount}
          </span>
        )}
      </div>
    </div>
  )
}