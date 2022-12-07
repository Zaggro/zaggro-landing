import clsx from 'clsx'
import styles from 'styles/pages/home.module.scss'
import AppPreview from 'components/Homepage/AppPreview/AppPreview'
import Calculator from 'components/Homepage/Calculator/Calculator'
import Hero from 'components/Homepage/Hero/Hero'
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
      <section className={styles.section} id="partners">
        <Partners />
      </section>
      <section className={styles.section} id="audits">
        Audits
      </section>
      <section className={styles.section} id="contact">
        Contact
      </section>
    </div>
  )
}
