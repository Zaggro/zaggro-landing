/** @type {import('next').NextConfig} */

const path = require('path')
const { withSentryConfig } = require('@sentry/nextjs')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import 'global.scss';`,
  },
  sentry: {
    disableServerWebpackPlugin: true,
    disableClientWebpackPlugin: true,
  },
  output: 'standalone',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

const sentryWebpackPluginOptions = {
  // https://github.com/getsentry/sentry-webpack-plugin#options.
  silent: true, // Suppresses all logs
}

// ! Sentry is breaking storybook, investigate and fix
// module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions)

module.exports = nextConfig
