import React, { useEffect, useRef } from 'react'

const useTimeout = (
  callback: React.EffectCallback,
  delay: number,
  condition: boolean
): React.MutableRefObject<number | null> => {
  const timeoutRef = useRef<number | null>(null)
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    if (!delay && !condition) return

    timeoutRef.current = window.setTimeout(() => callbackRef.current(), delay)
    // eslint-disable-next-line consistent-return
    return () => window.clearTimeout(timeoutRef.current || 0)
  }, [delay, condition])

  return timeoutRef
}

export default useTimeout
