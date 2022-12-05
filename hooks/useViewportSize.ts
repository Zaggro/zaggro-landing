import { BREAKPOINTS } from 'constants/breakpoints'
import useWindowDimensions from './useWindowDimensions'

const useViewportSize = (breakpoint?: number) => {
  const { width } = useWindowDimensions()

  if (width) {
    return {
      isMobile: width <= BREAKPOINTS.SM,
      isPhablet: width >= BREAKPOINTS.SM,
      isTablet: width >= BREAKPOINTS.MD,
      isDesktop: width >= BREAKPOINTS.LG,
      isSpecialBreakpoint: breakpoint && width <= breakpoint,
    }
  }

  return {}
}

export default useViewportSize
