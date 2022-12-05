import { ReactNode } from 'react'
import Navbar from 'components/Navbar/Navbar'
import styles from './Layout.module.scss'

interface LayoutProps {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <main className={styles.root}>
      <div className={styles.bgImage}>
        <Navbar />
        {children}
      </div>
    </main>
  )
}

export default Layout
