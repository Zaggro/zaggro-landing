import clsx from 'clsx'
import { ReactNode } from 'react'
import Link from 'next/link'
import { externalUrlRegex } from 'constants/regex'
import styles from './Button.module.scss'

export interface ButtonProps {
  variant?: 'primary' | 'secondary'
  /**
   *  Link url. If provided, will the Button component will act as a link instead.
   */
  href?: string
  /**
   *  Specify where to open the link.
   * @default '_blank'
   */
  target?: string
  /**
   * @default 'button'
   */
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  disabled?: boolean
  className?: string
  children: ReactNode
}

function Button({
  variant = 'primary',
  href,
  target = '_blank',
  onClick,
  disabled,
  type = 'button',
  children,
  className,
}: ButtonProps) {
  const commonProps = {
    className: clsx(
      styles.root,
      styles[variant],
      disabled && styles.disabled,
      href && styles.link,
      className
    ),
    onClick,
  }

  const content = (
    <div className={styles.container}>
      {!disabled && (
        <>
          <div className={styles.solidBorder} />
          <div className={styles.blurBorder} />
        </>
      )}
      {children}
    </div>
  )

  if ((href && externalUrlRegex.test(href)) || href?.includes('mailto')) {
    return (
      <a href={href} target={target} {...commonProps}>
        {content}
      </a>
    )
  }

  if (href) {
    return (
      <Link href={href} {...commonProps}>
        {content}
      </Link>
    )
  }

  return (
    <button {...commonProps} type={type} disabled={disabled}>
      {content}
    </button>
  )
}

export default Button
