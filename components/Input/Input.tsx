import clsx from 'clsx'
import styles from './Input.module.scss'

export interface InputProps {
  label: string
  value: string
  placeholder?: string
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  type: React.HTMLInputTypeAttribute
  required?: boolean
  error?: boolean
  className?: string
  textAreaClassName?: string
}

function Input({
  value,
  onChange,
  type,
  label,
  required,
  error,
  placeholder,
  textAreaClassName,
  className,
}: InputProps) {
  if (type === 'textarea')
    return (
      <label className={clsx(styles.root, error && styles.error, className)}>
        <div className={styles.label}>
          {label} {required && '*'}
        </div>{' '}
        <textarea
          className={clsx(styles.input, styles.textarea, textAreaClassName)}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
        />
      </label>
    )

  return (
    <label className={clsx(styles.root, error && styles.error, className)}>
      <div className={styles.label}>
        {label} {required && '*'}
      </div>
      <input
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        className={styles.input}
        required={required}
      />
    </label>
  )
}

export default Input
