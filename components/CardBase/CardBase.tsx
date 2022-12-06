import clsx from 'clsx'
import { cloneElement } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Adornment from 'components/Adornment/Adornment'
import { externalUrlRegex } from 'constants/regex'
import circle from 'public/images/misc/circle.png'
import styles from './CardBase.module.scss'

export interface CardBaseProps {
  children: React.ReactNode
  icon?: React.ReactElement
  href?: string
  target?: string
  comingSoon?: boolean
  className?: string
  contentClassName?: string
}

function CardBase({
  children,
  icon,
  comingSoon,
  href,
  target,
  className,
  contentClassName,
}: CardBaseProps) {
  const commonProps = {
    className: clsx(
      styles.root,
      href && styles.link,
      icon && styles.withIcon,
      comingSoon && styles.withComingSoon,
      className
    ),
  }

  const content = (
    <>
      <div className={styles.blurBorder} />
      <div className={contentClassName}>
        {icon && (
          <div className={styles.iconContainer}>
            <Image src={circle} alt="" width={78} height={78} />
            {cloneElement(icon, { className: styles.icon })}
          </div>
        )}
        {comingSoon && (
          <Adornment className={styles.comingSoon}>Coming soon</Adornment>
        )}
        {children}
      </div>
    </>
  )

  if (href && externalUrlRegex.test(href)) {
    return (
      <a href={href} target={target} {...commonProps}>
        {content}
      </a>
    )
  }

  if (href) {
    return (
      <Link href={href} passHref {...commonProps}>
        {content}
      </Link>
    )
  }

  return <div {...commonProps}>{content}</div>
}

export default CardBase