import * as nextImage from 'next/image'
import '../styles/index.scss'

// TODO: Images not loading in storybook

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => <img {...props} />,
})

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
        value: '#2d1a51',
      },
      {
        name: 'white',
        value: '#ffffff',
      },
    ],
  },
}
