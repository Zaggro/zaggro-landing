import clsx from 'clsx'
import Image from 'next/image'
import CardBase from 'components/CardBase/CardBase'
import SectionHeader from 'components/SectionHeader/SectionHeader'
import Typography from 'components/Typography/Typography'
import styles from './Integrations.module.scss'

interface IntegrationsProps {
  className?: string
}

const integrations = [
  {
    title: 'Metamask',
    label: 'Wallets',
    description:
      'MetaMask is a DeFi wallet enabling user interactions and experience on Web3. It’s available as a browser extension and as a mobile application.',
    image: '/images/integrations/metamask.png',
  },
  {
    title: 'More partners',
    label: 'Wallets / dApps / Protocols',
    description:
      'ZAGGRO wants to be accessible to anyone in the world. Participate in the social voting and help us decide our next integration.',
  },
]

function Integrations({ className }: IntegrationsProps) {
  return (
    <div className={clsx(styles.root, className)}>
      <SectionHeader
        title="Ecosystem Integrations"
        description="Discover some of the top DeFi apps, protocols and tools using ZAGGRO Protocol."
      />
      <div className={styles.cards}>
        {integrations.map(({ title, label, description, image }) => (
          <CardBase key={title} className={styles.card}>
            <div className={styles.topContainer}>
              <div>
                <Typography tag="h5" variant="h5">
                  {title}
                </Typography>
                <Typography tag="p" variant="p-lg" className={styles.label}>
                  {label}
                </Typography>
              </div>
              {image && (
                <div className={styles.image}>
                  <img src={image} alt="" />
                </div>
              )}
            </div>
            <Typography tag="p" variant="p-lg" className={styles.desc}>
              {description}
            </Typography>
          </CardBase>
        ))}
      </div>
    </div>
  )
}

export default Integrations
