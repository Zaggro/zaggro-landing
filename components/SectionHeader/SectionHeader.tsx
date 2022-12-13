import clsx from 'clsx'
import Typography from 'components/Typography/Typography'
import styles from './SectionHeader.module.scss'

interface SectionHeaderProps {
  title: string | React.ReactNode
  description?: string | React.ReactNode
  className?: string
}

function SectionHeader({ title, description, className }: SectionHeaderProps) {
  return (
    <header className={clsx(styles.root, className)}>
      <Typography variant="h2" tag="h2" className={styles.title}>
        {title}
      </Typography>
      {description && (
        <Typography tag="p" variant="p-lg" className={styles.text}>
          {description}
        </Typography>
      )}
    </header>
  )
}

export default SectionHeader
