import clsx from 'clsx'
import Typography from 'components/Typography/Typography'
import styles from './AppPreview.module.scss'

interface AppPreviewProps {
  className?: string
}

// TODO: Replace with a real preview once we have design
function AppPreview({ className }: AppPreviewProps) {
  return (
    <section className={clsx(styles.root, className)}>
      <Typography variant="h2" tag="h2" className={styles.title}>
        ZAGGRO Protocol Preview
      </Typography>
      <div className={styles.image}>
        <img
          src="/images/screenshots/platform-desktop.png"
          alt="Preview of the ZAGGRO calculator"
        />
      </div>
    </section>
  )
}

export default AppPreview
