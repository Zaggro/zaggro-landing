import clsx from 'clsx'
import SectionHeader from 'components/SectionHeader/SectionHeader'
import styles from './AppPreview.module.scss'

interface AppPreviewProps {
  className?: string
}

// TODO: Replace with a real preview once we have design
function AppPreview({ className }: AppPreviewProps) {
  return (
    <section className={clsx(styles.root, className)}>
      <SectionHeader title="ZAGGRO Protocol Preview" />
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
