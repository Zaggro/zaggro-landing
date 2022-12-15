import clsx from 'clsx'
import CardBase from 'components/CardBase/CardBase'
import SectionHeader from 'components/SectionHeader/SectionHeader'
import Typography from 'components/Typography/Typography'
import sui from 'public/svgs/integrations/sui.svg'
import styles from './Integrations.module.scss'

interface IntegrationsProps {
  className?: string
  id?: string
}

const integrations = [
  {
    title: 'Sui Wallet',
    label: 'Wallets',
    description:
      'Open-sourced Sui Wallet gives Sui users the ability to create an address, view and manage assets on the Sui network, and interact with dApps. The Sui Wallet serves as a reference implementation for other potential wallets and applications in the Sui ecosystem.',
    svg: sui,
    href: 'https://chrome.google.com/webstore/detail/sui-wallet/opcgpfmipidbgpenhmajoajpbobppdil',
  },
  {
    title: 'More partners',
    label: 'Wallets / dApps / Protocols',
    description:
      'ZAGGRO wants to be accessible to anyone in the world. Participate in the social voting and help us decide our next integration.',
  },
]

function Integrations({ id, className }: IntegrationsProps) {
  return (
    <section className={clsx(styles.root, className)} id={id}>
      <SectionHeader
        title="Ecosystem Integrations"
        description="Discover some of the top DeFi apps, protocols and tools using ZAGGRO Protocol."
      />
      <div className={styles.cards}>
        {integrations.map(({ title, label, description, href, svg: Svg }) => (
          <CardBase
            key={title}
            className={styles.card}
            href={href}
            target="_blank"
          >
            <div className={styles.topContainer}>
              <div>
                <Typography tag="h3" variant="h5">
                  {title}
                </Typography>
                <Typography tag="p" variant="p-lg" className={styles.label}>
                  {label}
                </Typography>
              </div>
              {Svg && (
                <div className={styles.svg}>
                  <Svg />
                </div>
              )}
            </div>
            <Typography tag="p" variant="p-lg" className={styles.desc}>
              {description}
            </Typography>
          </CardBase>
        ))}
      </div>
    </section>
  )
}

export default Integrations
