import clsx from 'clsx'
import styles from 'styles/pages/home.module.scss'
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

export default function Home() {
  return (
    <div className={styles.root}>
      <Hero />
      <Calculator />
      <AppPreview />
      <section
        className={clsx(styles.section, styles.protocol)}
        id="the-protocol"
      >
        <Protocol />
      </section>
      <Statistics />
      <section className={styles.section} id="integrations">
        <Integrations />
      </section>
      <MobileApp />
      <InstitutionalPartners id="partners" className={styles.section} />
      <GetInTouch />
      <Partners />
      <Audits className={styles.section} id="audits" />
      <section className={styles.section} id="contact">
        Contact
      </section>
    </div>
  )
}
