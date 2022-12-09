import clsx from 'clsx'
import SectionHeader from 'components/SectionHeader/SectionHeader'
import useViewportSize from 'hooks/useViewportSize'
import styles from './AppPreview.module.scss'

interface AppPreviewProps {
  className?: string
}

function AppPreview({ className }: AppPreviewProps) {
  const { isPhablet } = useViewportSize()

  return (
    <section className={clsx(styles.root, className)}>
      <SectionHeader title="ZAGGRO Protocol Preview" />
      <div className={styles.imageContainer}>
        {isPhablet ? (
          <img
            src="/images/screenshots/swap-desktop@2.png"
            alt="Preview of the ZAGGRO application"
            className={styles.imageDesktop}
          />
        ) : (
          <img
            src="/images/screenshots/swap-mobile@2.png"
            alt="Preview of the ZAGGRO application"
            className={styles.imageMobile}
          />
        )}
      </div>
    </section>
  )
}

export default AppPreview
