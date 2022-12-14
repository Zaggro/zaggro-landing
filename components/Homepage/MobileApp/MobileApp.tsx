import clsx from 'clsx'
import { motion } from 'framer-motion'
import SectionHeader from 'components/SectionHeader/SectionHeader'
import Typography from 'components/Typography/Typography'
import useViewportSize from 'hooks/useViewportSize'
import styles from './MobileApp.module.scss'

interface MobileAppProps {
  className?: string
}

const tokenUtils = [
  {
    image: '/images/token-utils/best-price.png',
    title: 'Best Prices in DeFi',
    description:
      'Access ZAGGRO DEX aggregator services to trade your crypto assets at the best market rates.',
  },
  {
    image: '/images/token-utils/coin-zgro.png',
    title: 'ZAGGRO Staking Program',
    description:
      'Stake the ZGRO token at 10% APY without lockup, at zero protocol fees.',
  },
  {
    image: '/images/token-utils/vote.png',
    title: 'DAO Program',
    description:
      'Every staked ZGRO token counts as one vote in the ZAGGRO DAO Program. Participate in the voting and get rewarded!',
  },
]

function MobileApp({ className }: MobileAppProps) {
  const { isTablet } = useViewportSize()
  return (
    <motion.section className={clsx(styles.root, className)}>
      <SectionHeader
        title="ZAGGRO on Mobile"
        description="Innovational decentralized trading & crypto management application."
      />
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.52, once: true }}
          className={styles.mobileAppPreview}
        >
          <img
            src="/images/misc/mobile-app-prev@2.png"
            alt="Preview of mobile app"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.4, once: true }}
        >
          <Typography variant="h5" tag="h3" className={styles.title}>
            ZAGGRO Wherever You Go
          </Typography>
          <Typography tag="p" variant="p-lg" className={styles.description}>
            Our mobile application combines ZAGGRO multichain liquidity
            aggregator with crypto asset management tools to have all required
            features in one app.
            <br />
            <br />
            Beyond trading at prime rates with the lowest slippage you can buy,
            store and manage your crypto assets across multiple networks
            anywhere in the world.
            <br />
            <br />
            Audited by the most reputable companies in crypto, the ZAGGRO mobile
            application allows you to manage your crypto asset in a complete non
            custodial way.
            <br />
            <br />
            Your keys = Your coins
          </Typography>
          <img
            src="/images/misc/mobile-app-stores.png"
            alt="Mobile app on App Store and Google Play coming soon!"
          />
        </motion.div>
      </div>
      <motion.ul
        className={styles.tokenUtils}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {tokenUtils.map(({ image, title, description }) => (
          <li key={title} className={styles.tokenUtil}>
            <div className={styles.utilImageContainer}>
              <img src={image} alt={title} className={styles.utilImage} />
            </div>
            <Typography variant="h5" tag="h3" className={styles.utilTitle}>
              {title}
            </Typography>
            <Typography
              tag="p"
              variant="p-lg"
              className={styles.utilDescription}
            >
              {description}
            </Typography>
          </li>
        ))}
      </motion.ul>
    </motion.section>
  )
}

export default MobileApp
