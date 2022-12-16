import clsx from 'clsx'
import { motion } from 'framer-motion'
import Button from 'components/Button/Button'
import Typography from 'components/Typography/Typography'
import { fromBelowVariant } from 'constants/framerMotion'
import styles from './Hero.module.scss'

interface HeroProps {
  className?: string
}

function Hero({ className }: HeroProps) {
  return (
    <motion.header
      variants={fromBelowVariant.container}
      initial="hidden"
      animate="visible"
      className={clsx(styles.root, className)}
    >
      <motion.div variants={fromBelowVariant.item}>
        <Typography tag="h1" variant="display-md">
          Best prices in DeFi
          <br />
          <div className={styles.highlighted}>for Traders & dApps</div>
        </Typography>
      </motion.div>
      <motion.div variants={fromBelowVariant.item}>
        <Typography tag="p" variant="p-lg" className={styles.text}>
          We are the leading liquidity aggregator that combines the liquidity of
          DEXs and lending protocols into a comprehensive and secure interface
          and APIs
        </Typography>
      </motion.div>
      <motion.div variants={fromBelowVariant.item}>
        <div className={styles.buttons}>
          <Button className={styles.button} href="#contact">
            Build with us
          </Button>
          <Button
            variant="secondary"
            className={styles.button}
            href="#protocol"
          >
            Explore the protocol
          </Button>
        </div>
      </motion.div>
    </motion.header>
  )
}

export default Hero
