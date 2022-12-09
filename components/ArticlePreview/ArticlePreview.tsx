import clsx from 'clsx'
import Link from 'next/link'
import Adornment from 'components/Adornment/Adornment'
import CardBase from 'components/CardBase/CardBase'
import Typography from 'components/Typography/Typography'
import styles from './ArticlePreview.module.scss'

export interface ArticlePreviewProps {
  imageUrl: string
  articleUrl: string
  title: string
  category: string
  dateCreated: string
  readLength: string
  className?: string
}

function ArticlePreview({
  imageUrl,
  articleUrl,
  title,
  category,
  dateCreated,
  readLength,
  className,
}: ArticlePreviewProps) {
  return (
    <Link href={articleUrl}>
      <CardBase
        className={clsx(styles.root, className)}
        contentClassName={styles.content}
      >
        <div className={styles.imageWrapper}>
          <img src={imageUrl} alt="" className={styles.image} />
          <Adornment className={styles.category}>{category}</Adornment>
        </div>
        <div className={styles.textContent}>
          <Typography tag="h3" variant="h5">
            {title}
          </Typography>
          <div className={styles.bottomDetails}>
            <div className={styles.detailsText}>{dateCreated}</div>
            <div className={styles.detailsText}>{readLength}</div>
          </div>
        </div>
      </CardBase>
    </Link>
  )
}

export default ArticlePreview
