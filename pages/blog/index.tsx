import capitalizeFirstLetter from 'lib/capitalizeFirstLetter'
import { Article, getAllArticles } from 'lib/firebase/articles'
import type { NextPage, GetStaticProps } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import styles from 'styles/pages/blog.module.scss'
import ArticlePreview from 'components/ArticlePreview/ArticlePreview'
import Contact from 'components/Contact/Contact'
import Tabs from 'components/Tabs/Tabs'

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

  let categories: string[] = ['All']
  articles.forEach(({ category }) => {
    const fixedCategoryString = capitalizeFirstLetter(category.trim())
    if (!categories.includes(fixedCategoryString)) {
      categories.push(fixedCategoryString)
    }
  })

  const handleTabChange = (tabItem: string) => {
    if (tabItem === 'All') {
      return setShownArticles(articles)
    }
    const filteredArticles = articles.filter(
      ({ category }) => category === tabItem
    )
    setShownArticles(filteredArticles)
  }

  const articleLinks = shownArticles.map(
    ({ title, category, date, slug, imageUrl }) => {
      return (
        <ArticlePreview
          imageUrl={imageUrl}
          articleUrl={`/blog/${slug}`}
          dateCreated={date}
          title={title}
          category={category}
          key={title + category}
          readLength="? min read"
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
      <Tabs
        variation="secondary"
        items={categories}
        onChange={handleTabChange}
        className={styles.tabs}
      />
      <div className={styles.articles}>{articleLinks}</div>
      <Contact />
    </>
  )
}

export default Blog
