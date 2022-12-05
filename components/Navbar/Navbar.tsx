import DesktopNav from './DesktopNav/DesktopNav'
import MobileNav from './MobileNav/MobileNav'
import useViewportSize from 'hooks/useViewportSize'
import styles from './Navbar.module.scss'

export interface NavbarProps {
  className?: string
}

function Navbar({ className }: NavbarProps) {
  const { isTablet } = useViewportSize()
  return isTablet ? <DesktopNav /> : <MobileNav />
}

export default Navbar
