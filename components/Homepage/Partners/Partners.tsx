import clsx from 'clsx'
import SectionHeader from 'components/SectionHeader/SectionHeader'
import styles from './Partners.module.scss'

interface PartnersProps {
  className?: string
}

const partners = [
  {
    image: '/images/partners/sui-logo.png',
    alt: 'Sui Foundation',
    link: 'https://suifoundation.org/',
  },
  {
    image: '/images/partners/p2p-solutions-logo.png',
    alt: 'P2Psolutions',
    link: 'https://www.p2psolutions.org/',
  },
  {
    image: '/images/partners/four-leaf-network-logo.png',
    alt: 'Four-Leaf Network',
    link: 'https://www.fourleaf.network/',
  },
]

function Partners({ className }: PartnersProps) {
  return (
    <div className={clsx(styles.root, className)}>
      <SectionHeader
        title="Our Partners"
        description="ZAGGRO is partnered with DeFi leading business developers."
      />
      <ul className={styles.partners}>
        {partners.map(({ image, alt, link }) => (
          <li key={alt}>
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className={styles.partner}
            >
              <img src={image} alt={alt} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Partners
