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

// TODO: Active style based on which element is in view
// TODO: on scroll down, hide navbar | on scroll up, show navbar
function DesktopNav({ className }: DesktopNavProps) {
  const { isSpecialBreakpoint } = useViewportSize(1275)

  return (
    <nav className={clsx(styles.root, className)}>
      <div className={styles.container}>
        <Image
          src={
            !isSpecialBreakpoint
              ? '/images/logo/zaggro@2.png'
              : '/images/logo/zaggro-no-text@2.png'
          }
          alt="ZAGGRO logo"
          width={300}
          height={82}
          className={!isSpecialBreakpoint ? styles.logo : styles.noTextLogo}
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
