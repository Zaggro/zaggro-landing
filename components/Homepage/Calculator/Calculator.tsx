/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx'
import Typography from 'components/Typography/Typography'
import useViewportSize from 'hooks/useViewportSize'
import styles from './Calculator.module.scss'

interface CalculatorProps {
  className?: string
}

function Calculator({ className }: CalculatorProps) {
  const { isTablet } = useViewportSize()

  return (
    <section className={clsx(styles.root, className)}>
      <Typography variant="h2" tag="h2" className={styles.title}>
        Zaggro gives you MORE
      </Typography>
      <div className={styles.image}>
        {isTablet ? (
          <img
            src="/images/screenshots/calculator-desktop.png"
            alt="Preview of the Zaggro calculator"
          />
        ) : (
          <img
            src="/images/screenshots/calculator-mobile.png"
            alt="Preview of the Zaggro calculator"
          />
        )}
      </div>
    </section>
  )
}

export default Calculator
