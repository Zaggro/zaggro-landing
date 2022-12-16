import clsx from 'clsx'
import { motion } from 'framer-motion'
import { Article } from 'lib/firebase/articles'
import ArticlePreview from 'components/ArticlePreview/ArticlePreview'
import Button from 'components/Button/Button'
import SectionHeader from 'components/SectionHeader/SectionHeader'
import { fromLeftVariant } from 'constants/framerMotion'
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
          <motion.div
            variants={fromLeftVariant.container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={styles.articles}
          >
            {articles.map(
              ({ imageUrl, slug, title, category, date, readLength }) => (
                <motion.div
                  key={slug}
                  variants={fromLeftVariant.item}
                  className={styles.wrapper}
                >
                  <ArticlePreview
                    imageUrl={imageUrl}
                    articleUrl={`/blog/${slug}`}
                    title={title}
                    category={category}
                    dateCreated={date}
                    readLength={readLength}
                  />
                </motion.div>
              )
            )}
          </motion.div>
          <Button variant="secondary" href="/blog">
            Browse all articles
          </Button>
        </>
      )}
    </section>
  )
}

export default BlogSection
