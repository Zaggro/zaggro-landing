import Footer, { FooterProps } from './Footer'
import { Meta, Story } from '@storybook/react/types-6-0'

export default {
  title: 'Components/Footer',
  component: Footer,
} as Meta<FooterProps>

const Template: Story<FooterProps> = (args) => <Footer {...args} />

export const Default = Template.bind({})
