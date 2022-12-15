import clsx from 'clsx'
import { ReactNode, useRef, useCallback, useState } from 'react'
import Portal from 'components/HOC/Portal'
import useKeyPress from 'hooks/useKeyPress'
import useOnClickOutside from 'hooks/useOnClickOutside'
import useTimeout from 'hooks/useTimeout'
import Close from 'public/svgs/close.svg'
import styles from './Modal.module.scss'

export interface ModalProps {
  children: ReactNode
  isOpen: boolean
  onClose: () => void
  className?: string
  contentClassName?: string
}

function Modal({
  children,
  isOpen,
  onClose,
  contentClassName,
  className,
}: ModalProps) {
  const [showModal, setShowModal] = useState(false)
  const contentRef = useRef(null)
  const timer = useRef(0)

  const closeModal = useCallback(() => {
    setShowModal(false)
    timer.current = window.setTimeout(() => onClose?.(), 1200)
  }, [onClose])

  useOnClickOutside(contentRef, isOpen, closeModal)
  useKeyPress('Escape', isOpen, closeModal)
  useTimeout(() => setShowModal(true), 100, isOpen)

  if (!isOpen) {
    return null
  }

  return (
    <Portal>
      <div
        className={clsx(
          styles.root,
          showModal ? styles.unfoldingAnimation : styles.hideUnfoldingAnimation,
          className
        )}
      >
        <div className={styles.modalBackground}>
          <div
            role="dialog"
            ref={contentRef}
            className={clsx(styles.modal, contentClassName)}
          >
            <button className={styles.closeButton} onClick={closeModal}>
              <Close />
            </button>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}

export default Modal
