import { useEffect } from 'react'

/**
 * A custom hook to simplify adding event listeners for a key press
 * @param key // a `KeyboardEvent` interface's `key` property (e.g `'Escape'`)
 * @param condition // Boolean describing, when should the event listener be added (e.g when modal is visible)
 * @param handler // A function which is eventually called. For optimization it's advised to wrap the handler in useCallback before passing it into this hook
 */
const useKeyPress = (
  key: string,
  condition: boolean,
  handler: (e: KeyboardEvent) => void
): void => {
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === key) {
        handler(e)
      }
    }

    if (condition) {
      window.addEventListener('keydown', handleKeyPress)
    }

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [condition, handler, key])
}

export default useKeyPress
