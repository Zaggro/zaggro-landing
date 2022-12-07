import clsx from 'clsx'
import CardBase from 'components/CardBase/CardBase'
import SectionHeader from 'components/SectionHeader/SectionHeader'
import Typography from 'components/Typography/Typography'
import styles from './Audits.module.scss'

interface AuditsProps {
  className?: string
  id?: string
}

const audits = [
  {
    comingSoon: true,
    title: '?',
    label: 'Audit Partner',
    image: '/images/audits/placeholder-image.png',
  },
  {
    comingSoon: true,
    title: '?',
    label: 'Decentralized bug-bounty',
    image: '/images/audits/placeholder-image.png',
  },
]

function Audits({ className, id }: AuditsProps) {
  return (
    <section className={clsx(styles.root, className)} id={id}>
      <SectionHeader
        title="Audits"
        description="ZAGGRO protocol will be audited by a professional 3rd party and will conduct a decentralized bug-bounty campaign for mass testing."
      />
      <div className={styles.cards}>
        {audits.map(({ title, label, image, comingSoon }) => (
          <CardBase
            key={title + label}
            comingSoon={comingSoon}
            className={styles.card}
            contentClassName={styles.content}
          >
            <div className={styles.texts}>
              <Typography tag="h3" variant="h5">
                {title}
              </Typography>
              <Typography tag="p" variant="p-lg" className={styles.label}>
                {label}
              </Typography>
            </div>
            <img src={image} alt={label} />
          </CardBase>
        ))}
      </div>
    </section>
  )
}

export default Audits
