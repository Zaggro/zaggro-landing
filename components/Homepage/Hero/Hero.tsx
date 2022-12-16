import clsx from 'clsx'
import { motion } from 'framer-motion'
import Button from 'components/Button/Button'
import Typography from 'components/Typography/Typography'
import styles from './Hero.module.scss'

interface HeroProps {
  className?: string
}

function Hero({ className }: HeroProps) {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <motion.header
      variants={container}
      initial="hidden"
      animate="visible"
      className={clsx(styles.root, className)}
    >
      <motion.div variants={item}>
        <Typography tag="h1" variant="display-md">
          Best prices in DeFi
          <br />
          <div className={styles.highlighted}>for Traders & dApps</div>
        </Typography>
      </motion.div>
      <motion.div variants={item}>
        <Typography tag="p" variant="p-lg" className={styles.text}>
          We are the leading liquidity aggregator that combines the liquidity of
          DEXs and lending protocols into a comprehensive and secure interface
          and APIs
        </Typography>
      </motion.div>
      <motion.div variants={item}>
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
