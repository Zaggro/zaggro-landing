import Blocks from 'editorjs-blocks-react-renderer'
import { cloneElement } from 'react'
import Adornment from 'components/Adornment/Adornment'
import Typography from 'components/Typography/Typography'
import { shareButtons } from 'constants/links'
import Clock from 'public/svgs/clock.svg'
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

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.container}>{children}</div>
)

// TODO: Share buttons
const Article = ({
  title,
  description,
  content,
  readLength = '5',
  imageUrl,
  date,
  category,
}: ArticleProps) => {
  let articleUrl = ''
  if (typeof window !== 'undefined') {
    articleUrl = window.location.href
  }

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
              <div className={styles.detailsText}> {date}</div>
              {readLength && (
                <div className={styles.detailsText}>
                  <Clock className={styles.clock} />
                  {`${readLength} min read`}
                </div>
              )}
            </div>
            <div className={styles.shareButtons}>
              {shareButtons.map(({ icon, href, onClick }) => {
                const iconWithClass = cloneElement(icon, {
                  className: styles.shareIcon,
                })
                if (onClick) {
                  return (
                    <button
                      key={href}
                      className={styles.shareButton}
                      onClick={onClick}
                    >
                      {iconWithClass}
                    </button>
                  )
                }
                return (
                  <a
                    key={`${href}${articleUrl}`}
                    href={`${href}${articleUrl}`}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.shareButton}
                  >
                    {iconWithClass}
                  </a>
                )
              })}
            </div>
          </div>
          <p className={styles.description}>{description}</p>
        </header>
      </Container>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={title} className={styles.image} />
      </div>
      <Container>
        <Blocks
          data={JSON.parse(content)}
          config={{
            paragraph: {
              className: styles.paragraph,
            },
            list: {
              className: styles.list,
            },
            header: {
              className: styles.subTitle,
            },
            table: {
              className: styles.table,
            },
          }}
        />
      </Container>
    </div>
  )
}

export default Article
