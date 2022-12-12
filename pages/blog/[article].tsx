import {
  getArticle,
  getAllArticleSlugs,
  Article as ArticleProps,
} from 'lib/firebase/articles'
import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import Article from 'components/Article/Article'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllArticleSlugs()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const articleData = await getArticle(params?.article as string)
  return {
    props: {
      articleData,
    },
  }
}

interface ArticlePageProps {
  articleData: ArticleProps
}

const ArticlePage: NextPage<ArticlePageProps> = ({ articleData }) => {
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
    </>
  )
}

export default ArticlePage
