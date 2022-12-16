import clsx from 'clsx'
import { motion } from 'framer-motion'
import CardBase from 'components/CardBase/CardBase'
import SectionHeader from 'components/SectionHeader/SectionHeader'
import Typography from 'components/Typography/Typography'
import { fromBelowVariant } from 'constants/framerMotion'
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
      <motion.div
        variants={fromBelowVariant.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={styles.cards}
      >
        {audits.map(({ title, label, image, comingSoon }) => (
          <motion.div
            key={title + label}
            className={styles.card}
            variants={fromBelowVariant.item}
          >
            <CardBase comingSoon={comingSoon} contentClassName={styles.content}>
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
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Audits
