import { useRef, useCallback } from 'react'

export function useSwipe(onSwipeLeft: () => void, onSwipeRight: () => void, threshold = 50) {
  const startX = useRef<number | null>(null)
  const isDragging = useRef(false)
  const dragStartX = useRef<number | null>(null)

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX
  }, [])

  const onTouchEnd = useCallback((e: React.TouchEvent) => {
    if (startX.current === null) return
    const diff = startX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) >= threshold) {
      diff > 0 ? onSwipeLeft() : onSwipeRight()
    }
    startX.current = null
  }, [onSwipeLeft, onSwipeRight, threshold])

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    isDragging.current = true
    dragStartX.current = e.clientX
  }, [])

  const onMouseUp = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current || dragStartX.current === null) return
    const diff = dragStartX.current - e.clientX
    if (Math.abs(diff) >= threshold) {
      diff > 0 ? onSwipeLeft() : onSwipeRight()
    }
    isDragging.current = false
    dragStartX.current = null
  }, [onSwipeLeft, onSwipeRight, threshold])

  const onMouseLeave = useCallback(() => {
    isDragging.current = false
    dragStartX.current = null
  }, [])

  return { onTouchStart, onTouchEnd, onMouseDown, onMouseUp, onMouseLeave }
}