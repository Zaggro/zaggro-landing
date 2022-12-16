import { Article, getAllArticles } from 'lib/firebase/articles'
import type { NextPage, GetStaticProps } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import styles from 'styles/pages/blog.module.scss'
import ArticlePreview from 'components/ArticlePreview/ArticlePreview'
import Contact from 'components/Contact/Contact'
import Tabs from 'components/Tabs/Tabs'
import Typography from 'components/Typography/Typography'

export const getStaticProps: GetStaticProps = async () => {
  const articles = await getAllArticles()
  return {
    props: {
      articles,
    },
  }
}

interface BlogProps {
  articles: Article[]
}

const Blog: NextPage<BlogProps> = ({ articles }) => {
  const [shownArticles, setShownArticles] = useState(articles)

  let categories: string[] = ['ALL']
  articles.forEach(({ category }) => {
    categories.push(category.toUpperCase())
  })

  const handleTabChange = (tabItem: string) => {
    if (tabItem === 'ALL') {
      return setShownArticles(articles)
    }
    const filteredArticles = articles.filter(
      ({ category }) => category.toUpperCase() === tabItem.toUpperCase()
    )
    setShownArticles(filteredArticles)
  }

  const articleLinks = shownArticles.map(
    ({ title, category, date, slug, imageUrl, readLength }) => {
      return (
        <ArticlePreview
          imageUrl={imageUrl}
          articleUrl={`/blog/${slug}`}
          dateCreated={date}
          title={title}
          category={category}
          key={title + category}
          readLength={readLength}
        />
      )
    }
  )

  return (
    <>
      <Head>
        <title key="title">Blog | ZAGGRO</title>
        <meta
          name="description"
          key="description"
          content="News and Articles from ZAGGRO"
        />
        <meta property="og:title" key="metaTitle" content="ZAGGRO Blog" />
        <meta
          property="og:description"
          key="metaDescription"
          content="News and Articles from ZAGGRO"
        />
      </Head>
      {articles && articles.length > 0 ? (
        <>
          <Typography tag="h1" variant="h1" className={styles.title}>
            News and articles from ZAGGRO
          </Typography>
          <Tabs
            variation="secondary"
            items={categories}
            onChange={handleTabChange}
            className={styles.tabs}
          />
          <div className={styles.articles}>{articleLinks}</div>
          <Contact />
        </>
      ) : (
        <Typography tag="h1" variant="display-md" className={styles.noArticles}>
          Blog articles coming soon!
        </Typography>
      )}
    </>
  )
}

export default Blog
