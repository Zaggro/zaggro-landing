import clsx from 'clsx'
import { useState } from 'react'
import styles from './Tabs.module.scss'

export type TabItem = {
  value: string
  text: string
}

export interface TabProps {
  variation: 'primary' | 'secondary'
  items: TabItem[] | string[]
  activeTabIndex?: number
  onChange?: (item: string, index: number) => void
  className?: string
}

function Tabs({
  variation,
  items,
  activeTabIndex = 0,
  onChange,
  className,
}: TabProps) {
  const [active, setActive] = useState(activeTabIndex)

  const handleChange = (item: string, index: number) => {
    setActive(index)
    onChange?.(item, index)
  }

  return (
    <div className={clsx(styles[variation], className)} role="tablist">
      {items.map((item, index) => {
        const { value, text } =
          typeof item === 'string' ? { value: item, text: item } : item
        return (
          <button
            className={clsx(styles.button, active === index && styles.active)}
            onClick={() => handleChange(value, index)}
            role="tab"
            key={value}
            disabled={index === active}
          >
            {text}
          </button>
        )
      })}
    </div>
  )
}

export default Tabs
