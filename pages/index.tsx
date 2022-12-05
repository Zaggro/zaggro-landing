import Head from 'next/head'
import styles from 'styles/pages/home.module.scss'
import Layout from 'components/Layout/Layout'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Zaggro</title>
        <meta name="description" content="Zaggro" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
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
      </Layout>
    </div>
  )
}
