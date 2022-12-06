import styles from 'styles/pages/home.module.scss'
import Hero from 'components/Hero/Hero'

export default function Home() {
  return (
    <div className={styles.root}>
      <Hero />
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
