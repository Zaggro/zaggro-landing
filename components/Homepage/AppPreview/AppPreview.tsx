import clsx from 'clsx'
import SectionHeader from 'components/SectionHeader/SectionHeader'
import styles from './AppPreview.module.scss'

interface AppPreviewProps {
  className?: string
}

// TODO: Mobile app preview
function AppPreview({ className }: AppPreviewProps) {
  return (
    <section className={clsx(styles.root, className)}>
      <SectionHeader title="ZAGGRO Protocol Preview" />
      <div className={styles.imageContainer}>
        <img
          src="/images/screenshots/platform-desktop@2.png"
          alt="Preview of the ZAGGRO application"
          className={styles.image}
        />
      </div>
    </section>
  )
}

export default AppPreview
