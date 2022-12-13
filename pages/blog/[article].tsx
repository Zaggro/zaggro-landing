import {
  getArticle,
  getAllArticleSlugs,
  Article as ArticleProps,
  getAllArticles,
} from 'lib/firebase/articles'
import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import styles from 'styles/pages/article.module.scss'
import Article from 'components/Article/Article'
import BlogSection from 'components/BlogSection/BlogSection'
import Contact from 'components/Contact/Contact'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllArticleSlugs()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const articleData = await getArticle(params?.article as string)
  const articles = await getAllArticles()
  return {
    props: {
      articleData,
      articles,
    },
  }
}

interface ArticlePageProps {
  articles: ArticleProps[]
  articleData: ArticleProps
}

const ArticlePage: NextPage<ArticlePageProps> = ({ articles, articleData }) => {
  const articlesExceptCurrent = articles.filter(
    ({ slug }) => slug !== articleData.slug
  )

  return (
    <>
      <Head>
        <title key="title">{articleData.title}</title>
        <meta
          name="description"
          key="description"
          content={articleData.description}
        />
        <meta property="og:title" key="metaTitle" content={articleData.title} />
        <meta
          property="og:description"
          key="metaDescription"
          content={articleData.description}
        />
        <meta
          property="og:image"
          key="metaImage"
          content={articleData.imageUrl}
        />
      </Head>
      <Article {...articleData} />
      {articlesExceptCurrent && articlesExceptCurrent.length > 0 && (
        <div className={styles.moreArticles}>
          <BlogSection
            title="Recent updates from ZAGGRO"
            articles={articlesExceptCurrent?.slice(0, 3)}
          />
        </div>
      )}
      <Contact />
    </>
  )
}

export default ArticlePage
