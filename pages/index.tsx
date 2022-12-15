import clsx from 'clsx'
import { Article, getAllArticles } from 'lib/firebase/articles'
import { GetStaticProps } from 'next'
import styles from 'styles/pages/home.module.scss'
import BlogSection from 'components/BlogSection/BlogSection'
import Contact from 'components/Contact/Contact'
import AppPreview from 'components/Homepage/AppPreview/AppPreview'
import Audits from 'components/Homepage/Audits/Audits'
import Calculator from 'components/Homepage/Calculator/Calculator'
import GetInTouch from 'components/Homepage/GetInTouch/GetInTouch'
import Hero from 'components/Homepage/Hero/Hero'
import InstitutionalPartners from 'components/Homepage/InstitutionalPartners/InstitutionalPartners'
import Integrations from 'components/Homepage/Integrations/Integrations'
import MobileApp from 'components/Homepage/MobileApp/MobileApp'
import Partners from 'components/Homepage/Partners/Partners'
import Protocol from 'components/Homepage/Protocol/Protocol'
import Statistics from 'components/Homepage/Statistics/Statistics'

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

export default function Home({ articles }: BlogProps) {
  return (
    <div className={styles.root}>
      <Hero />
      <Calculator />
      <AppPreview />
      <Protocol className={styles.scrollSection} id="protocol" />
      {/* <Statistics /> */}
      <Integrations className={styles.scrollSection} id="integrations" />
      <MobileApp />
      <InstitutionalPartners className={styles.scrollSection} id="partners" />
      <GetInTouch />
      <Partners />
      <Audits className={styles.scrollSection} id="audits" />
      <BlogSection id="blog" articles={articles?.slice(0, 3)} title="Blog" />
      <Contact
        className={clsx(styles.scrollSection, styles.contact)}
        id="contact"
      />
    </div>
  )
}
