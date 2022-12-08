import clsx from 'clsx'
import Button from 'components/Button/Button'
import Typography from 'components/Typography/Typography'
import styles from './Hero.module.scss'

interface HeroProps {
  className?: string
}

function Hero({ className }: HeroProps) {
  return (
    <header className={clsx(styles.root, className)}>
      <Typography tag="h1" variant="display-md">
        Best prices in DeFi
        <br />
        <div className={styles.highlighted}>for Traders & dApps</div>
      </Typography>
      <Typography tag="p" variant="p-lg" className={styles.text}>
        We are the leading liquidity aggregator that combines the liquidity of
        DEXs and lending protocols into a comprehensive and secure interface and
        APIs
      </Typography>
      <div className={styles.buttons}>
        <Button className={styles.button} href="#contact">
          Build with us
        </Button>
        <Button variant="secondary" className={styles.button} href="#protocol">
          Explore the protocol
        </Button>
      </div>
    </header>
  )
}

export default Hero
