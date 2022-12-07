import clsx from 'clsx'
import SectionHeader from 'components/SectionHeader/SectionHeader'
import styles from './Blog.module.scss'

interface BlogProps {
  className?: string
  id?: string
}

function Blog({ id, className }: BlogProps) {
  return (
    <section className={clsx(styles.root, className)} id={id}>
      <SectionHeader
        title="Blog"
        description="News and articles regarding ZAGGRO will appear here soon."
      />
    </section>
  )
}

export default Blog
