import { ReactNode } from 'react'
import Navbar from 'components/Navbar/Navbar'
import styles from './Layout.module.scss'

interface LayoutProps {
  children: ReactNode
}

// TODO: background image for wide desktop
function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.root}>
      <Navbar className={styles.header} />
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer} />
    </div>
  )
}

export default Layout
