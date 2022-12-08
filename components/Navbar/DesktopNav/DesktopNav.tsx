import useNavbar from '../useNavbar'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import Button from 'components/Button/Button'
import Typography from 'components/Typography/Typography'
import useViewportSize from 'hooks/useViewportSize'
import { headerLinks } from 'constants/links'
import styles from './DesktopNav.module.scss'

interface DesktopNavProps {
  className?: string
}

function DesktopNav({ className }: DesktopNavProps) {
  const { isSpecialBreakpoint } = useViewportSize(1275)

  const { showNav, lastScrollY } = useNavbar()
  const headerDefaultHeight = 122
  const scrollIsMoreThanHeader = lastScrollY > headerDefaultHeight
  const showSmallLogo = isSpecialBreakpoint || scrollIsMoreThanHeader
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
        <Link href="/">
          {showSmallLogo ? (
            <Image
              src="/images/logo/zaggro-no-text@2.png"
              alt="ZAGGRO logo"
              width={50}
              height={50}
            />
          ) : (
            <Image
              src="/images/logo/zaggro@2.png"
              alt="ZAGGRO logo"
              width={228}
              height={62}
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
        <Button href="#" className={styles.button}>
          Launch App
        </Button>
      </div>
    </nav>
  )
}

export default DesktopNav
