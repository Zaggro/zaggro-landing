/* eslint-disable react/no-unescaped-entities */
import clsx from 'clsx'
import { sendUserMessage } from 'lib/firebase/contactForm'
import { useState } from 'react'
import { toast } from 'react-toastify'
import Button from 'components/Button/Button'
import Input from 'components/Input/Input'
import Modal from 'components/Modal/Modal'
import Typography from 'components/Typography/Typography'
import { emailRegex } from 'constants/regex'
import styles from './ContactForm.module.scss'

export interface ContactFormProps {
  isOpen: boolean
  onClose: () => void
  className?: string
}

function ContactForm({ isOpen, onClose, className }: ContactFormProps) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [message, setMessage] = useState('')

  const [firstNameError, setFirstNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [messageError, setMessageError] = useState(false)

  const handleFirstNameChange = (value: string) => {
    setFirstName(value)
    if (value) setFirstNameError(false)
  }

  const handleEmailChange = (value: string) => {
    setEmail(value)
    if (emailRegex.test(value)) setEmailError(false)
  }

  const handleMessageChange = (value: string) => {
    setMessage(value)
    if (value) setMessageError(false)
  }

  const allFieldsAreValid =
    !firstNameError &&
    !emailError &&
    !messageError &&
    !!firstName &&
    !!email &&
    !!message

  const resetFields = () => {
    setFirstName('')
    setLastName('')
    setEmail('')
    setCompanyName('')
    setMessage('')
  }

  const submit = async () => {
    if (allFieldsAreValid) {
      await toast.promise(
        () =>
          sendUserMessage({
            firstName,
            lastName,
            email,
            companyName,
            // Replace new lines with <br /> to preserve formatting in the email
            message: message.replace(/\n\r?/g, '<br />'),
          }),
        {
          pending: 'Sending message',
          success: 'Message sent 👌',
          error: 'Message sending failed 🤯',
        },
        {
          closeButton: false,
        }
      )
      resetFields()
    }
  }

  return (
    <Modal
      className={clsx(styles.root, className)}
      isOpen={isOpen}
      onClose={onClose}
    >
      <header className={styles.header}>
        <Typography tag="h2" variant="h2">
          Contact Us
        </Typography>
        <Typography tag="p" variant="p-lg">
          Let's discuss how ZAGGRO can help your business get the most out of
          decentralized finance.
        </Typography>
      </header>
      <form className={styles.form}>
        <div className={styles.textInputs}>
          <Input
            className={styles.textInput}
            required
            type="text"
            label="First Name"
            value={firstName}
            onChange={handleFirstNameChange}
            onBlur={(value) => {
              if (!value) setFirstNameError(true)
            }}
            error={firstNameError}
          />
          <Input
            className={styles.textInput}
            type="text"
            label="Last Name"
            value={lastName}
            onChange={(value) => setLastName(value)}
          />
          <Input
            className={styles.textInput}
            required
            type="email"
            label="Email"
            value={email}
            onChange={handleEmailChange}
            onBlur={(value) => {
              if (!emailRegex.test(value)) setEmailError(true)
            }}
            error={emailError}
          />
          <Input
            className={styles.textInput}
            type="text"
            label="Company name"
            value={companyName}
            onChange={(value) => setCompanyName(value)}
          />
        </div>
        <Input
          required
          textAreaClassName={styles.textArea}
          placeholder="Enter your message"
          type="textarea"
          label="Message"
          value={message}
          onChange={handleMessageChange}
          onBlur={(value) => {
            if (!value) {
              console.log(value)
              setMessageError(true)
            }
          }}
          error={messageError}
        />
        <Button onClick={submit} disabled={!allFieldsAreValid}>
          Contact us
        </Button>
      </form>
    </Modal>
  )
}

export default ContactForm
