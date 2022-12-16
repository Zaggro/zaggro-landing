import clsx from 'clsx'
import { NextPage } from 'next'
import styles from 'styles/pages/privacy-policy.module.scss'
import Typography from 'components/Typography/Typography'

const PrivacyPolicy: NextPage = () => {
  return (
    <div className={clsx(styles.root)}>
      <Typography tag="h1" variant="h1" className={styles.title}>
        Privacy Policy
      </Typography>
      <div className={styles.paragraphs}>
        <Typography tag="p" variant="p-lg">
          When you use the Interface, the only information we collect from you
          is your blockchain wallet address, completed transaction hashes, and
          the token names, symbols, or other blockchain identifiers of the
          tokens. We do not collect any personal information from you (eg., your
          name or other identifiers that can be linked to you). We do, however,
          use third-party service providers, like Cloudflare and Google
          Analytics, which may receive or independently obtain your personal
          information from publicly-available sources. We do not control how
          these third parties handle your data and you should review their
          privacy policies to understand how they collect, use, and share your
          personal information. In particular, please visit{' '}
          <a
            href="https://policies.google.com/technologies/partner-sites"
            target="_blank"
            rel="noreferrer"
          >
            https://policies.google.com/technologies/partner-sites
          </a>{' '}
          to learn more about how Google uses data. By accessing and using the
          Interface, you understand and consent to our data practices and our
          service providers treatment of your information.
        </Typography>
        <Typography tag="p" variant="p-lg">
          We use the information we collect to detect, prevent, and mitigate
          financial crime and other illicit or harmful activities on the
          Interface. For these purposes, we may share the information we collect
          with blockchain analytics providers. We share information with these
          service providers only so that they can help us promote the safety,
          security, and integrity of the Interface. We do not retain the
          information we collect any longer than necessary for these purposes.
        </Typography>
        <Typography tag="p" variant="p-lg">
          Please note that when you use the Interface, you are interacting with
          the SUI blockchain, which provides transparency into your
          transactions. ZAGGRO does not control and is not responsible for any
          information you make public on the SUI blockchain by taking actions
          through the Interface.
        </Typography>
        <Typography tag="p" variant="p-lg">
          Intellectual Property Infringement. Activity that infringes on or
          violates any copyright, trademark, service mark, patent, right of
          publicity, right of privacy, or other proprietary or intellectual
          property rights under the law.
        </Typography>
      </div>
    </div>
  )
}

export default PrivacyPolicy
