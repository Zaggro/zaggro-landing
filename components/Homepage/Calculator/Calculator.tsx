import clsx from 'clsx'
import SectionHeader from 'components/SectionHeader/SectionHeader'
import useViewportSize from 'hooks/useViewportSize'
import styles from './Calculator.module.scss'

interface CalculatorProps {
  className?: string
}

function Calculator({ className }: CalculatorProps) {
  const { isTablet } = useViewportSize()

  return (
    <section className={clsx(styles.root, className)}>
      <SectionHeader title="ZAGGRO gives you MORE" />
      <div className={styles.imageContainer}>
        {isTablet ? (
          <img
            src="/images/screenshots/calculator-desktop.png"
            alt="Preview of the ZAGGRO calculator"
          />
        ) : (
          <img
            src="/images/screenshots/calculator-mobile.png"
            alt="Preview of the ZAGGRO calculator"
            className={styles.mobileImage}
          />
        )}
      </div>
    </section>
  )
}

export default Calculator
