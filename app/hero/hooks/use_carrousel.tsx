import { useState, useEffect, useCallback } from 'react'

export function useCarousel(total: number, autoplayMs = 5000) {
  const [current, setCurrent] = useState(0)

  const goTo = useCallback((index: number) => {
    setCurrent((index + total) % total)
  }, [total])

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  useEffect(() => {
    const timer = setInterval(next, autoplayMs)
    return () => clearInterval(timer)
  }, [next, autoplayMs])

  return { current, goTo, next, prev }
}