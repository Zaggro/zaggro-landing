import clsx from 'clsx'
import { cloneElement } from 'react'
import Link from 'next/link'
import Typography from 'components/Typography/Typography'
import useViewportSize from 'hooks/useViewportSize'
import { footerLinks, socialLinks } from 'constants/links'
import { externalUrlRegex } from 'constants/regex'
import styles from './Footer.module.scss'

export interface FooterProps {
  className?: string
}

function Footer({ className }: FooterProps) {
  const { isTablet } = useViewportSize()

  const socials = socialLinks.map(({ icon, url, name }) => (
    <a href={url} target="_blank" rel="noreferrer" key={name}>
      {cloneElement(icon, { className: styles.socialIcon })}
    </a>
  ))

  const links = footerLinks.map((section, index) => (
    <div key={index} className={styles.linkSection}>
      {section.map(({ text, url }) => {
        const externalLinkProps = {
          target: '_blank',
          rel: 'noreferrer',
        }

        return (
          <a
            href={url}
            key={text}
            style={!url ? { pointerEvents: 'none' } : {}}
            tabIndex={url ? 0 : -1}
            className={clsx(styles.link, !url && styles.disabled)}
            {...(externalUrlRegex.test(url) ? externalLinkProps : {})}
          >
            {text}
          </a>
        )
      })}
    </div>
  ))

  return (
    <footer className={clsx(styles.root, className)}>
      <div className={styles.top}>
        <div className={styles.zaggroContainer}>
          {isTablet && (
            <>
              <img
                className={styles.logo}
                src="/images/logo/zaggro@2.png"
                alt="ZAGGRO logo"
              />
              <Typography className={styles.text} variant="p-md" tag="p">
                We are the most prominent DeFi aggregator that combines the
                liquidity of decentralized exchanges and lending protocols into
                one comprehensive and secure interface that can be smoothly
                accessed by API’s.
              </Typography>
            </>
          )}
          <div className={styles.socialLinks}>{socials}</div>
        </div>
        <div className={styles.links}>{links}</div>
      </div>
      <div className={styles.bottom}>
        <p className={styles.copyright}>
          Copyright P2P Solutions Ltd. © All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
