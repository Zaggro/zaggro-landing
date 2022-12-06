import clsx from 'clsx'
import CardBase from 'components/CardBase/CardBase'
import SectionHeader from 'components/SectionHeader/SectionHeader'
import Typography from 'components/Typography/Typography'
import styles from './Statistics.module.scss'

interface StatisticsProps {
  className?: string
}

const statistics = [
  {
    amount: '20+',
    label: 'Integrations',
  },
  {
    amount: '2',
    label: 'Active Blockchains',
  },
]

function Statistics({ className }: StatisticsProps) {
  return (
    <section className={clsx(styles.root, className)}>
      <SectionHeader
        title="Statistics"
        description="Everyone should have access to the best swap rates."
      />
      <div className={styles.cards}>
        {statistics.map(({ amount, label }) => (
          <CardBase variant="secondary" key={label} className={styles.card}>
            <h3 className={styles.amount}>{amount}</h3>
            <Typography variant="p-lg" tag="p" className={styles.label}>
              {label}
            </Typography>
          </CardBase>
        ))}
      </div>
    </section>
  )
}

export default Statistics
