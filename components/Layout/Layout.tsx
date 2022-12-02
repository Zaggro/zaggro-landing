import { ReactNode } from 'react'
import styles from './Layout.module.scss'

interface LayoutProps {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.root}>
      <div className={styles.bgImage}>{children}</div>
    </div>
  )
}

export default Layout
