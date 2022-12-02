import '../styles/index.scss'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'purple',
    values: [
      {
        name: 'purple',
        value: '#564673',
      },
      {
        name: 'white',
        value: '#ffffff',
      },
    ],
  },
}
