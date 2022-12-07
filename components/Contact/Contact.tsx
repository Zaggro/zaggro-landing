import clsx from 'clsx'
import Button from 'components/Button/Button'
import CardBase from 'components/CardBase/CardBase'
import Typography from 'components/Typography/Typography'
import styles from './Contact.module.scss'

export interface ContactProps {
  id?: string
  className?: string
}

function Contact({ id, className }: ContactProps) {
  return (
    <CardBase
      className={clsx(styles.root, className)}
      contentClassName={styles.content}
      id={id}
    >
      <Typography variant="h2" tag="h2">
        Contact Us
      </Typography>
      <Typography tag="p" variant="p-lg" className={styles.text}>
        Leave us a message and we’ll contact you to explore business synergies.
      </Typography>
      <Button href="mailto:info@zaggro.io">Contact us</Button>
    </CardBase>
  )
}

export default Contact
