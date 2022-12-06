import links from '../links'
import clsx from 'clsx'
import Image from 'next/image'
import Button from 'components/Button/Button'
import Typography from 'components/Typography/Typography'
import styles from './DesktopNav.module.scss'

interface DesktopNavProps {
  className?: string
}

// TODO: Active style based on which element is in view
// TODO: on scroll down, hide navbar | on scroll up, show navbar
function DesktopNav({ className }: DesktopNavProps) {
  return (
    <nav className={clsx(styles.root, className)}>
      <Image
        src="/images/logo/zaggro-desktop.png"
        alt="ZAGGRO logo"
        width={300}
        height={82}
        className={styles.logo}
      />
      <ul className={styles.links}>
        {links.map((link) => (
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
    </nav>
  )
}

export default DesktopNav
