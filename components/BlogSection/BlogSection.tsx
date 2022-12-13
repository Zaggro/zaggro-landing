import clsx from 'clsx'
import { Article } from 'lib/firebase/articles'
import ArticlePreview from 'components/ArticlePreview/ArticlePreview'
import Button from 'components/Button/Button'
import SectionHeader from 'components/SectionHeader/SectionHeader'
import styles from './BlogSection.module.scss'

interface BlogSectionProps {
  articles: Article[]
  title: string
  className?: string
  id?: string
}

function BlogSection({ articles, title, id, className }: BlogSectionProps) {
  return (
    <section className={clsx(styles.root, className)} id={id}>
      <SectionHeader
        title={title}
        description={
          (!articles || articles.length === 0) &&
          'News and articles regarding ZAGGRO will appear here soon.'
        }
      />
      {articles && articles.length > 0 && (
        <>
          <div className={styles.articles}>
            {articles.map(
              ({ imageUrl, slug, title, category, date, readLength }) => (
                <ArticlePreview
                  key={slug}
                  imageUrl={imageUrl}
                  articleUrl={`/blog/${slug}`}
                  title={title}
                  category={category}
                  dateCreated={date}
                  readLength={readLength}
                />
              )
            )}
          </div>
          <Button variant="secondary" href="/blog">
            Browse all articles
          </Button>
        </>
      )}
    </section>
  )
}

export default BlogSection
