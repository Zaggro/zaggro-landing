import clsx from 'clsx'
import { motion } from 'framer-motion'
import CardBase from 'components/CardBase/CardBase'
import SectionHeader from 'components/SectionHeader/SectionHeader'
import Typography from 'components/Typography/Typography'
import { fromRightVariant } from 'constants/framerMotion'
import AssetManager from 'public/svgs/institutional-partners/asset-manager.svg'
import Bank from 'public/svgs/institutional-partners/bank.svg'
import Bots from 'public/svgs/institutional-partners/bots.svg'
import Custodian from 'public/svgs/institutional-partners/custodian.svg'
import Lending from 'public/svgs/institutional-partners/lending.svg'
import MarketMaker from 'public/svgs/institutional-partners/market-maker.svg'
import styles from './InstitutionalPartners.module.scss'

interface InstitutionalPartnersProps {
  className?: string
  id?: string
}

const cards = [
  {
    icon: <Custodian />,
    title: 'Custodians',
    text: 'Offer the best market swap rates to your clients in your wallet.',
  },
  {
    icon: <MarketMaker />,
    title: 'Market Makers',
    text: 'Participate in our exclusive RFQ Pools to bid for the order flow.',
  },
  {
    icon: <Bots />,
    title: 'Brokers / Bots',
    text: 'Optimize the execution costs and minimize the slippage by integrating with ZAGGRO.',
  },
  {
    icon: <Bank />,
    title: 'Banks',
    text: 'Offer liquidity in our RFQ model or offer fixed/variable yields to your clients.',
  },
  {
    icon: <Lending />,
    title: 'Lenders',
    text: 'Add swap functions to your lending capabilities to keep your users engaged to your dApp.',
  },
  {
    icon: <AssetManager />,
    title: 'Asset Managers',
    text: 'Offer liquidity in the RFQ model and swap assets at the best rate.',
  },
]

function InstitutionalPartners({ className, id }: InstitutionalPartnersProps) {
  return (
    <section className={clsx(styles.root, className)} id={id}>
      <SectionHeader
        title="Our Institutional Partners"
        description="We built ZAGGRO with the focus on financial institutions and developers. Our partners can smoothly offer DeFi services to their users and clients using the API."
      />
      <motion.ul
        className={styles.cards}
        variants={fromRightVariant.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {cards.map(({ icon, title, text }) => (
          <motion.li
            key={title}
            className={styles.cardItem}
            variants={fromRightVariant.item}
          >
            <CardBase
              key={title}
              icon={icon}
              contentClassName={styles.cardContent}
            >
              <Typography variant="h5" tag="h3" className={styles.cardTitle}>
                {title}
              </Typography>
              <Typography tag="p" variant="p-lg">
                {text}
              </Typography>
            </CardBase>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  )
}

export default InstitutionalPartners
