import clsx from 'clsx'
import CardBase from 'components/CardBase/CardBase'
import Typography from 'components/Typography/Typography'
import API from 'public/svgs/protocol/api.svg'
import Liquidity from 'public/svgs/protocol/liquidity.svg'
import MultiChain from 'public/svgs/protocol/multi-chain.svg'
import RFQ from 'public/svgs/protocol/onchain-rfq.svg'
import Shield from 'public/svgs/protocol/secure-and-audited.svg'
import Yield from 'public/svgs/protocol/yield-optimizing.svg'
import styles from './Protocol.module.scss'

interface ProtocolProps {
  className?: string
}

const features = [
  {
    icon: <API />,
    title: 'Robust API',
    text: 'We have a public library available for smooth integration into dApp and Wallet. Our corporate customers can request a dedicated API key for superior reliability.',
  },
  {
    icon: <Liquidity />,
    title: 'Advanced Liquidity',
    text: 'We integrated 20+ protocols across multiple chains on L1 and L2. Additionally, we complement open liquidity with exclusive pricing from the best market makers.',
  },
  {
    icon: <MultiChain />,
    title: 'Multichain',
    text: 'ZAGGRO protocol is available on multiple blockchains. We currently support SUI and Avalanche. We scale blockchain integrations by volume & activity priority.',
  },
  {
    icon: <RFQ />,
    title: 'Onchain RFQ',
    text: 'ZAGGRO pool is an on-chain “Request For Quotes” model. We aggregate real-time quotes from KYC verified and trusted market makers, offering liquidity to all traders.',
  },
  {
    icon: <Yield />,
    title: 'Yield Optimizer',
    text: 'Smart contract external and independent audits are an essential step to improve the security of smart contracts to be a step ahead of hackers.',
  },
  {
    icon: <Shield />,
    title: 'Secured & Audited',
    text: 'Smart contract external and independent audits are an essential step to improve the security of smart contracts to be a step ahead of hackers.',
  },
]

function Protocol({ className }: ProtocolProps) {
  return (
    <div className={clsx(styles.root, className)}>
      <Typography variant="h2" tag="h2" className={styles.title}>
        About ZAGGRO Protocol
      </Typography>
      <Typography tag="p" variant="p-lg" className={styles.text}>
        Our mission is to thrive DeFi participation to the next level by
        offering secure, intelligent and optimized trading solutions for
        individuals and institutional traders to tap effortlessly into the
        fragmented liquidity pools.
      </Typography>
      <div className={styles.cards}>
        {features.map(({ icon, title, text }) => (
          <CardBase
            key={title}
            icon={icon}
            className={styles.card}
            contentClassName={styles.cardContent}
          >
            <Typography variant="h3" tag="h3" className={styles.cardTitle}>
              {title}
            </Typography>
            <Typography tag="p" variant="p-lg" className={styles.cardText}>
              {text}
            </Typography>
          </CardBase>
        ))}
      </div>
    </div>
  )
}

export default Protocol
