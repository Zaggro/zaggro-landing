import { useEffect } from 'react'

type Event = MouseEvent | TouchEvent
type Ref = React.RefObject<HTMLDivElement>
type Handler = (e: Event) => void

/**
 * A custom hook to simplify using "click outside" functionality
 * @param ref // A container element where, if clicked on, the handler shouldn't be called
 * @param condition // Boolean describing, when should the event handlers be added (e.g when modal is visible)
 * @param handler // A function which is eventually called.
 */
const useOnClickOutside = (
  ref: Ref,
  condition: boolean,
  handler: Handler
): void => {
  useEffect(() => {
    const listener = (event: Event) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return
      }
      handler(event)
    }
    if (condition) {
      document.addEventListener('mouseup', listener)
      document.addEventListener('touchend', listener)
    }
    return () => {
      document.removeEventListener('mouseup', listener)
      document.removeEventListener('touchend', listener)
    }
  }, [ref, handler, condition])
}

export default useOnClickOutside
