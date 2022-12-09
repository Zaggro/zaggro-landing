import { firestore } from './firebase'
import {
  collection,
  query,
  getDocs,
  Timestamp,
  orderBy,
} from 'firebase/firestore'
import slug from 'slug'

export interface ArticleFirestoreDoc {
  title: string
  content: string
  active: boolean
  date: Timestamp
  imageUrl: string
  category: string
  description: string
  deleted?: string
}

export interface Article {
  slug: string
  title: string
  content: string
  date: string
  imageUrl: string
  category: string
  description: string
}

export async function getAllArticles(articleLimit = 100) {
  const articles: Article[] = []

  try {
    const q = query(collection(firestore, 'articles'), orderBy('date', 'desc'))
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      const articleData = doc.data() as ArticleFirestoreDoc
      if (articleData.active && !articleData.deleted) {
        articles.push({
          slug: slug(articleData.title),
          title: articleData.title,
          content: articleData.content,
          date: articleData.date.toDate().toISOString().slice(0, 10),
          imageUrl: articleData.imageUrl,
          category: articleData.category,
          description: articleData.description,
        })
      }
    })
  } catch {
    console.error(
      'getAllArticles: Error occurred while trying to fetch articles collection from firestore'
    )
  }

  return articles.length > articleLimit
    ? articles.splice(0, articleLimit)
    : articles
}

export async function getAllArticleSlugs() {
  const articles = await getAllArticles()
  return articles.map((article) => {
    return {
      params: {
        article: slug(article.title),
      },
    }
  })
}

export async function getArticle(slug: ArticleFirestoreDoc['title']) {
  const articles = await getAllArticles()
  const data = articles.find((article) => article.slug === slug)
  return data
}
