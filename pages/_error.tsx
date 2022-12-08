import * as Sentry from '@sentry/nextjs'
import type { NextPage } from 'next'
import NextErrorComponent, { ErrorProps } from 'next/error'

interface ErrorComponentProps extends ErrorProps {
  err?: Error
  hasGetInitialPropsRun?: boolean
}

const ErrorComponent: NextPage<ErrorComponentProps> = ({
  hasGetInitialPropsRun,
  err,
  statusCode,
}) => {
  if (!hasGetInitialPropsRun && err) {
    Sentry.captureException(err)
  }

  return <NextErrorComponent statusCode={statusCode} />
}

ErrorComponent.getInitialProps = async (context) => {
  const errorInitialProps: ErrorComponentProps =
    await NextErrorComponent.getInitialProps(context)

  const { res, err, asPath } = context

  errorInitialProps.hasGetInitialPropsRun = true

  // Returning early because we don't want to log 404 errors to Sentry.
  if (res?.statusCode === 404) {
    return errorInitialProps
  }

  if (err) {
    Sentry.captureException(err)
    await Sentry.flush(2000)
    return errorInitialProps
  }

  Sentry.captureException(
    new Error(`_error.js getInitialProps missing data at path: ${asPath}`)
  )
  await Sentry.flush(2000)

  return errorInitialProps
}

export default ErrorComponent
