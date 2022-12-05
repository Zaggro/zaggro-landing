import links from '../links'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Button from 'components/Button/Button'
import Typography from 'components/Typography/Typography'
import styles from './MobileNav.module.scss'

interface MobileNavProps {
  className?: string
}

// TODO: Menu open/close animation
function MobileNav({ className }: MobileNavProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'initial'
    }

    return () => {
      document.body.style.overflow = 'initial'
    }
  }, [open])

  return (
    <nav className={clsx(styles.root, open && styles.open, className)}>
      <div className={styles.container}>
        <Image
          src="/images/logo/zaggro-mobile.png"
          alt="Zaggro logo"
          width={161}
          height={44}
        />
        <div className={styles.buttons}>
          <Button href="#">Launch App</Button>
          <button className={styles.menuBtn} onClick={() => setOpen(!open)}>
            <div className={clsx(styles.hamburger, open && styles.cross)} />
            <div className={styles.blurBorder} />
          </button>
        </div>
      </div>
      {open && (
        <>
          <ul className={styles.links}>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  <Typography variant="menu-md">{link.text}</Typography>
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.backdrop} />
        </>
      )}
    </nav>
  )
}

export default MobileNav
