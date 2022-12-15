import clsx from 'clsx'
import styles from './Input.module.scss'

export interface InputProps {
  label: string
  value: string
  placeholder?: string
  onChange: (value: string) => void
  onBlur?: (value: string) => void
  type: React.HTMLInputTypeAttribute
  required?: boolean
  error?: boolean
  className?: string
  textAreaClassName?: string
}

function Input({
  value,
  onChange,
  onBlur,
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
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          onBlur={(e) => onBlur?.(e.target.value)}
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
        onChange={(e) => onChange(e.target.value)}
        type={type}
        placeholder={placeholder}
        className={styles.input}
        required={required}
        onBlur={(e) => onBlur?.(e.target.value)}
      />
    </label>
  )
}

export default Input
