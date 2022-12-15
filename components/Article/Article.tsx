import clsx from 'clsx'
import dayjs from 'dayjs'
import Blocks from 'editorjs-blocks-react-renderer'
import { cloneElement } from 'react'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import Adornment from 'components/Adornment/Adornment'
import Typography from 'components/Typography/Typography'
import useViewportSize from 'hooks/useViewportSize'
import { shareButtons } from 'constants/links'
import Clock from 'public/svgs/clock.svg'
import CopyLink from 'public/svgs/social/copy-link.svg'
import styles from './Article.module.scss'

export interface ArticleProps {
  title: string
  content: string
  description?: string
  imageUrl: string
  date: string
  category: string
  readLength?: string
}

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => <div className={clsx(styles.container, className)}>{children}</div>

const Article = ({
  title,
  description,
  content,
  readLength,
  imageUrl,
  date,
  category,
}: ArticleProps) => {
  const { isTablet } = useViewportSize()
  const { asPath } = useRouter()

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    toast.success('Article link copied!')
  }

  const formattedDate = dayjs(date).format('DD MMMM YYYY')

  const renderShareButtons = (
    <div className={styles.shareButtons}>
      {shareButtons.map(({ icon, href }) => {
        const shareUrl = `${href}https://zaggro.io${asPath}`
        const iconWithClass = cloneElement(icon, {
          className: styles.shareIcon,
        })

        return (
          <a
            key={shareUrl}
            href={shareUrl}
            target="_blank"
            rel="noreferrer"
            className={styles.shareButton}
          >
            {iconWithClass}
          </a>
        )
      })}
      <button className={styles.shareButton} onClick={copyLink}>
        <CopyLink className={styles.shareIcon} />
      </button>
    </div>
  )

  return (
    <div>
      <Container>
        <header>
          <Typography tag="h1" variant="h1" className={styles.title}>
            {title}
          </Typography>
          <div className={styles.headerContainer}>
            <div className={styles.details}>
              <Adornment>{category}</Adornment>
              <div className={styles.detailsText}>{formattedDate}</div>
              {readLength && (
                <div className={styles.detailsText}>
                  <Clock className={styles.clock} />
                  {`${readLength} min read`}
                </div>
              )}
            </div>
            {isTablet && renderShareButtons}
          </div>
          <p className={styles.description}>{description}</p>
        </header>
      </Container>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={title} className={styles.image} />
      </div>
      <Container className={styles.editorJsContent}>
        <Blocks data={JSON.parse(content)} />
        {!isTablet && renderShareButtons}
        <div className={styles.border} />
      </Container>
    </div>
  )
}

export default Article
