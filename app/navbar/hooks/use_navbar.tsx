import { useState, useCallback, useRef, useEffect } from 'react'

export function useNavbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const navRef = useRef<HTMLElement>(null)

  const isMenuOpen = openMenu !== null

  const toggleMenu = useCallback((label: string) => {
    setOpenMenu((prev) => (prev === label ? null : label))
  }, [])

  const closeMenu = useCallback(() => {
    setOpenMenu(null)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        closeMenu()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [closeMenu])

  return { openMenu, isMenuOpen, toggleMenu, closeMenu, navRef }
}