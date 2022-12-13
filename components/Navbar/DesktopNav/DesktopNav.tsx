import useNavbar from '../useNavbar'
import clsx from 'clsx'
import Link from 'next/link'
import Button from 'components/Button/Button'
import Typography from 'components/Typography/Typography'
import { headerLinks } from 'constants/links'
import styles from './DesktopNav.module.scss'

interface DesktopNavProps {
  className?: string
}

function DesktopNav({ className }: DesktopNavProps) {
  const { showNav, lastScrollY } = useNavbar()
  const headerDefaultHeight = 122
  const scrollIsMoreThanHeader = lastScrollY > headerDefaultHeight
  const hideNavbar = !showNav && scrollIsMoreThanHeader

  return (
    <nav
      className={clsx(
        styles.root,
        hideNavbar && styles.hide,
        scrollIsMoreThanHeader && styles.slim,
        className
      )}
    >
      <div className={styles.container}>
        <Link href="/" className={styles.link}>
          {scrollIsMoreThanHeader ? (
            <img
              src="/images/logo/zaggro-no-text@2.png"
              alt="ZAGGRO logo"
              className={styles.logo}
            />
          ) : (
            <img
              src="/images/logo/zaggro@2.png"
              alt="ZAGGRO logo"
              className={styles.logoWithText}
            />
          )}
        </Link>
        <ul className={styles.links}>
          {headerLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>
                <Typography variant="menu-md" className={styles.link}>
                  {link.text}
                </Typography>
              </a>
            </li>
          ))}
        </ul>
        <Button href="#" disabled className={styles.button}>
          Launch App
        </Button>
      </div>
    </nav>
  )
}

export default DesktopNav
