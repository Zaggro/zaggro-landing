import { ReactNode } from 'react'
import Footer from 'components/Footer/Footer'
import Navbar from 'components/Navbar/Navbar'
import styles from './Layout.module.scss'

interface LayoutProps {
  children: ReactNode
}

// TODO: background image for wide desktop
function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.root}>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
