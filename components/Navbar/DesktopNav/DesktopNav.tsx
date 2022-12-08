import useNavbar from '../useNavbar'
import clsx from 'clsx'
import Image from 'next/image'
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
    <nav className={clsx(styles.root, hideNavbar && styles.hide, className)}>
      <div
        className={clsx(
          styles.container,
          scrollIsMoreThanHeader && styles.slim
        )}
      >
        <Image
          src={
            showSmallLogo
              ? '/images/logo/zaggro-no-text@2.png'
              : '/images/logo/zaggro@2.png'
          }
          alt="ZAGGRO logo"
          width={300}
          height={82}
          className={showSmallLogo ? styles.noTextLogo : styles.logo}
        />
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
