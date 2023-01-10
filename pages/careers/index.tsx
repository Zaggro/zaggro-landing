import clsx from 'clsx'
import { motion } from 'framer-motion'
import { NextPage } from 'next'
import { roles } from 'pages/careers/Roles'
import styles from 'styles/pages/careers.module.scss'
import Button from 'components/Button/Button'
import Contact from 'components/Contact/Contact'
import Typography from 'components/Typography/Typography'
import { fromBelowMotion } from 'constants/framerMotion'

const t = (key: string) => {
  switch (key) {
    case 'role':
      return null

    case 'team':
      return 'Team'

    case 'location':
      return 'Location'

    case 'contractType':
      return 'Contract type'

    default:
      break
  }
}

const Careers: NextPage = () => {
  return (
    <div className={clsx(styles.root)}>
      <motion.div {...fromBelowMotion} className={styles.intro}>
        <Typography tag="h1" variant="h1" className={styles.title}>
          Join the ZAGGRO Adventure
        </Typography>

        <Typography tag="p" variant="p-lg" className={styles.info}>
          Do you have what it takes to join the innovative adventure of Acta
          Finance? Apply for a role now or spontaneously send in your CV at{' '}
          <a href="mailto:info@zaggro.io">info@zaggro.io</a>.
        </Typography>
      </motion.div>

      {/* <motion.div> */}
      <motion.div {...fromBelowMotion}>
        <div className={styles.roles}>
          <div className={clsx(styles.roleItem, styles.mdOnly, styles.header)}>
            <div className={clsx(styles.label, styles.th)}>Role</div>
            <div className={clsx(styles.label, styles.th)}>Team</div>
            <div className={clsx(styles.label, styles.th)}>Location</div>
            <div className={clsx(styles.label, styles.th)}>Contract type</div>
          </div>
          {roles.map((role) => (
            <div key={role.role} className={styles.roleItem}>
              {Object.entries(role).map(([key, value]) => {
                const label = t(key)
                return (
                  <div className={clsx(styles.cell, styles[key])} key={key}>
                    {label && (
                      <span className={clsx(styles.smOnly, styles.label)}>
                        {label}
                      </span>
                    )}
                    <span>{value}</span>
                  </div>
                )
              })}
              <div className={clsx(styles.cell, styles.aplyBtn)}>
                <Button variant="secondary" href="/careers/details">
                  Apply now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      <Contact
        className={clsx(styles.scrollSection, styles.contact)}
        id="contact"
      />
    </div>
  )
}

export default Careers
