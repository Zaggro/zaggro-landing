import { ReactNode } from 'react'
import styles from './Layout.module.scss'

interface LayoutProps {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  return <div className={styles.root}>{children}</div>
}

export default Layout
