'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from '../types/navbar.types'

interface NavItemProps {
  link: NavLink
  isMenuOpen: boolean
  openMenu: string | null
  onToggle: (label: string) => void
  isDark: boolean
}

export function NavItem({ link, openMenu, onToggle, isDark }: NavItemProps) {
  const [hovered, setHovered] = useState(false)
  const hasDropdown = !!link.megaMenu
  const isActive = openMenu === link.label

  const textColor = isDark
    ? 'text-white/90'
    : 'text-neutral-800'

  if (hasDropdown) {
    return (
      <button
        onClick={() => onToggle(link.label)}
        className={`
          flex items-center gap-1.5 text-base tracking-[1.5px] font-medium uppercase
          cursor-pointer select-none whitespace-nowrap transition-colors duration-250
          ${textColor}
        `}
      >
        {link.label}
        <motion.span
          animate={{ rotate: isActive ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="opacity-70"
        >
          <FontAwesomeIcon icon={faChevronDown} className="text-base" />
        </motion.span>
      </button>
    )
  }

  return (
    <a
      href={link.href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        relative text-base tracking-[1.5px] font-medium uppercase
        whitespace-nowrap pb-0.5 transition-colors duration-250
        ${textColor}
      `}
    >
      {link.label}
      <AnimatePresence>
        {hovered && (
          <motion.span
            className={`absolute bottom-0 left-0 h-px ${isDark ? 'bg-white' : 'bg-neutral-800'}`}
            initial={{ width: 0, left: 0 }}
            animate={{ width: '100%', left: 0 }}
            exit={{ width: 0, left: '50%' }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          />
        )}
      </AnimatePresence>
    </a>
  )
}