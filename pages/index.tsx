import styles from 'styles/pages/home.module.scss'
import Contact from 'components/Contact/Contact'
import AppPreview from 'components/Homepage/AppPreview/AppPreview'
import Audits from 'components/Homepage/Audits/Audits'
import Blog from 'components/Homepage/Blog/Blog'
import Calculator from 'components/Homepage/Calculator/Calculator'
import GetInTouch from 'components/Homepage/GetInTouch/GetInTouch'
import Hero from 'components/Homepage/Hero/Hero'
import InstitutionalPartners from 'components/Homepage/InstitutionalPartners/InstitutionalPartners'
import Integrations from 'components/Homepage/Integrations/Integrations'
import MobileApp from 'components/Homepage/MobileApp/MobileApp'
import Partners from 'components/Homepage/Partners/Partners'
import Protocol from 'components/Homepage/Protocol/Protocol'
import Statistics from 'components/Homepage/Statistics/Statistics'

export default function Home() {
  return (
    <div className={styles.root}>
      <Hero />
      <Calculator />
      <AppPreview />
      <Protocol className={styles.scrollSection} id="protocol" />
      <Statistics />
      <Integrations className={styles.scrollSection} id="integrations" />
      <MobileApp />
      <InstitutionalPartners className={styles.scrollSection} id="partners" />
      <GetInTouch />
      <Partners />
      <Audits className={styles.scrollSection} id="audits" />
      <Blog className={styles.scrollSection} id="blog" />
      <Contact className={styles.scrollSection} id="contact" />
    </div>
  )
}
