import useNavbar from '../useNavbar'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from 'components/Button/Button'
import Typography from 'components/Typography/Typography'
import { fromRightVariant } from 'constants/framerMotion'
import { headerLinks } from 'constants/links'
import styles from './MobileNav.module.scss'

interface MobileNavProps {
  className?: string
}

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
      <AnimatePresence>
        {open && (
          <>
            <motion.ul
              className={styles.links}
              variants={fromRightVariant.container}
              initial="hidden"
              animate="visible"
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {headerLinks.map((link) => (
                <motion.li key={link.href} variants={fromRightVariant.item}>
                  <a href={link.href} onClick={() => setOpen(false)}>
                    <Typography variant="menu-md">{link.text}</Typography>
                  </a>
                </motion.li>
              ))}
            </motion.ul>
            <motion.div
              className={styles.backdrop}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
            />
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default MobileNav
