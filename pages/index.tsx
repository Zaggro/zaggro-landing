import styles from 'styles/pages/home.module.scss'
import AppPreview from 'components/Homepage/AppPreview/AppPreview'
import Calculator from 'components/Homepage/Calculator/Calculator'
import Hero from 'components/Homepage/Hero/Hero'

export default function Home() {
  return (
    <div className={styles.root}>
      <Hero />
      <Calculator />
      <AppPreview />
      <section className={styles.section} id="the-protocol">
        The Protocol
      </section>
      <section className={styles.section} id="integrations">
        Integrations
      </section>
      <section className={styles.section} id="partners">
        Partners
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
