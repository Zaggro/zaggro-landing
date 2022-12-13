import useNavbar from '../useNavbar'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from 'components/Button/Button'
import Typography from 'components/Typography/Typography'
import { headerLinks } from 'constants/links'
import styles from './MobileNav.module.scss'

interface MobileNavProps {
  className?: string
}

// TODO: Menu open/close animation
function MobileNav({ className }: MobileNavProps) {
  const [open, setOpen] = useState(false)

  const { showNav, lastScrollY } = useNavbar()
  const headerHeight = 80
  const scrollIsMoreThanHeader = lastScrollY > headerHeight
  const hideNavbar = !showNav && scrollIsMoreThanHeader

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
    <nav
      className={clsx(
        styles.root,
        open && styles.open,
        hideNavbar && styles.hide,
        className
      )}
    >
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/logo/zaggro.png"
            alt="ZAGGRO logo"
            width={161}
            height={44}
          />
        </Link>
        <div className={styles.buttons}>
          <Button href="#" disabled>
            Launch App
          </Button>
          <button className={styles.menuBtn} onClick={() => setOpen(!open)}>
            <div className={clsx(styles.hamburger, open && styles.cross)} />
            <div className={styles.blurBorder} />
          </button>
        </div>
      </div>
      {open && (
        <>
          <ul className={styles.links}>
            {headerLinks.map((link) => (
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
