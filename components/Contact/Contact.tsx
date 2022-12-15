import clsx from 'clsx'
import { useState } from 'react'
import Button from 'components/Button/Button'
import CardBase from 'components/CardBase/CardBase'
import ContactForm from 'components/ContactForm/ContactForm'
import Typography from 'components/Typography/Typography'
import styles from './Contact.module.scss'

export interface ContactProps {
  id?: string
  className?: string
}

function Contact({ id, className }: ContactProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

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
      <Button onClick={() => setIsModalOpen(true)}>Contact us</Button>
      <ContactForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </CardBase>
  )
}

export default Contact
