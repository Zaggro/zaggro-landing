const delayChildren = 0.3
const staggerChildren = 0.2

// Motion (Animate single element)
export const fromBelowMotion = {
  initial: { opacity: 0, y: 100 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { amount: 0.4, once: true },
  // transition: { duration: 0.4 },
}

// Variants (Animate multiple children)
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren,
      staggerChildren,
    },
  },
}

export const fromLeftVariant = {
  container,
  item: {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  },
}

export const fromRightVariant = {
  container,
  item: {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  },
}

export const fromBelowVariant = {
  container,
  item: {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  },
}
