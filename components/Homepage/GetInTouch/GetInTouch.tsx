import clsx from 'clsx'
import Button from 'components/Button/Button'
import CardBase from 'components/CardBase/CardBase'
import Typography from 'components/Typography/Typography'
import styles from './GetInTouch.module.scss'

interface GetInTouchProps {
  className?: string
}

function GetInTouch({ className }: GetInTouchProps) {
  return (
    <CardBase
      className={clsx(styles.root, className)}
      contentClassName={styles.content}
    >
      <Typography tag="h3" variant="h5">
        Integrate ZAGGRO services and EARN 80% of the fees.
      </Typography>
      <Button href="mailto:info@zaggro.io">Get in touch</Button>
    </CardBase>
  )
}

export default GetInTouch
