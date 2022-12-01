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
        <div>Home</div>
      </Layout>
    </div>
  )
}
