import clsx from 'clsx'
import SectionHeader from 'components/SectionHeader/SectionHeader'
import useViewportSize from 'hooks/useViewportSize'
import styles from './Calculator.module.scss'

interface CalculatorProps {
  className?: string
}

function Calculator({ className }: CalculatorProps) {
  const { isPhablet } = useViewportSize()

  return (
    <section className={clsx(styles.root, className)}>
      <SectionHeader title="ZAGGRO gives you MORE" />
      <div className={styles.imageContainer}>
        {isPhablet ? (
          <img
            src="/images/screenshots/calculator-desktop@2.png"
            alt="Preview of the ZAGGRO calculator"
            className={styles.desktopImage}
          />
        ) : (
          <img
            src="/images/screenshots/calculator-mobile@2.png"
            alt="Preview of the ZAGGRO calculator"
            className={styles.mobileImage}
          />
        )}
      </div>
    </section>
  )
}

export default Calculator
