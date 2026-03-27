import { useState, useCallback, useEffect } from 'react'

export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [openSub, setOpenSub] = useState<string | null>(null)

  const toggle = useCallback(() => setIsOpen(prev => !prev), [])

  const close = useCallback(() => {
    setIsOpen(false)
    setOpenSub(null)
  }, [])

  const toggleSub = useCallback((id: string) => {
    setOpenSub(prev => (prev === id ? null : id))
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      setOpenSub(null)
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return { isOpen, openSub, toggle, close, toggleSub }
}